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
    cur.execute("""select dt_news,img,short_text_ua,full_text_ua,short_text_ru,full_text_ru
                     from www.news
                     where active=1
                     order by dt_news desc,id
                     limit 3
                     offset %s
                     """ % in_data["offset"])
    data = cur.fetchall()
    if data==None:
        out_data = {"error": {"code": 1, "message": "Помилка вводу логін/пароль!"}}
    else:
        out_data["news"] = [{"dt_news": "{0:%d.%m.%Y}".format(r[0]),
                             "img": r[1],
                             "short_text_ua": r[2],
                             "full_text_ua":  r[3],
                             "short_text_ru": r[4],
                             "full_text_ru":  r[5]} for r in data]

except Exception as e:
    out_data = {"error": {"code": 2, "message": str(e)}}


print('Content-type: application/json\n\n')
print(json.dumps(out_data))
