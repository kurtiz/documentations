---
id: setup-lets-encrypt-ssl
title: Set Up Let's Encrypt SSL on AWS
sidebar_label: Let's Encrypt SSL
sidebar_position: 1
description: Learn how to install and configure a free SSL certificate on an AWS EC2 server using Certbot and Let's Encrypt.
keywords: [ssl, letsencrypt, certbot, aws, ec2, https, nginx, apache]
---

# 🔒 Setting Up Let's Encrypt SSL on an AWS Server

Use this guide to install and configure a **free SSL certificate** from Let's Encrypt on your AWS EC2 instance using **Certbot** — the official Let's Encrypt client.

---

## 📋 Prerequisites

Before you begin, ensure you have:

- An AWS EC2 instance running Ubuntu, Debian, CentOS, or Amazon Linux.
- A registered domain name pointed to your server (via an A record in your DNS).
- Port **80 (HTTP)** open in your EC2 Security Group (required for certificate validation).
- SSH access to your server.

---

## 🚀 Step-by-Step Installation

### 1. Connect to Your AWS Server via SSH

```bash
# For Amazon Linux
ssh -i your-key.pem ec2-user@your-server-ip

# For Ubuntu
ssh -i your-key.pem ubuntu@your-server-ip
```

---

### 2. Install Certbot (Let's Encrypt Client)

Choose the appropriate command for your OS and web server:

#### Ubuntu/Debian

```bash
sudo apt update
# For Nginx
sudo apt install certbot python3-certbot-nginx -y

# For Apache
sudo apt install certbot python3-certbot-apache -y
```

#### CentOS / RHEL / Amazon Linux 2

```bash
sudo yum install epel-release -y

# For Nginx
sudo yum install certbot python3-certbot-nginx -y

# For Apache
sudo yum install certbot python3-certbot-apache -y
```

---

### 3. Obtain an SSL Certificate

#### Option A: Automatic Configuration (Recommended)

Let Certbot automatically configure SSL for your web server:

```bash
# For Nginx
sudo certbot --nginx

# For Apache
sudo certbot --apache
```

#### Option B: Manual Mode (Standalone)

Use this if you're not using Nginx or Apache:

```bash
sudo certbot certonly --standalone -d yourdomain.com -d www.yourdomain.com
```

> 💡 This temporarily uses port 80, so ensure nothing else is running on it.

---

### 4. Verify SSL Certificate

Run the following to confirm your certificate was issued:

```bash
sudo certbot certificates
```

You should see your domain listed with expiration details.

---

### 5. Set Up Auto-Renewal

Let’s Encrypt certificates expire every 90 days. Automate renewal with a cron job:

```bash
sudo crontab -e
```

Add this line to run the renewal check twice daily:

```cron
0 */12 * * * /usr/bin/certbot renew --quiet
```

---

### 6. Configure Your Web Server (If Needed)

Certbot usually updates your config, but double-check:

#### Nginx

Ensure your server block includes:

```nginx
listen 443 ssl;
ssl_certificate /etc/letsencrypt/live/yourdomain.com/fullchain.pem;
ssl_certificate_key /etc/letsencrypt/live/yourdomain.com/privkey.pem;
```

#### Apache

Make sure SSL is enabled and paths are correctly configured in your virtual host file.

---

### 7. Test HTTPS

Visit `https://yourdomain.com` in your browser to confirm the SSL certificate is working.

---

## 🛠 Troubleshooting

- **Port 80 Blocked?** Temporarily open it in your EC2 Security Group.
- **DNS Not Propagated?** Verify your domain resolves to your EC2 IP.
- **Errors from Certbot?** Use debug mode:

```bash
sudo certbot --nginx --debug
```

---

## 📌 Additional Notes

- Let's Encrypt enforces [rate limits](https://letsencrypt.org/docs/rate-limits/) — test using `--staging` when experimenting.
- If you're using an AWS **Application Load Balancer (ALB)**, use **[AWS Certificate Manager (ACM)](https://aws.amazon.com/certificate-manager/)** instead of Certbot.
