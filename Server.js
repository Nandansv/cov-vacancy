const next = require('next');
const {parse} = require('url');
const express = require('express');
const {
    name,
    version 
} = require('./package.json');
const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const port = 3000;

const handle = app.getRequestHandler();

let registry = {
    mappings : {
        ['/'] : "/index",
        ['/home'] : "/home",
    }
}

app.prepare()
    .then(() => {
        const server = express();

        server.all('*',(req,res) => {
            const {pathname,path,href,query} = parse(req.url,true);

            if(Object.keys(registry.mappings).includes(pathname)){
                let resolvedPath = registry.mappings[pathname];
                app.render(req,res,resolvedPath,query);
            }
            else{
                handle(req,res);
            }
        })

        server.listen(port , (err) => {
            if(err) throw err;
            console.log(" Server Listening at : 3000")
        })
    })