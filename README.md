# mini proyecto usando docker, ts, postgres
## repositorio
https://github.com/Jviejo/ts-2024-pg

## creacion de una base de datos postgres
```sh
docker run -d -p 5432:5432 -e POSTGRES_PASSWORD=pwd postgres

docker logs a511
```
## Comprobar que nos podemos conectar con una herramienta (Dbeaver)
https://dbeaver.io/download/


## Carga de la base de datos Nortwind dentro de postgres
https://raw.githubusercontent.com/pthom/northwind_psql/master/northwind.sql

## crear el package.json e instalar el pg (driver de postgres)
```
npm i pg @types/pg

npx nodemon --exec npx ts-node index.ts
```

## programa en TS que haga queries a la base de datos
```ts
import { ClientConfig, Pool } from "pg";

const clientConfig: ClientConfig = {
    user: "postgres",
    host: "localhost",
    database: "postgres",
    password: "pwd",
    port: 5432
}
const pool = new Pool(clientConfig);

type CustomerType = {
    customer_id: string
    company_name: string
    contact_name: string
    contact_title: string
    address: string
    city: string
    region: string | null
    postal_code: string
    country: string
    phone: string
    fax: string
}

const resultado = await pool.query<CustomerType>('SELECT * FROM customers limit 2', []);
 
```