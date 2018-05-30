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

## Logging - extra benefits

* Different policies - low/high retention

---

# What about Resiliency?

---

## Resiliency

* Service-mesh, THE buzzword for 2018
* Istio

---


# What about Authentication?

---

## Authentication

* Let's use a sidecar
* Airbag

---

# What about Authorization?

---

## Authorization

* Airbag?

---

# Monitoring

---

## Monitoring

* We want some metrics to check performance and scale
* We're going to use a statsd client with external provider

---


## Let's make things more interesting...

---

## What if we want to batch send messages?

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