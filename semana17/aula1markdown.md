### Exercício 1

a) ` Sim pois usar strings da uma maior diversidade para a criacao de IDs `

### Exercicio 2

a)

b) 
```
const createTable = async() =>{
    await connection.raw(
        `CREATE TABLE UserList (
            user_id VARCHAR(255) PRIMARY KEY NOT NULL,
            user_email VARCHAR(255) NOT NULL,
            user_password VARCHAR(255) NOT NULL
        );`
    )
}
```

### Exercicio 3

a) `Transforma a JWT_KEY em uma string e precisa ser utilizada "pro typescript nao enxer o saco" - Goli `

### Exercicio 7

a) `Possibilita receber uma resposta em qualquer formato, por que sim`