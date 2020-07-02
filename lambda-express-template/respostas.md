Exercicios aula 66

### Exercicio 1)

Tarefa 2) - 1
```
({ hasBody : true, hasQueries: false })

({ hasBody : false, hasQueries: true })

({ hasBody : true, hasQueries: true })

```

Tarefa 2) - 2 Por que tudo recebido pelo body e uma string.

Tarefa 2) - 3 Quando forem enviados tanto um Input quanto um Body.

```({ hasBody : true, hasQueries: true })```

Tarefa 2) - 4 Quando for enviado um Body porem o usuario nao enviar um Input

Tarefa 2) - 5 OK

Tarefa 3)
```ts
exports.handler = async (event) => {
    if(event.cep.length >= 8){
        let test = 0
        for (let i = 0; i < event.cep.length; i++){
            if(event.cep.charAt[i] === "-"){
                test++
            }
        }
        if(test > 1 || test == 0){
            return false
        }
        else{
            return true
        }
    }
    else{
        return false
    }
};
```

### Exercicio 2

