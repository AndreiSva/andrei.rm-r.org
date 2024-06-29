#!/bin/sh

npm run build
rsync -a --progress ./build andrei@rm-r.org:/var/www/andrei.rm-r.org/
rsync -a --progress ./static andrei@rm-r.org:/var/www/andrei.rm-r.org/
systemctl --host=root@rm-r.org restart AndreiSite
