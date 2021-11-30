### To start this container

```bash
docker-compose up
```

---

### To login to the database

First, find the container ID of the database

```bash
$ docker ps
CONTAINER ID        IMAGE                  COMMAND                  CREATED              STATUS              PORTS               NAMES
29d5d159e0ee        postgres:10.4-alpine   "docker-entrypoint.s…"   About a minute ago   Up 8 seconds        5432/tcp            postgres_postgres_1
```

Next, when we want to do things from the shell we `exec` into the running container using bash

Note that we specify that we are going to exec into the container as the user
`postgres`

```bash
docker exec -it -u postgres postgres_postgres_1 bash
postgres@df1f4335d665:/$ whoami
postgres
```

Then, when the book specifies that we are going to execute SQL statements we
enter the container using the `psql` command line interpreter

```bash
docker exec -it -u postgres postgres_postgres_1 psql
psql (10.4 (Debian 10.4-2.pgdg90+1))
Type "help" for help.

postgres=#
```

---

### Notes regarding Day 3 exercises

We have included SQL scripts that will be run on the first launch of this container. This container will have all of the extensions called out in the book (`tablefunc`, `dict_xsyn`, `fuzzystrmatch`, `pg_trgm`, `cube`) already installed.

We have also included an equivalent `postgres/create_movies.sql` as well as loaded the movies data found on the [book source repo](https://github.com/sevenweeks/databases/blob/master/chap2-postgresql/movies_data.sql) for convenience.

---

That's it! You're in! Happy hacking!
