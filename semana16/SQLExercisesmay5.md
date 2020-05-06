### Exercício 1
a) Essa query remove a coluna 'salary'

b) Essa query muda o nome da coluna 'gender' para 'sex'

c) Essa query fundamentalmente nao faz nada na tabela atual, porem se utilizada em de outro jeito poderia mudar uma coluna para ter o nome 'gender' aceitando uma string de no maximo 255 caracteres

d) ```ALTER TABLE Actor CHANGE gender gender VARCHAR(100);```

### Exercício 2

a) 
```
UPDATE Actor
SET 
	name = "Keanu Reeves",
    birth_date = "1996/01/24"
WHERE id = "003";
```

b)
```
UPDATE Actor
SET name = "JULIANA PÃES"
WHERE name = "Juliana Paes";
```

c)
```
UPDATE Actor
SET 
	name = "Eminem",
	birth_date = "1980-06-16",
    salary = 9999999,
    gender = "male"
WHERE id = "005";
```

d)
```
UPDATE Actor
SET name = "Testador"
WHERE id = "111"
```

O console avisou que nao houve nenhuma mudanca, pois nao existia o id "111" para encontrar e modificar.

### Exercício 3

a)
```
DELETE FROM Actor 
WHERE name = "Fernanda Montenegro";
```

Obs: Recebi a seguinte mensagem: 
```
Error Code: 1175. You are using safe update mode and you tried to update a table without a WHERE that uses a KEY column.  To disable safe mode, toggle the option in Preferences -> SQL Editor and reconnect.
```

b)
```
DELETE FROM Actor 
WHERE gender = "male" AND salary > 1000000;
```

### Exercício 4

a) ```SELECT MAX(salary) from Actor;```

b) ```SELECT MIN(salary) from Actor;```

c) ```SELECT COUNT(*) FROM Actor WHERE gender = "female"```

d) ```SELECT SUM(salary) from Actor;```

### Exercício 5

a) Essa query pega a quantidade de atores de cada genero e os agrupa, mostrando seus respectivos resultados.

b) 
```
SELECT id, name
FROM Actor
ORDER BY name DESC
```

c)
```
SELECT *
FROM Actor
ORDER BY salary ASC
```

d)
```
SELECT *
FROM Actor
ORDER BY salary DESC
LIMIT 3
```

e)
```
SELECT AVG(salary)
FROM Actor
GROUP BY gender
```

### Exercício 6

a)
```
ALTER TABLE Movie
ADD playing_limit_date VARCHAR(255);
```

b)
```
ALTER TABLE Movie
CHANGE rating rating FLOAT;
```

c)
```
UPDATE Movie
SET playing_limit_date = "2020-05-05"
WHERE id = 1;
```

```
UPDATE Movie
SET playing_limit_date = "2001-01-01"
WHERE id = 2;
```

d)
```
DELETE FROM Movie
WHERE id = 3;
```

Apos deletar recebo o mesmo aviso de outro exercicio similar, nao ouve alteracao ou resposta pois nao foi encontrado o filme procurado.

### Exercício 7

a)
```
SELECT COUNT(*)
FROM Movie
WHERE rating > 7.5;
```

```3 Filmes.```

b)
```
SELECT AVG(rating)
FROM Movie
```

Media: 8.75

c)
```
SELECT COUNT(*)
FROM Movie
WHERE playing_limit_date > CURDATE();
```

```0 filmes em cartaz```

d)
```
SELECT COUNT(*)
FROM Movie
WHERE release_Date < CURDATE();
```

```4 filmes ainda vao lancar```

e)
```
SELECT MAX(rating) 
FROM Movie;
```

```Nota 10```

f)
```
SELECT MIN(rating) 
FROM Movie;
```

```Nota 7```

### Exercício 8

a)
```
SELECT *
FROM Movie
ORDER BY title;
```

b)
```
SELECT *
FROM Movie
ORDER BY title DESC
LIMIT 5;
```

c)
```
SELECT *
FROM Movie
WHERE release_date < CURDATE() 
ORDER BY release_date DESC
LIMIT 3;
```

d)
```
SELECT *
FROM Movie
ORDER BY rating DESC
LIMIT 3;
```

