#!/usr/bin/env python3
# -*- coding: UTF-8 -*-

import os
import sys
import json
import db_www


out_data = {"error": {"code": 0, "message": ""}}
try:
    content_len = int(os.environ["CONTENT_LENGTH"])
    in_body = sys.stdin.read(content_len)
    in_data = json.loads(in_body)

    con = db_www.conn()
    cur = con.cursor()
    cur.execute("select 1 from www.utilizer where login=%s", (in_data["login"],))
    if (cur.fetchone()!=None):
        out_data = {"error": {"code": 1, "message": "Користувач з вказаним логіном існує!"}}
    else:
        cur.execute("insert into www.utilizer(login,pswd,fio,email,phone) values (%s,%s,%s,%s,%s)",
                    (in_data["login"],in_data["password"],in_data["fio"],in_data["email"],in_data["phone"]))
        con.commit()

except Exception as e:
    out_data = {"error": {"code": 2, "message": str(e)}}

    
print('Content-type: application/json\n\n')
print(json.dumps(out_data))
