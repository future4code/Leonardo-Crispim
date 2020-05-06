### Exercício 1
a) VARCHAR e o limite do numero de caracteres e DATE representa uma data (YYYY-MM-DD)

b) O primeiro query mostrou o(s) database(s) atualmente criado(s) e o segundo mostrou a(s) sua(s) respectiva(s) table(s).

c) Exercicio deu erro e retornou o seguinte:
Error Code: 1064. You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'Actor' at line 1

### Exercício 2
a) 
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);
```
b) Entrada duplicada para chave "PRIMARY" -- Significa que houve uma tentativa de adicionar uma chave (UNIQUE) que ja existe na table.

C) Mesmo erro que o exercicio A, faltava especificar certos parametros.

```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
```

D) Mesmo erro que o exercicio A, faltava especificar certos parametros
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Steven Spielberg",
  400000,
  "1949-04-18", 
  "male"
);
```

E) O valor do DATE estava sendo enviado como um number e nao uma string com ""

```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);
```

### Exercício 3

A) ``` SELECT * from Actor WHERE gender = "female" ```

B) ```SELECT salary from Actor WHERE name = "Tony Ramos"```

C) 0 row(s) returned -- Pois todos os atores registrados tinham valores male ou female

D) ```SELECT * from Actor WHERE salary <= 500000```

E) ```SELECT id, name from Actor WHERE id = "002"``` o parametro NAME estava escrito como NOME

### Exercício 4

A) A query procura os dados dos atores cujo qual a letra comeca com (A) **ou** (J) e que tenham um salario acima de 300**K**

B) ```SELECT * FROM Actor WHERE (name NOT LIKE "A%" OR name NOT LIKE "J%") AND salary > 350000```

C) ```SELECT * FROM Actor WHERE name LIKE "%g%" OR name LIKE "%G%";```

D) ```SELECT * FROM Actor WHERE (name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%") AND salary BETWEEN 350000 AND 900000;```

### Exercicio 5

A) A query cria uma tabela de filmes com ID, Titulo, Sinopse, data de lancamento e pontuacao

```CREATE TABLE Movie (
		id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL UNIQUE,
    synopsis TEXT NOT NULL,
    release_Date DATE NOT NULL,
    rating INT NOT NULL
)
```
B) 
```
INSERT INTO Movie (id, title, synopsis, release_date, rating)
VALUES(
  "001", 
  "Se Eu Fosse Você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
  "2006-01-06", 
  "7"
);
```

C)
```
INSERT INTO Movie (id, title, synopsis, release_date, rating)
VALUES(
  "002", 
  "Doce de mãe",
  "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
  "2012-12-27", 
  "10"
);
```

D)
```
INSERT INTO Movie (id, title, synopsis, release_date, rating)
VALUES(
  "003", 
  "Dona Flor e Seus Dois Maridos",
  "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
  "2017-11-02", 
  "8"
);
```

E)
```
INSERT INTO Movie (id, title, synopsis, release_date, rating)
VALUES(
  "004", 
  "Auto da compadecida",
  "O filme mostra as aventuras de João Grilo e Chicó, dois nordestinos pobres que vivem de golpes para sobreviver. Eles estão sempre enganando o povo de um pequeno vilarejo no sertão da Paraíba, inclusive o temido cangaceiro Severino de Aracaju, que os persegue pela região. Somente a aparição da Nossa Senhora poderá salvar esta dupla.",
  "2000-10-10", 
  "10"
);
```
### Exercicio 6

A) ```SELECT id, title, rating from Movie WHERE id = "004"```

B) ```SELECT * from Movie WHERE title = "Auto da compadecida"```

C) ```SELECT id, title, synopsis from Movie WHERE rating >= 7```

### Exercicio 7

A) ```SELECT * from Movie WHERE title LIKE "%vida%"```

B) ```SELECT * FROM Movie WHERE title LIKE "%auto%" OR synopsis LIKE "%auto%";```

C) ```SELECT * FROM MOVIE WHERE release_date < "2020-05-04";```

D)
```
SELECT * FROM MOVIE
WHERE release_date < "2020-05-04" AND 
      (title LIKE "%TERMO DE BUSCA%" OR
      synopsis LIKE "%TERMO DE BUSCA%") AND rating > 7;
```