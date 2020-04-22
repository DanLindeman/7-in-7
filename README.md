# 7 databases in 7 weeks

This repository is a companion piece to the book [7 Databases in 7 weeks](https://www.amazon.com/Seven-Databases-Weeks-Modern-Movement/dp/1680502530)

Each folder contains a docker-compose file for getting up and running with each database. If, for example, you wanted to get up and running with a PostgreSQL database:

```bash
>>> cd postgres
>>> docker-compose up
```

Each folder also contains a README.md that contains the user information you'll need to login to the database and work on the exercises found in the book.

Wherever possible, we've chosen the smallest possible docker image to use for the exercises presented in the text. Many times that image is based on alpine linux, which is so small that often utilities we take for granted won't be available.
