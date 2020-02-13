#!/usr/bin/env python3
# -*- coding: UTF-8 -*-

import os
import sys
import json
import db_www

out_data = {"error": {"code": 0, "message": ""}}
try:
    in_data = {"login":"1","password":"1"}
    con = db_www.conn()
    cur = con.cursor()
    cur.execute("select id from www.utilizer where login=%s and pswd=%s", (in_data["login"],in_data["password"]))
    data = cur.fetchone();
    if data==None:
        out_data = {"error": {"code": 1, "message": "Помилка вводу логін/пароль!"}}
    else:
        cur.execute("insert into www.j_utilizer(id) values (%s)", (data(0),))
        con.commit()
except Exception as e:
    out_data = {"error": {"code": 2, "message": str(e)}}

    
print('Content-type: application/json\n\n')
print(json.dumps(out_data))
