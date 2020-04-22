### To start this container

```bash
docker-compose up
```

### To validate neo4j is working

```bash
curl http://localhost:7474/db/data/
```

output should look like

```json
{
  "extensions" : { },
  "node" : "http://localhost:7474/db/data/node",
  "relationship" : "http://localhost:7474/db/data/relationship",
  "node_index" : "http://localhost:7474/db/data/index/node",
  "relationship_index" : "http://localhost:7474/db/data/index/relationship",
  "extensions_info" : "http://localhost:7474/db/data/ext",
  "relationship_types" : "http://localhost:7474/db/data/relationship/types",
  "batch" : "http://localhost:7474/db/data/batch",
  "cypher" : "http://localhost:7474/db/data/cypher",
  "indexes" : "http://localhost:7474/db/data/schema/index",
  "constraints" : "http://localhost:7474/db/data/schema/constraint",
  "transaction" : "http://localhost:7474/db/data/transaction",
  "node_labels" : "http://localhost:7474/db/data/labels",
  "neo4j_version" : "3.4.5"
}
```

Also validate the web ui is working by opening http://localhost:7474/browser in a web browser

---

### Day 2 notes
- Download the movies zip as instructed, and unzip it into the directory `neo4j/movies.db`
- There is no need to change the `conf` file when instructed, since we've mounted a local copy
- We're using the same version as was used in the book to ensure compatibility with the movies dataset in day 2 (3.0.7). 

#### The neo4j-shell
- You may have noticed a _second_ service defined for day 2. Instead of running with `docker-compose up`, we'll need to do this part a bit differently `docker-compose run neo4j-day2`.

From there in order to run the neo4j-shell commands, you'll need to add a leading slash to the paths, like this `bin/neo4j-shell -path /data/movies.db -config /conf/neo4j.conf`

If everything went smoothly you should be in the neo4j prompt!
```
neo4j-sh (?)$
```
---

### HA Container - Day 3

We have also included a docker-compose file to try the ha cluster setup:

```bash
docker-compose -f docker-compose-ee.yml up
```

In case you forgot, bringing down services brought up with the above can be `stop` and `rm` by running the following.

```
docker-compose -f docker-compose-ee.yml stop
```

```
docker-compose -f docker-compose-ee.yml rm
```

---

That's it! You're in! Happy hacking!