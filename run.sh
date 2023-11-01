#!/bin/bash


npm run build
export NODE_ENV=production && serve -s build
