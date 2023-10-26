# Fastify+Next.js Sample

## Installation

```
yarn install
```

## Usage

### DEV ENVIRONMENT

1. Change line 2 in index.js to:

```
const dev = false;
```

2. Run in cmd

```
node index.js
```

3. **_DEV_** url: http://localhost:3000/sample

### PROD ENVIRONMENT

1. Change line 2 in index.js to:

```
const dev = true;
```

2. Run in cmd:

```
yarn next build
```

3. Run in cmd

```
node index.js
```

4. **_PROD_** url: http://localhost/sample
