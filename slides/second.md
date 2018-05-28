# Let's get rid of stuff

---

## Visualizing k8s

---


---

## Logging

* Use log collector
* FluentD in a nut shell
* FluentD as a daemon set

---

# What about Authentication?

* Let's use a sidecar
* 

---

# What about Authorization?

---

Authorization

---

* We want to allow only uses with email permission the capability to send email

---

# What about Monitoring?

---

Monitoring

* We want some metrics to check performance and scale
* We're going to use a statsd client with external provider

---

# What about Resiliency?

---

Resiliency

<iframe src="http://localhost:8001/api/v1/namespaces/kube-system/services/http:kubernetes-dashboard:/proxy/#!/overview?namespace=default" style="width:600px;height:600px" />


* Istio

---

# And there's a bonus...

---

What if we want to batch send messages?

---

## Dequeue Daemon Sidecar 
* Read items from queue, activate service
* Back-pressure support

---

# Monitoring revisited

---

## Deployment

* Client side - Generators like Helm
* Server side - Mutation Webhooks, controllers, CRDs