#! /bin/bash

DOMAIN=kbonneau.fr
SRC=/etc/letsencrypt/live/$DOMAIN
DST=ssl

rm "$SRC/fullchain.pem.bak"
rm "$SRC/privkey.pem.bak"

mv "$SRC/fullchain.pem" "$SRC/fullchain.pem.bak"
mv "$SRC/privkey.pem" "$SRC/privkey.pem.bak"

cp --dereference "$SRC/fullchain.pem" "$DST/fullchain.pem"
cp --dereference "$SRC/privkey.pem"   "$DST/privkey.pem"

chown -r ai:ai "$DST"
chmod -R +r "$DST"
