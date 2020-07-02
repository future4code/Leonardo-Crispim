### Exercício 1
a) E uma chave criada para fazer relacao com outras tabelas.

b) ```Esqueci de colocar os outros codigos```
```
INSERT INTO Rating(id, comment, movie_id, score)
VALUES(
"004",
"legal",
"004",
10
)
```

c)
```
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`sagan_leonardo_db`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))
```

Resposta: ``` Nao e possivel adicionar ou atualizar uma coluna filha pois nao foi encontrado o parametro requisitado ```

d) ```ALTER TABLE Rating DROP score;```

e) 
```
Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`sagan_leonardo_db`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))
```

``` Tive esse resultado pois nao da pra deletar algo relacionado ```

### Exercicio 2

a) E uma tabela que relaciona duas tabelas diferentes (actor e movie) puxando o ID de dois parametros diferentes.

b) 
```
INSERT INTO MovieCast (movie_id, actor_id)
VALUES(
"002",
"006"
)
```

c)
```
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`sagan_leonardo_db`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))

```

``` Parametro especificado nao foi encontrado ```

d) 
```
Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`sagan_leonardo_db`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))

```

```Nao e possivel deletar parametros relacionados```

### Exercicio 3

a) O ```ON``` serve para unir duas colunas com nomes diferentes.

b) 
```
SELECT m.name as Nome, m.id as ID, r.rate as Rate FROM Movies m 
INNER JOIN Rating r ON m.id = r.movie_id;
```

### Exercicio 4

a)
```
SELECT 
m.name as Nome, m.id as ID, r.rate as Rate, r.comment as Comentário FROM Movie m 
LEFT JOIN Rating r ON m.id = r.movie_id;
```

b)
```
SELECT
m.id as ID, m.name as Nome, mc.actor_id as Actor_id FROM Movie m
RIGHT JOIN MovieCast mc ON m.id = mc.movie_id;
```

c)
```
SELECT AVG(r.score), m.name FROM Movie m 
LEFT JOIN Rating r ON m.id = r.movie_id GROUP BY m.id;
```

### Exercicio 5

a) Para conseguir criar uma tabela com detalhes especificos do primeiro JOIN sem pegar informacoes desnecessarias antes do segundo JOIN

b) 
```
SELECT m.id as Movie_id, m.name as nome, a.id as Actor_id, a.name as Ator FROM Movie m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;
```

c) ``` Error Code: 1054. Unknown column 'm' in 'field list' ```
 O select tinha um virgula em vez de ponto.
 
d) 
```
SELECT m.id as Movie_id, m.name as name, a.id as Actor_id, a.name as star, r.score as criticscore, r.comment as review 
FROM Movie m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id
JOIN Rating r ON m.id = r.movie_id
```




