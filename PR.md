# Preparação do dataset

Alterei **idContrato** para **_id** e converti todos as strings do atributo **precoContratual** para o tipo **float**.\
Importei os dados para a base de dados da seguinte forma:
```
mongoimport -d contratos -c contratos contratos2024.json --jsonArray
```
# Exercício 1
Depois de estar na diretoria do exercício, podemos montar o exercício com:
```
docker compose up --build -d
```
O compose trata de montar a imagem da API de dados.