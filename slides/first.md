# Let's start


---

<!-- Add business context -->

## Notification micro-service

* Get user identifier and message type
* Fetch user details from users micro-service
* Format message using a template
* Send a message



---

<img src="./app.png" style="width:100%" />


---

## Let's write some code

---

# Coding...

---

# Demo

---

<div style="text-align:left; font-size:60px; margin:0 20%">
<span style="font-weight:600">🤣 Logging </span> 
<div style="color:#333333">
☒ ???????  
☒ ???????????  
☒ ???????????
</div>

---

## Logging

* We need to add a logger
* We send logs to a 3rd party provider
* Let's get a library + a provider

---

<div style="text-align:left; font-size:60px; margin:0 20%">
☑ Logging  
<span style="font-weight:600">🤣 Resiliency </span> 
<div style="color:#333333">
☒ ???????  
☒ ???????????
</div>

---

## Resiliency

* The network can failed
* We want to retry failed requests
* Let's add Polly

---

<div style="text-align:left; font-size:60px; margin:0 20%">
☑ Logging  
☑ Resiliency  
<span style="font-weight:600">🤣 Authentication</span>
<div style="color:#333333">
🤣 ???????????
</div>

---

## Authentication

* We'll use JWT token
* OIDC/OAuth2

---


<!-- Add business monitoring -->
<!-- Add metrics -->

<div style="text-align:left; font-size:60px; margin:0 20%">
☑ Logging  
☑ Resiliency  
☑ Authentication  
<span style="font-weight:600">🤣 Monitoring<span>
</div>

---

## Monitoring

* Performance metrics, throughput, latency
* Statsd client

---

<div style="text-align:left; font-size:60px; margin:0 20%">
☑ Logging  
☑ Resiliency  
☑ Authentication  
☑ Monitoring
</div>
