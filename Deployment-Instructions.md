## Step-by-Step Deployment Guide
- https://www.youtube.com/watch?v=4f3AtGj4jzU&t=971s

#### 1. Launch and connect to EC2
- Launch an Ubuntu EC2 instance (e.g., Ubuntu 22.04).
- Open inbound port 22 (SSH) and port 80 (HTTP) in your Security Group.
- Connect to it:

```sh
ssh -i your-key.pem ubuntu@<your-ec2-public-ip>
```

#### 2. Install Node.js & npm
##### Check if Node.js and npm are installed:

```sh
node -v
npm -v
```

##### If not installed:

```sh
sudo apt update
sudo apt install -y nodejs npm
```

##### (Optionally install specific versions using Node Version Manager:)

```sh
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs
```

#### 3. Upload or Clone Your React App

If your code is in GitHub:

```sh
git clone https://github.com/your-username/your-react-app.git
cd your-react-app
```

##### Or upload your files using SCP:

```sh
scp -i your-key.pem -r ./build ubuntu@<ec2-ip>:/home/ubuntu/
```

#### 4. Build Your React App

##### Inside your React project directory:

```sh
npm install
npm run build
```

## This creates a build/ folder with your production files.

#### 5. Install & Configure Nginx

##### Install Nginx:

```sh
sudo apt install -y nginx
```

##### Enable & start Nginx:

```sh
sudo systemctl enable nginx
sudo systemctl start nginx
```

#### 6. Configure Nginx for React

##### Remove the default configuration:

```sh
sudo rm /etc/nginx/sites-enabled/default
```

##### Create a new config file:

```sh
sudo nano /etc/nginx/sites-available/reactapp
```

##### Paste the following:

```sh
server {
    listen 80;
    server_name aitechview.com www.aitechview.com;

    root /var/www/reactapp;
    index index.html;

    location / {
        try_files $uri /index.html;
    }
}
```

##### Save and exit (Ctrl+O, Enter, Ctrl+X).

##### Enable the site:

```sh
sudo ln -s /etc/nginx/sites-available/reactapp /etc/nginx/sites-enabled/
```

#### 7. Move React Build Files

##### Copy your build output to Nginx web root:

```sh
sudo mkdir -p /var/www/reactapp
sudo cp -r build/* /var/www/reactapp/
```

##### Check permissions:

```sh
sudo chown -R www-data:www-data /var/www/reactapp
```

#### 8. Test and Restart Nginx

##### Test Nginx configuration:

```sh
sudo nginx -t
```


##### If successful:

```sh
sudo systemctl restart nginx
```

#### 9. Access the App

##### Open your browser and visit:

```sh
http://<your-ec2-public-ip>
```

## Your React app should be live! 🎉

#### 10. (Optional) Enable HTTPS with Let’s Encrypt

##### If you have a domain pointing to the EC2 IP:

```sh
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d your-domain.com -d www.your-domain.com
```

### ⚙️ Goal

##### ✅ Serve React frontend → http://aitechview.com/
##### ✅ Forward API requests → http://aitechview.com/api/... → http://localhost:4000/

#### 🧩 1. Open Your NGINX Config

##### Edit your site config:

```sh
sudo nano /etc/nginx/sites-available/reactapp
```

#### 🧱 2. Update It Like This

##### Here’s a complete example supporting both frontend and backend proxy:

```sh
server {
    listen 80;
    server_name aitechview.com www.aitechview.com;

    root /var/www/reactapp;
    index index.html;

    # 👇 Forward all API requests to backend server
    location /api/ {
        proxy_pass http://localhost:4000/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

    # 👇 Serve React frontend (SPA)
    location / {
        try_files $uri /index.html;
    }
}
```

#### 🧰 3. Test and Reload NGINX

```sh
sudo nginx -t
sudo systemctl reload nginx
```