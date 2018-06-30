---
type: blog
layout: post
title: "Why use a blockchain over a database?"
description: "Blockchains aren't suitable for every use-case, so when should you pick a blochain over a traditional database"
image: /assets/img/cristina-gottardi-192989-unsplash.jpg
date: 2018-06-29 06:00:00 +0100
---

Databases have been around for decades. They came about when users of mainframes need to make sure that a shared data set was being accessed by users at the same time. How do we guarantee that the data doesn't get corrupted when multiple users are writing at the same time? How do we guarantee that users reading the data get the latest information? The Structured Query Language (SQL) was developed that allowed questions to be asked of the data in a relatively friendly way.

The work done in the 70s and 80s on mainframe database theory and practice came in useful in the web era. In web applications there are also many users - this time using a web browser instead of a text-only terminal and a central database. The database is still tasked with providing consistency guarantees to the users reading and writing data.

In the 00s came the "NoSQL" movement with the aim of rethinking the centralised, SQL-speaking database to fit the high-speed, high-volume needs of the busy web application. Some NoSQL databases solved the scalability problem of a single, centralised database by "sharding" the data - splitting a large data set into portions and sharing the load across several servers. These *distributed systems* are much more complicated to maintain and struggle to deliver the consistency guarantees of a single SQL-based database. Such databases are often called "eventually consistent" i.e. they favour the availability of the database (its ability to stay "up" as much as possible) over its ability to deliver strictly consistent results.

## Enter the blockchain

A blockchain, at its core, is a single table database - albeit one with some unusual characteristics:

- the data is "write only" - older writes cannot be modified.
- the database is distributed but not sharded - every copy of the database has 100% of the data.
- writing data has a cost, measured in the cryptocurrency of the blockchain.
- reads are "free" (if you have a copy of the blockchain).
- writes are slow - glacially slow by the standards of a "real" database.

![padlock]({{ post.image }})

Like a distributed database that favours availability over consistency, a blockchain is "eventually" consistent - writes take time to propagate around the network, but eventually a consensus is reached and the database reaches a consistent state.

The Ethereum blockchain allows the storage of "state", that is software can store the current values of a smart contract on the blockchain. 

## Why choose a blockchain over a database?

In my opinion, a blockchain wins over a traditional database:

- if the data is to be anonymous and yet in the public domain.
- if the rate of change of data is slow.
- if the data being stored has a high value.
- if you need a publicly auditable timestamp.
- if you need to be able to trust that old data cannot be tampered with.

These rules all fit the use-case of *Notarisation*, so check out our [Nottario](https://nottarr.io) service which allows you to digitally fingerprint a file and store the data on the Ethereum blockchain. This guarantees that *that file* was in *that state* at *that time*. The notarisation metadata is stored on a public blockchain forever with thousands of copies all over the globe. We could have used a traditional database, but then you could never be sure that our service would never get switched off. This way the data lasts forever on the blockchain in all circumstances. The blockchain is the database that you can never switch off!

