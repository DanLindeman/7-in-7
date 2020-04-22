This definition was found here: https://github.com/big-data-europe/docker-hbase

Thanks to Big Data Europe for putting together a wonderful hbase docker-compose definition

### To start this container

```bash
docker-compose up
```

### To login to the database

First, find the container ID of the database

```bash
$ docker ps
CONTAINER ID        IMAGE                                                    COMMAND                  CREATED              STATUS                             PORTS                                                                                                                                                                            NAMES
8c42e25ebabf        bde2020/hadoop-historyserver:2.0.0-hadoop2.7.4-java8     "/entrypoint.sh /run…"   About a minute ago   Up 24 seconds (health: starting)   8188/tcp                                                                                                                                                                         historyserver
a53b772bc580        bde2020/hadoop-namenode:2.0.0-hadoop2.7.4-java8          "/entrypoint.sh /run…"   About a minute ago   Up 24 seconds (health: starting)   50070/tcp                                                                                                                                                                        namenode
0f95f224dd97        bde2020/hbase-standalone:1.0.0-hbase1.2.6                "/entrypoint.sh /run…"   About a minute ago   Up 23 seconds                      0.0.0.0:2181->2181/tcp, 0.0.0.0:2888->2888/tcp, 0.0.0.0:3888->3888/tcp, 0.0.0.0:16000->16000/tcp, 0.0.0.0:16010->16010/tcp, 0.0.0.0:16020->16020/tcp, 0.0.0.0:16030->16030/tcp   hbase
922d084d674a        bde2020/hadoop-nodemanager:2.0.0-hadoop2.7.4-java8       "/entrypoint.sh /run…"   About a minute ago   Up 24 seconds (health: starting)   8042/tcp                                                                                                                                                                         nodemanager
6fe6c10ce79d        bde2020/hadoop-datanode:2.0.0-hadoop2.7.4-java8          "/entrypoint.sh /run…"   About a minute ago   Up 24 seconds (health: starting)   50075/tcp                                                                                                                                                                        datanode
e7db64d5da09        bde2020/hadoop-resourcemanager:2.0.0-hadoop2.7.4-java8   "/entrypoint.sh /run…"   About a minute ago   Up 23 seconds (health: starting)   8088/tcp                                                                                                                                                                         resourcemanager
```

Next, when we want to do things from the shell we `exec` into the running container and run the hbase shell

```bash
docker exec -it hbase hbase shell

Version 1.2.6, rUnknown, Mon May 29 02:25:32 CDT 2017
hbase(main):001:0>
```

That's it! You're in! Happy hacking!
