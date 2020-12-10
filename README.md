`npm run build` - build docker container

`npm run start` - start docker container

Result:

```shell
viraxslot@MacBook-Pro odiff-test $ npm run start

> odiff-test@1.0.0 start /Users/viraxslot/Documents/projects/odiff-test
> docker container run odiff-test

Run entrypoint
Error: Cannot find module 'odiff-bin'
Require stack:
- /home/odiff/src/test.ts
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:831:15)
    at Function.Module._load (internal/modules/cjs/loader.js:687:27)
    at Module.require (internal/modules/cjs/loader.js:903:19)
    at require (internal/modules/cjs/helpers.js:74:18)
    at Object.<anonymous> (/home/odiff/src/test.ts:1:1)
    at Module._compile (internal/modules/cjs/loader.js:1015:30)
    at Module.m._compile (/home/odiff/node_modules/ts-node/src/index.ts:1056:23)
    at Module._extensions..js (internal/modules/cjs/loader.js:1035:10)
    at Object.require.extensions.<computed> [as .ts] (/home/odiff/node_modules/ts-node/src/index.ts:1059:12)
    at Module.load (internal/modules/cjs/loader.js:879:32)
```
