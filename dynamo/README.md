#Important note

We have eschewed using Dynamo running in the cloud for Day 1.

The ability to run locally without worrying about breaking the bank on accident is a godsend for learning developers.

We also found the included tutorial `http://localhost:8000/shell/` to be quite good at teaching the fundamentals.

The impact this has on using the CLI is that when the book instructs you to run `aws dynamodb <someCommand>`, you'll also need to append `--endpoint-url http://localhost:8000 --region us-east-1` to each command.

The final resultshould look like:
```bash 
aws dynamodb list-tables --endpoint-url http://localhost:8000 --region us-east-1
{
    "TableNames": []
}
```

### To start this container

```bash
docker-compose up
```

From there you'll connect to it with the `aws` cli as the book does, always appending the `--endpoint-url` and `--region` flags.

---

### Day 2 and 3

Because of the author's focus on connecting Amazon services and the pervasiveness of them in modern software development, for Day 2 and 3 we recommend following along in your AWS account. 

---

That's it! You're in! Happy Hacking!