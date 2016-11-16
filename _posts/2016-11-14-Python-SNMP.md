---
layout: post
title: Python SNMP
tag: python
---

This morning we had an issue with our data feed. Our monitoring alerted that the B feed message count did not match that of the A feed.
It appeared that outgoing packets were being dropped, and after investigating we discovered the interface had autonegotiated 100Mbps instead of 1Gbps after a switch reboot last week.

Trying to monitor interface speed and duplex turns out to not be so straightforward. Interface naming varies across operating systems and releases. eth0 on RHEL5 is em1 on RHEL6 or ixgbe0 on Solaris. 
Then there's the interface ordering based on the PCI card slot order, and evaluating interface types. No need to monitor the loopback interface.

My script snmpwalks to find relevant interface descriptions, then takes their index to get the speed and duplex from IF-MIB.

Now if only Zenoss has thresholds that worked so I could properly generate events on data source changes.
