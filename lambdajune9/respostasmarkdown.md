Exercicios aula 64

### 1)
Achei bem longo chato e complexo.

### 2)

1. Git clone, npm i, npm run build, npm start
2. Sagan 4eddit
3. ssh -i "AulaEC2.pem" ubuntu@ec2-3-85-168-118.compute-1.amazonaws.com
4. git clone https://github.com/future4code/4eddit-sagan-5.git, cd 4eddit-sagan-5/, npm install, npm run build, cd build, npm start
5. ok
6.  sudo python -mSimpleHTTPServer 80
7.  git clone ;D
-----------

### Exercicios aula 65

a) Nao
b) "statusCode": 400, ({ message: "Missing input" })
c) "statusCode": 400, ({ message: "Missing input" })
d) "statusCode": 400, ({ message: "Missing email" })
e) "statusCode": 400, ({ message: "Invalid password" })
f) "statusCode": 200, message: "User is correct"
g) 
```js
if (!user.email) {
    return {
      statusCode: 422,
      body: JSON.stringify({ message: "Missing email" })
    };
  }
  ```
h) 
```js
{
  "user": {
		"info": {
			"name": "Astrodev",
			"email": "astrodev@f4.com.br",
			"password": "123456"
		}
  }
}
```

### Exercicio 3

```js
exports.handler = async (event) => {
    // TODO implement
    const response = {
        body: JSON.stringify({
            result: Number(event.number1) + Number(event.number2)
        })
    }
    
    return response;
};

```

### Exercicio 4

```js
exports.handler = async (event) => {
    
    if (!event.email.includes("@")) {
        return {body: JSON.stringify(
        {
        	"isEmail": false,
        	"reason": "Não possui '@' "
        })
      }}
      
    else if (!event.email.includes(".")) {
        return {body: JSON.stringify(
        {
        	"isEmail": false,
        	"reason": "Não possui '.' "
        })
      }}
      
      else {
            return {
                "isEmail": true
            };
      }
    
};

```

### Exercicio 5

```
CREATE TABLE `cartoon_char` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `nickname` varchar(255) NOT NULL,
  `imglink` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
);
```

```js
exports.handler = async (event) => {
    
    if (!event.cartoonChar.name || event.cartoonChar.name === "") {
        return {body: JSON.stringify(
        {
        	"Error Message": "Personagem sem nome."
        })
      }}
      
    else  if (!event.cartoonChar.nickname || event.cartoonChar.nickname === "") {
        return {body: JSON.stringify(
        {
        	"Error Message": "Personagem sem nome de cartoon."
        })
      }}
      
    else  if (!event.cartoonChar.imglink || event.cartoonChar.imglink === "") {
        return {body: JSON.stringify(
        {
        	"Error Message": "Personagem sem link de foto."
        })
      }}
      
    else  {
        return {
            statusCode: 200,
            body: JSON.stringify(
        {
        	"Success Message": "Personagem adicionado com sucesso!"
        })
      }}
    
};

```

