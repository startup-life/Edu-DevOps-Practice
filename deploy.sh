#!/bin/bash

cd /var/lib/jenkins/backend
/usr/local/bin/docker-compose pull
/usr/local/bin/docker-compose up -d