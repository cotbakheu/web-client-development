FROM nginx:alpine

# Clean default static files from Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copy your pre-built dist folder into Nginx public directory
COPY dist/ /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
