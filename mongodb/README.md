### To start this container

```bash
docker-compose up
```

---

### To login to the database

Next, when we want to do things from the shell we `exec` into the running container using bash

```bash
docker-compose exec mongo bash
root@7dbcb5a30c6a:/#
```

Then, when the book specifies that we are going to connect to the MongoDB CLI we can from this prompt.

NOTE: When using this container, we have to go through a couple extra hoops to authenticate properly.
Instead of running `mongo book` run `mongo -u root -p example --authenticationDatabase admin book`

```bash
root@7dbcb5a30c6a:/# mongo -u root -p example --authenticationDatabase admin book
MongoDB shell version v3.6.5
connecting to: mongodb://127.0.0.1:27017/book
MongoDB server version: 3.6.5
>
```

---

### Loading scripts

For this chapter, we have placed scripts from the book's [github repo](https://github.com/sevenweeks/databases) into a folder called `mongo_scripts`.
When the book instructs you to load a local script, for example `load('mongoCities100000.js')`, note that your command will be a bit different.
First, because we mount these scripts into the `mongo_scripts` folder.
Second because the names of the files in the repo are different than those in the book.
So, for us, `load('mongoCities100000.js')` becomes `load('./mongo_scripts/mongo_cities1000.js');`

Heads up, we have added a .mongorc.js to this container. The configuration we have added ensures that all consoles results are pretty-printed. If you do not wish that to be the default, remove `DBQuery.prototype._prettyShell = true;`. If you find yourself _sometimes_ wanting this, add `.pretty()` to any command to make the output pretty print for a much nicer experience! :)

That's it! You're in! Happy hacking!
