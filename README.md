# React basic

[Azure Static Web Apps](https://docs.microsoft.com/azure/static-web-apps/overview) allows you to easily build [React](https://reactjs.org/) apps in minutes. Use this repo with the [React quickstart](https://docs.microsoft.com/azure/static-web-apps/getting-started?tabs=react) to build and customize a new static site.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

> swa start app
swa-cli.config.json に設定が書かれている
context は静的Webを実行しているサーバー
apiLocation は組み込みのAzure Functions の所在場所
run は静的Webを実行するためのコマンド

runで実行したサーバーを待機する
初回は失敗することがある(runで実行した結果サーバーが起動するまでに時間がかかるから?)
成功すると localhost:4280 でリクエストを待機する


## Azure Functions
組み込みのFunctionsはTypeScriptの場合はビルドの必要あり
cd api
npm run build
実行すると api/dist にJavaScriptが生成される
