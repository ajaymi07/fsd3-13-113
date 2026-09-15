localhost -URL
127.0.0.1-IP address
ctrl+c-stop the server

every request from a client 
has a pair of{ request ,
response}
## NOde package Manager (NPM)
used to install ,run,uninstall any program /project and package 
-npm install <packageName>
-npm uninstall<packageName>


to use npm ,the project must be npm projact,
to create npm projectr we can use 

-npm init -y
-it create a package.json file automatically 
package.json holds all the information related to install 
package from npm 
-it also create a folder node_modules automatically 
-node_modules holds the package /library files 
-generally we ignore the node_modules by .gitignore

## Status Codes


- 200 -> Ok
- 201 -> Created
- 400 -> Bad request
- 401 -> Unauthorized
- 403 -> Forbidden
- 404 -> Not found
- 500 -> Internal 

## Content Type

- text/plain
- text/html
- application/json
- text/css

the content type and status code can be send back to client by two ways

1. res.writeHead
2. res.setHeader
3. res.statusCode 

## send html file to client 
1. html file 

 - read html file using createReadStream
 - pipe it with res object 
2. html content 
  send any html tags/content by using
   res.end('<any html tag>')


## JSON 
  server returns data only not html contents because html content will be written by frontend developer. The data is in JSON format (JSON always store data in key value pair enclosed by {}, array can be store by [] one pair of curly bracket will represent one object and its property will be seperated by,)
  ```
    {
      id: 1,
      name: 'Mobile',
      price: 25,0000,
      rating: 4.5,
      reviews: 200
    }
  ```

