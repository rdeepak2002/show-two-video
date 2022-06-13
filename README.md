# show-two-video

## Requirements
- node
  - https://nodejs.org/en/download/
- yarn
  - https://classic.yarnpkg.com/lang/en/docs/install

## Get Started

Run the web app:

```shell
git clone https://github.com/rdeepak2002/show-two-video.git
cd show-two-video

yarn          # install dependencies
yarn start    # start web application
```

Config file for videos:
```
public/config/config.json
```

## Deploy for Production

```shell
yarn                    # install dependencies
yarn build              # build web application for production to build folder
yarn start-server-prod  # start server in production mode on port 8080 by default
```