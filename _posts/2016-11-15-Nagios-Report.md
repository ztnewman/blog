---
layout: post
title: Nagios Report
tag: nagios
---

Threw together a quick script to parse the Nagios status file and report any hosts or services that were disabled.

file = "/var/log/nagios/status.dat"

lines = [line.rstrip('\n') for line in open(file)]

for line in lines:
        if 'hoststatus' in line:
                check_type = 'host'
        if 'servicestatus' in line:
                check_type = 'service'
        if 'host_name' in line:
                host_name = line.split('=')[1]
        if 'service_description' in line:
                service_name = line.split('=')[1]
        if 'notifications_enabled=0'in line:
                if check_type == 'host':
                        print 'Host Disabled:', host_name
                if check_type == 'service':
                        print 'Service Disabled:', host_name, '-', service_name
