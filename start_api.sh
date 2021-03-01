#!/bin/bash

cwd=$(pwd)

echo -e "\n\nTearing down any running containers"
docker-compose down -v

echo -e "\n\nStarting Postgres"
docker-compose up -d

echo -e "\n\nStarting API"
nohup sls offline >> "$cwd/serverless.log" 2>&1 &

# echo -e '\nWaiting for database...\n'
# waited=0
# while ! docker-compose exec db mysqladmin ping -u $DB_USER --password=$DB_PASS -h db 1> /dev/null; do
#   sleep 10
#   ((waited++))
#   if [ "$waited" -gt 6 ]; then
#     break
#   fi
# done

# echo -e "\n\nDatabase up!"