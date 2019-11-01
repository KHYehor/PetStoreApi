# PetStoreApi

This is realisation of pet store api, that I took from [Swagger](https://petstore.swagger.io/#/).
As I count it takes 762 lines of code in src folder.

## Architecture

I use the next architecture: [Pet Store architecture](https://drive.google.com/file/d/1uiW2fsUbbqi_SORwrSjL5gSxe12HEBKC/view?usp=sharing).

As you can see, I have: 
- [protocol](#protocol)
- [routing](#routing)
- [controller](#controller)
- [service](#service)
- [model](#model)

### Protocol 

In this layer as I planned I can try to change my transfer protocol from http to webscoket, for example. (You never know what customer wants).

[protocol](https://github.com/KHYehor/PetStoreApi/tree/master/src/protocol)

### Routing

Quite simple layer without a lot of logic, just route our requests to controllers. I have separated it to enteties: pet, store, user.

[routing](https://github.com/KHYehor/PetStoreApi/tree/master/src/routing)

### Controller

Controller's task is to call service based on our request and answer something to client.

F.E. return data or return info that data was not found etc.

[controller](https://github.com/KHYehor/PetStoreApi/tree/master/src/controllers)

### Service

All buisness logic is placed here, here we can process our data, or call another external api service, count something, change our data. Validation is placed on this level.

[service](https://github.com/KHYehor/PetStoreApi/tree/master/src/services)

### Model

Model task is not so hard, you just need to take data from storage. It is separated during to entities.

[model](https://github.com/KHYehor/PetStoreApi/tree/master/src/models)

## Other tools

### Middlewares

Yes, I have used some middlewares. They are used to mixin our request/responce context with our data. It is good to use for authentication, request parser, session id.

I used:

- [authentication](https://github.com/KHYehor/PetStoreApi/tree/master/src/authentication)
- [request parser](https://github.com/KHYehor/PetStoreApi/blob/master/src/index.js)
- [session store](https://github.com/KHYehor/PetStoreApi/blob/master/src/index.js)

### Crypto

I remember that we have to store our user's data in secure, so I also hash passwords and store them. If I want to compare passwords, I can't just decrypt it, I can only compare hashed one.

[crypto](https://github.com/KHYehor/PetStoreApi/blob/master/src/tools/crypto.js)

### Validation

It is good that we can have validation on our frontend part, but it is also cool (you just have to) validate it on out server. I check validation on service layer.

[validation](https://github.com/KHYehor/PetStoreApi/tree/master/src/validation)

### Config

I have separate folder to my project configurations, f.e. Redis Session store, MongoDB configs, I can also place my .env here.

[config](https://github.com/KHYehor/PetStoreApi/tree/master/src/configs)

## Used Dependencies

And as you see, I have used next dependencies:

- [koa](https://www.npmjs.com/package/koa)
- [koa-bodyparser](https://www.npmjs.com/package/koa-bodyparser)
- [koa-passport](https://www.npmjs.com/package/koa-passport)
- [koa-redis](https://www.npmjs.com/package/koa-redis)
- [koa-router](https://www.npmjs.com/package/koa-router)
- [koa-session](https://www.npmjs.com/package/koa-session)
- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [mongoose](https://www.npmjs.com/package/mongoose)
- [passport-local](https://www.npmjs.com/package/passport-local)
- [pm2](https://www.npmjs.com/package/pm2)
