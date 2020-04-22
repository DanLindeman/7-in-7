### To start this container

```bash
docker-compose up
```

### To validate redis is working

```bash
docker exec -it redis_redis_1 redis-cli PING
```

output should look like

```
PONG
```

to open a redis-cli shell you can:

```bash
docker exec -it redis_redis_1 redis-cli
```

Also as a convenience we have added the redis-commander web ui, you can validate that is working by opening http://localhost:8081/ in a web browser

Also for convenience we have added a gemfile with the ruby deps needed for the exercises.

### Redis configured in replication mode

```bash
docker-compose -f docker-compose-replication.yml up
```

the logs should look similar to this:

```redis2_1           | 1:S 03 Aug 19:27:15.993 # Server started, Redis version 3.2.8
redis2_1           | 1:S 03 Aug 19:27:15.994 # WARNING you have Transparent Huge Pages (THP) support enabled in your kernel. This will create latency and memory usage issues with Redis. To fix this issue run the command 'echo never > /sys/kernel/mm/transparent_hugepage/enabled' as root, and add it to your /etc/rc.local in order to retain the setting after a reboot. Redis must be restarted after THP is disabled.
redis2_1           | 1:S 03 Aug 19:27:15.994 * The server is now ready to accept connections on port 6379
redis2_1           | 1:S 03 Aug 19:27:15.994 * Connecting to MASTER redis1:6379
redis2_1           | 1:S 03 Aug 19:27:16.003 * MASTER <-> SLAVE sync started
redis2_1           | 1:S 03 Aug 19:27:16.003 # Error condition on socket for SYNC: Connection refused
redis2_1           | 1:S 03 Aug 19:27:17.008 * Connecting to MASTER redis1:6379
redis2_1           | 1:S 03 Aug 19:27:17.009 * MASTER <-> SLAVE sync started
redis2_1           | 1:S 03 Aug 19:27:17.009 * Non blocking connect for SYNC fired the event.
redis2_1           | 1:S 03 Aug 19:27:17.010 * Master replied to PING, replication can continue...
redis2_1           | 1:S 03 Aug 19:27:17.010 * Partial resynchronization not possible (no cached master)
redis2_1           | 1:S 03 Aug 19:27:17.012 * Full resync from master: cc1946fa05ba2416814d8d02f95b53c5682a6727:1
redis2_1           | 1:S 03 Aug 19:27:17.028 * MASTER <-> SLAVE sync: receiving 76 bytes from master
redis2_1           | 1:S 03 Aug 19:27:17.029 * MASTER <-> SLAVE sync: Flushing old data
redis2_1           | 1:S 03 Aug 19:27:17.029 * MASTER <-> SLAVE sync: Loading DB in memory
redis2_1           | 1:S 03 Aug 19:27:17.029 * MASTER <-> SLAVE sync: Finished with success```
