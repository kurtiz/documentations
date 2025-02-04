---
sidebar_position: 1
sidebar_label: Accessing App Database Without Rooting
---

# Accessing Sqlite Database for Android Mobile Apps Without Rooting

This document provides detailed instructions on how to access the SQLite database used by a production android app.
It includes methods for extracting the database without rooting your Android device

---

## Introduction

The app used for this demo is a hymn app called **theAPO Hymnal**.
The **theAPO Hymnal** app uses an SQLite database named `tachymns` to store hymn data,
user preferences, and other information. My motive was to extract the hymns and other data
in order to de-develop the app again since it has been dropped from the play store and people needed the app.

This database is stored in the app's private internal storage directory,
which is not directly accessible without root privileges.
However, there are alternative methods to access and manage this database.

---

## Database Location

The database file `tachymns` is stored in the following location on the device:

```
/data/data/<package_name>/databases/tachymns
```

So in this case the location of the database is:

```
/data/data/app.makerzgroup.apohymnal/databases/tachymns
```

This path is standard for Android apps and ensures that the database is securely stored in the app's private internal
storage.

:::info

I reverse engineered the app to get the database location and name.
If you're wondering how I did that, visit [this docs](/docs/android/reverse-engineering-android-apps.md).


:::
---

## Accessing the Database Without Rooting

If you need to access the database without rooting your device,
you can use the Android Debug Bridge (ADB) to create a backup of the app's data.

### Using ADB Backup

1. **Enable Developer Options and USB Debugging**
    - Go to **Settings > About Phone** and tap **Build Number** seven times to enable Developer Options.
    - Enable **USB Debugging** in **Settings > System > Developer Options**.

2. **Install ADB**
    - Download and install
      the [Android SDK Platform Tools](https://developer.android.com/studio/releases/platform-tools) on your computer
      or install the [ADB](https://developer.android.com/studio/command-line/adb) directly on your device. _(I usually
      prefer the latter)_

3. **Connect Your Device**
    - Connect your Android device to your computer using a USB cable or wireless debugging.
    - Ensure the device is in **File Transfer Mode** when prompted.

4. **Create a Backup**
    - Open a terminal or command prompt and run the following command:
      ```bash title='bash'
      adb backup -f app_backup.ab -noapk <package_name>
      ```
      <p> where `<package_name>` is the package name of the app you want to back up.
      In this case, it's `app.makerzgroup.apohymnal`.</p>

      ```bash title='bash'
      adb backup -f app_backup.ab -noapk app.makerzgroup.apohymnal
      ```

    - `-f app_backup.ab`: Specifies the output file name.
    - `-noapk`: Excludes the APK from the backup.

5. **Authorize the Backup**
    - A dialog will appear on your device asking for permission to back up the app. Confirm it.
    - the prompt will also require you to encrypt the backup with a password. Provide it and confirm.

   :::info

   This command creates a backup file called `app_backup.ab` in the current directory.

   :::

### Extracting the Backup File

1. **Download `abe.jar`**
    - Obtain the `abe.jar` tool from [here](https://github.com/nelenkov/android-backup-extractor).

2. **Extract the Backup**
    - Use the following command to convert the `.ab` file into a `.tar` archive:
      ```bash
      java -jar abe.jar unpack app_backup.ab backup.tar
      ```

3. **Open the Archive**
    - Extract the contents of the `.tar` file:
      ```bash
      tar -xvf backup.tar
      ```
    - Look for the `databases/` file in the extracted folder, and you should have a copy of the database.

---

## Conclusion

By following the steps outlined in this document, you can successfully access the SQLite database used by
an app without requiring root access. You can use any sqlite tool to access and manage the database.
This approach leverages ADB and backup extraction tools to securely
retrieve the database file, enabling you to analyze or modify its contents as needed.