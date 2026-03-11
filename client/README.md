Welcome to revelation-online-web-client! 

# Getting Started
## Local
To run this application:

```bash
npm install
npm run start
```

## Building For Production

To build this application for production:

```bash
npm run build
```

## Testing

This project uses [Vitest](https://vitest.dev/) for testing. You can run the tests with:

```bash
npm run test
```

## Styling

This project uses [Tailwind CSS](https://tailwindcss.com/) for styling.


## Linting & Formatting

This project uses [Biome](https://biomejs.dev/) for linting and formatting. The following scripts are available:


```bash
npm run lint
npm run format
npm run check
```


## Shadcn

Add components using the latest version of [Shadcn](https://ui.shadcn.com/).

```bash
pnpm dlx shadcn@latest add button
```

# Docker

## Build

```bash
docker build -t revelation-online-web-client . -f .\Dockerfile.dev
```
 or

```bash
docker build -t revelation-online-web-client . -f .\Dockerfile.prod
```

## Run

```bash
docker run -p 3000:3000 revelation-online-web-client
```
