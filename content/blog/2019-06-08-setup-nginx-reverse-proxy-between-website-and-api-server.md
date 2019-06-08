---
templateKey: blog-post
title: Setup nginx reverse proxy between website and api server
date: 2019-06-08T07:55:21.426Z
category:
  - Nginx
  - Nodejs
thumbnail: /images/nginx.jpg
featuredpost: true
---
_This post assumes readers have some basic knowledge of Nginx server._

Suppose you have a client facing website (www.example.com) running at Nginx server location 150.60.151.230  and an API server running at 159.65.150.237. Now we want our website to make some http calls to the api server, lets see how we can configure both the server.

**Website config:**

```
server {
  listen 80;
  listen [::]:80;
  server_name example.com www.example.com // or 150.60.151.230 (host ip address)
  location / {
     proxy_pass http://localhost:3000; // your server listening port
     proxy_http_version 1.1;
     proxy_set_header Upgrade $http_upgrade;
     proxy_set_header Connection 'upgrade';
     proxy_set_header Host $host;
     proxy_cache_bypass $http_upgrade;
  }
  location /api { // assuming your api endpoint is prefixed with /api
     proxy_set_header X-Real-IP $remote_addr;
     proxy_set_header Host 159.65.151.237;
     proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
     proxy_pass http://159.65.150.237; // api server address
  }
}
```

**API config:**

```
server {
  listen 80;
  listen [::]:80;
  server_name 159.65.150.237;
  location / {
     proxy_pass http://localhost:3000;
     proxy_http_version 1.1;
     proxy_set_header Upgrade $http_upgrade;
     proxy_set_header Connection 'upgrade';
     proxy_set_header Host $host;
     proxy_cache_bypass $http_upgrade;
  }
  location /api {
     proxy_pass http://localhost:3000;
     proxy_http_version 1.1;
     proxy_set_header Upgrade $http_upgrade;
     proxy_set_header Connection 'upgrade';
     proxy_set_header Host $host;
     proxy_cache_bypass $http_upgrade;  
  }
}
```

I have written this post as a future reference for myself and also hoping it could help someone else. Cheers!
