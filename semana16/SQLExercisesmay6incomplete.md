### Exercício 1
a) O Raw retorna dois arrays, um com a resposta "que queremos" da funcao e o outro com outros detalhes sobre o que foi rodado.

b) 
```
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE name = "${name}"
  `);
  return result;
  ```
c)
```
const genderCount = async (gender: string): Promise<any> => {
  const result = await connection.raw(`
  SELECT COUNT(*) AS Atores FROM Actor WHERE gender = "${gender}"; `)
  return result;
}
```

### Exercício 2

a) 
```
const updateSalary = async (id: string, salary: number): Promise<any> => {
  await connection("Actor")
    .update({
      salary: salary,
    })
    .where("id", id);
};
```

b) 
```
const deleteActor = async (id: string): Promise<any> => {
  await connection("Actor").delete().where("id", id);
};
```

c)
```
const genderAvg = async (gender: string): Promise<any> => {
  const result = await connection.raw(`
  SELECT AVG(salary)  
  FROM Actor 
  WHERE gender = "${gender}"; `)
  return result;
}
```

### Exercicio 3

A) Para acessar especificamente o ID

//A partir daqui nao consegui fazer os exercicios.


