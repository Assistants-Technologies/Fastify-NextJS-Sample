# Fastify+Next.js Sample

## Installation

```
yarn install
```

or

```
npm install
```

## Usage

### DEV ENVIRONMENT

1. change line 2 in index.js to:

```
const dev = false;
```

2. Run in cmd

```
node index.js
```

3. Use DEV url: http://localhost:3000/sample

### PROD ENVIRONMENT

1. change line 2 in index.js to:

```
const dev = true;
```

2. Run in cmd:

```
yarn next build ./next_files
```

3. Run in cmd

```
node index.js
```

4. Use PROD url: http://localhost/sample
