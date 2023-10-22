### docker起動コマンド
`docker run -d --net=docker-node_mongo-net --name app-node -v "$(pwd)":/app -p 3000:3000 -it node:latest /bin/bash`
### インストールモジュール
`npm -i express mongoose nodemon helmet`
### サーバー起動コマンド
`node server.js`  
上記のコマンドがめんどくさい場合はpackage.jsonの下記部分を書き換える
 ```
"scripts": {
    "dev": "nodemon server.js"
  },
```