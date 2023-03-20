# store-api

## 🚀 Descrição
Essa api foi desenvolvida em [Node.js](https://nodejs.org/pt-br/) usando os bancos de dados [PostgreSQL](https://www.postgresql.org/) e [MongoDB](https://www.mongodb.com/), e tem como objetivo gerenciar uma loja.

 - O PostgreSQL fica responsável por boa parte do banco, assim como no mostra diagrama abaxo:

![image](https://user-images.githubusercontent.com/99601659/204855763-5d2877ed-e7c9-4186-b955-6a6b86fcb461.png)


- Já o MongoDB está responsável somente pelas operações **/info** e **/review** que serão descritas mais abaixo no tópico 📦 **Product**

## <a name=“section”><a/> Seção

## 📋 Pré-requisitos

- [Git](https://git-scm.com/)

- [Node](https://nodejs.org/pt-br/)

- [Postman](https://www.postman.com/downloads/)


## 🎲 Rodando o Back End

### Clone esse repositório

``` 
git clone https://github.com/VictorNathanael/store-api.git
```
### Acesse a pasta do projeto no terminal/cmd
```
cd store-api
```

### Instale as dependencias do projeto

```
npm install
```
### Na pasta do projeto crie um arquivo chamado .env e atribua as suas strings de conexão.
*Obs: o arquivo env.example mostra como deve ser*

### Execute a aplicação
```
node index.js
```

## ⚙️ Consultando os endpoints

A aplicação consiste em quatro operações básicas na base de dados, um [CRUD](https://developer.mozilla.org/pt-BR/docs/Glossary/CRUD)


Com o Postman instalado, você pode executar as requisições a seguir.


### 🙋‍♂️ Client

- #### CREATE
Adiciona um novo cliente de acordo com o JSON enviado no body
```
POST: http://localhost:3000/clients
```
*O modelo em JSON a ser enviado no body da requisição POST é esse:* 
```
{
  "name": "Victor",
  "cpf": "123456789",
  "phone": "12345678910",
  "email": "email@gmail.com",
  "address": "Rua X, n 100"
}
```

- #### READ

Busca todos os clientes
```
GET: http://localhost:3000/clients
```
Busca um cliente expecífico pelo id
```
GET: http://localhost:3000/clients/:id
```

- #### UPDATE
Altera informações de um cliente pelo id
```
PUT: http://localhost:3000/clients
```
*No PUT o body é o mesmo do POST anterior mas acrescenta-se o clientId que será alterado:*
```
{
  "clientId": 10,
  "name": "Victor",
  "cpf": "123456789",
  "phone": "12345678910",
  "email": "email@gmail.com",
  "address": "Rua X, n 100"
}
```

- #### DELETE
Apaga o cliente do id informado
```
DELETE: http://localhost:3000/clients/:id
```


### 🚚 Supplier

- #### CREATE
Adiciona um novo fornecedor de acordo com o JSON enviado no body
```
POST: http://localhost:3000/suppliers
``` 
*O modelo em JSON a ser enviado no body da requisição POST é esse:*

```
{
  "name": "V.N Eletrônicos",
  "cnpj": "987654321",
  "phone": "12345678910",
  "email": "eletronicos@gmail.com",
  "address": "Rua Y, n 200"
}
```

- #### READ
Busca todos os fornecedores
```
GET: http://localhost:3000/suppliers
``` 
Busca um fornecedor expecífico pelo id 
```
GET: http://localhost:3000/suppliers/:id
``` 

- #### UPDATE
Altera informações de um fornecedor pelo id
```
PUT: http://localhost:3000/suppliers
```
*No PUT o body é o mesmo do POST anterior mas acrescenta-se o supplierId que será alterado:*
 
```
{
  "supplierId": 1,
  "name": "V.N Eletrônicos",
  "cnpj": "987654321",
  "phone": "12345678910",
  "email": "vneletronicos@gmail.com",
  "address": "Rua Y, n 100"
}
```


- #### DELETE
Apaga o fornecedor do id informado

```
DELETE: http://localhost:3000/suppliers/:id
``` 


### 📦 Product


- /info são as informações adicionais do produto.
- /review são comentários dos clientes referente ao produto.

- #### CREATE
Adiciona um novo produto de acordo com o JSON enviado no body
```
POST: http://localhost:3000/products
```
O modelo em JSON a ser enviado no body da requisição POST é esse:

```
{
  "name": "Mouse Logitech",
  "description": "logitech 403",
  "value": 500,
  "stock": 2,
  "supplierId": 7
}
```

Adiciona novas informações ao produto de acordo com o JSON enviado no body
```
POST: http://localhost:3000/products/info
```
O modelo em JSON a ser enviado no body da requisição POST é esse:

```
{
  "productId": 4,
  "category": "Mouse",
  "width": "15cm",
  "heigth": "20cm",
  "depth": "5cm",
  "reviews": []
}
```

Adiciona um novo comentário de acordo com o JSON enviado no body
```
POST: http://localhost:3000/products/review
```
O modelo em JSON a ser enviado no body da requisição POST é esse:

```
{
  "productId": 4,
  "review": {
    "name": "João Silva",
    "description": "bla bla bla"
  }
}
```


- #### READ
Busca todos os produtos
```
GET: http://localhost:3000/products
```
Busca um produto expecífico pelo id
```
GET: http://localhost:3000/products/:id
```
Busca todas as informações adicionais dos produtos
```
GET: http://localhost:3000/products/info
```

- #### UPDATE
Altera a descrição de um produto pelo id
```
PUT: http://localhost:3000/products
```
No PUT o body é o mesmo do POST mas acrescenta-se o productId que será alterado:

```
{
  "productId": 1,
  "name": "Notebook Acer",
  "description": "Notebook Acer i9 32gb RAM",
  "value": 27000,
  "stock": 100,
  "supplierId": 6
}
```

Altera informações de um produto pelo id
```
PUT: http://localhost:3000/products/info
```
No PUT o body é o mesmo do POST mas acrescenta-se o productId que será alterado:

```
{
  "productId": 13,
  "category": "Mouse sem fio",
  "width": "15cm",
  "heigth": "20cm",
  "depth": "5cm",
  "reviews": []
}
```


- #### DELETE
Apaga o produto do id informado
```
DELETE: http://localhost:3000/products/:id
```
Apaga a informação adicional do produto pelo id informado
```
DELETE: http://localhost:3000/products/info/:id
```
Apaga o comentário do produto pelo id e pelo index do comentário informado
```
DELETE: http://localhost:3000/products/:id/review/:index
```


### 💰 Sales

- #### CREATE

Adiciona uma nova venda de acordo com o JSON enviado no body
```
POST: http://localhost:3000/sales
```
O modelo em JSON a ser enviado no body da requisição POST é esse:

```
{
  "value": 500,
  "date": "01/01/2000",
  "clientId": 7,
  "productId": 13
}
```

- #### READ
Busca todas as vendas
```
GET: http://localhost:3000/sales
```

Busca todas as vendas do produto de determinado fornecedor
``` 
GET: http://localhost:3000/sales?supplierId=5
```
Busca uma venda expecífica pelo id 
```
GET: http://localhost:3000/sales/:id
```

- #### UPDATE
Altera informações de uma venda pelo id
```
PUT: http://localhost:3000/sales
```
No PUT o body é o mesmo do POST anterior mas acrescenta-se o saleId que será alterado:

```
{
  "saleId": 13,
  "value": 500,
  "date": "01/01/2005",
  "clientId": 7,
  "productId": 13
}
```
- #### DELETE
Apaga a venda do id informado
```
DELETE: http://localhost:3000/sales/:id
```

Feito por [Victor](https://www.linkedin.com/in/victornathanael/)
