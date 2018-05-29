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

# What about Resiliency?

---

Resiliency

* Service-mesh, THE buzzword for 2018
* Istio

---


# What about Authentication?

* Let's use a sidecar

---

# What about Authorization?

---

Authorization

---

* Let's make the side car better

---

# Monitoring revisited

---

## Monitoring

* We want some metrics to check performance and scale
* We're going to use a statsd client with external provider

---


# And there's a bonus...

---

# What if we want to batch send messages?

---

## Dequeue Daemon Sidecar 
* Read items from queue, activate service
* Back-pressure support

---

# Monitoring revisited again

---

## Deployment

* Client side - Generators like Helm
* Server side - Mutation Webhooks, controllers, CRDs