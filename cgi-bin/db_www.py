#!/usr/bin/env python3
# -*- coding: UTF-8 -*-

import psycopg2


param = {#"host": "195.201.101.179",
         "host": "127.0.0.1",
         "port": "5432",
         "dbname": "spectr",
         "user": "dba",
         "password": "at-spektr",
         "encoding": "utf-8"}

def conn():
    return psycopg2.connect(
        host = param["host"],
        port = param["port"],
        dbname = param["dbname"],
        user = param["user"],
        password = param["password"])
