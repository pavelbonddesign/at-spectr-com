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
    cur.execute("insert into www.advice(fio,email,phone,msgs) values (%s,%s,%s,%s)",
                (in_data["fio"],in_data["email"],in_data["phone"],in_data["message"]))
    con.commit()

except Exception as e:
    out_data = {"error": {"code": 1, "message": str(e)}}
    
print('Content-type: application/json\n\n')
print(json.dumps(out_data))
