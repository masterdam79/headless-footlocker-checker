# Headless Footlocker Checker

This repository contains a script for checking product availability on Footlocker (specifically, footlocker.nl) using Puppeteer and Docker.

**Current Status:** The script is currently not working as expected because the Footlocker website is checking for robots. We are working on a solution to bypass this check.

## Files

- `puppeteerScript.js`: This is the main script that uses Puppeteer to automate browser actions and check product availability.
- `Dockerfile`: This file is used to create a Docker image of the application.

## Usage

1. Build the Docker image:

```bash
docker build -t puppeteer-container .
```

2. Allow Docker to connect to your X server:

```bash
xhost +local:docker
```

3. Run the Docker container:

```bash
docker run -e DISPLAY=$DISPLAY -v /tmp/.X11-unix:/tmp/.X11-unix -e URL=https://footlocker.nl -p 8080:8080 puppeteer-container
```

Please note that you need to have Docker installed to build and run the Docker image.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)