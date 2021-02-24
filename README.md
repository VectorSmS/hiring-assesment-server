# hiring-assesment-server
Before beginning please update BITLY_KEY in the .env file  
Do npm install to install the node modules  
To run the server execute:   
node index.js  

API Description  
# Send realtime updated from the server to the mobile  
Method: POST  
Path: http://127.0.0.1:3000/api/temp/broadcast  
Body: {  
        "temp":"532"  
      }    
      
# Get Mock User [Recursive]  
Method: GET  
Path: http://127.0.0.1:3000/api/mock  

# Generate Captcha  
Method: GET  
Path: http://127.0.0.1:3000/api/captcha  

# Shorten Url  
Method: POST  
Path: http://127.0.0.1:3000/api/url/shorten  
Body: {  
        "url":"https://somedomainurl.com"  
      }  
