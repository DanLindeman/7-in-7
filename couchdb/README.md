### To start this container

```bash
docker-compose up
```

### To validate couchdb is working

```bash
docker exec -it couchdb_client_1 bash
curl $COUCH_ROOT_URL
```

The output should look like the following

```
{"couchdb":"Welcome","version":"2.1.2","features":["scheduler"],"vendor":{"name":"The Apache Software Foundation"}}
```

Also validate the Fauxton web ui is working by opening http://localhost:5984/_utils in a web browser.

For convenience we have added a .envrc in case you use [Direnv](https://direnv.net/) if you don't, you can also run:

```bash
source .envrc
```

---

That's it! You're in! Happy hacking!
