# Let's get rid of stuff


---

## Visualizing k8s

---

# Logging Revisited

---

## Logging

* Use log collector
* Scrape the logs from Docker

---

## FluentD

* Run on every node (Daemonset)
* Declarative configuration to define logs pipelines

---

## Logging - extra benefits

* Different policies - low/high retention

---

# Resiliency Revisited

---

## Resiliency

* Service-mesh, THE buzzword for 2018
* Istio
* Injects envoy sidecar

---

## Resiliency - Istio 

<img src="./service-mesh.png" style="width:100%" />

---


# AuthN/Z Revisited

---

## AuthN/Z

* Let's use a sidecar
* Soluto/Airbag

---

## AuthN/Z - Airbag

* Show config
* Show picture

---

# Monitoring

---


## Let's make things more interesting...

---

## What if we want to batch send messages?

---

## Yet Another sidecar 

* Image

---

## Dequeue Daemon Sidecar 

* Soluto/DQD
* Read items from queue, activate service
* Back-pressure support