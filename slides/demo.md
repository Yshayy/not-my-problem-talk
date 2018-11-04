
<link rel="stylesheet" type="text/css" href="./soluto.css" />

<!-- .slide: data-background="#ffffff" data-state="soluto" -->
# <span style="color:#00aeef; font-weight:bold">Not my problem!</span>
### <span style="color:#9e9e9e"> Delegating respobisiblites to infrastrucutre </span>
<br/>

<div style="color:#434343">
<div>Yshay Yaacobi</div>
@yshayy
</div>
<div>https://git.io/fxh57</div>

---

<!-- .slide: data-background="#ffffff" data-state="soluto" -->
 <div style="font-size:1.5em;color:#696969">
 As a developer, I want to <span style="color:#00aeef;font-weight:bold" > focus on building features</span> that deliver  <span style="color:#00aeef;font-weight:bold" >business value </span>.
 </div>

---


<!-- .slide: data-background="#eeeeee" data-state="soluto" -->
## <span style="box; color:#00aeef">Infrastructure</span>
<img style="box-shadow:none; border:none; filter: grayscale(100%)" src="./infra.png">


---

<!-- .slide: data-background="#ffffff" data-state="soluto" -->

<div style="font-weight:bold">
<span style="color:#696969">Monolith<span> 
<span style="color:#00aeef">---------→</span>
<span style="color:#696969">Microservices<span>
</div>

---

<!-- .slide: data-background="#ffffff" data-transition="fade" data-state="soluto"  -->

### Few Monoliths

<div position="relative">
<div style="position:absolute; top:120px; left:300px">
<span style="position:absolute;bottom:40px;left:30px; color:#696969;font-size:0.9em" >Monolith #1 </span>
<img style="border:none; width:300px; box-shadow:none" src="./monolith.png" >
</div>

<div position="relative">
<div style="position:absolute; top:390px; left:100px">
<span style="position:absolute;bottom:40px;left:30px; color:#696969;font-size:0.9em" >Monolith #2 </span>
<img style="width:300px; border:none; box-shadow:none" src="./monolith.png" >
</div>

<div position="relative">
<div style="position:absolute; top:390px; right:160px">
<span style="position:absolute;bottom:40px;left:30px; color:#696969;font-size:0.9em" >Monolith #3 </span>
<img style="width:300px; border:none; box-shadow:none" src="./monolith.png" >
</div>

</div>

---


<!-- .slide: data-background="#ffffff" data-transition="fade" data-state="soluto" -->

### Few Monoliths

<div position="relative">
<div style="position:absolute; top:120px; left:300px">
<span style="position:absolute;top:80px;left:30px; font-size:0.6em; color:#696969" >Application code</span>
<img style="width:300px;border:none; box-shadow:none" src="./monolith.png" >
<div style="text-align:left;position:absolute; bottom:-15px; left:-15px; ">
<img style=" margin:0; border:none; box-shadow:none;width:80px" src="./monolith-code.png" />
<div style="color:#696969;font-size:0.7em;margin-top:-15px">Infra code </div>
</div>
</div>

<div position="relative">
<div style="position:absolute; top:390px; left:100px">
<span style="position:absolute;top:80px;left:30px; font-size:0.6em; color:#696969" >Application code</span>
<img style="width:300px;border:none; box-shadow:none" src="./monolith.png" >
<div style="text-align:left;position:absolute; bottom:-15px; left:-15px; ">
<img style=" margin:0; border:none; box-shadow:none;width:80px" src="./monolith-code.png" />
<div style="color:#696969;font-size:0.7em;margin-top:-15px">Infra code </div>
</div>
</div>

<div position="relative">
<div style="position:absolute; top:390px; right:160px">
<span style="position:absolute;top:80px;left:30px; font-size:0.6em; color:#696969" >Application code</span>
<img style="width:300px;border:none; box-shadow:none" src="./monolith.png" >
<div style="text-align:left;position:absolute; bottom:-15px; left:-15px; ">
<img style=" margin:0; border:none; box-shadow:none;width:80px" src="./monolith-code.png" />
<div style="color:#696969;font-size:0.7em;margin-top:-15px">Infra code </div>
</div>
</div>

</div>

---

<!-- .slide: data-background="#ffffff" data-transition="fade" data-state="soluto" -->

<span class="blue" style="font-weight:bold;">
Monoliths ----→ Lots of Microservices
</span>
<div>
<img style="border:none;box-shadow:none" src="./micro1.png" />
</div>

---

<!-- .slide: data-background="#ffffff" data-transition="fade" data-state="soluto" -->

<span class="blue" style="font-weight:bold;">
Monoliths ----→ Lots of Microservices
</span>
<div>
<img style="border:none;box-shadow:none" src="./micro2.png" />
</div>

---

<!-- .slide: data-background="#ffffff" data-transition="fade" data-state="soluto" -->
### Service structure

<div style="display: flex; justify-content:center; " >
<img style="box-shadow:none;border:none;" src="./cloud-service.png" />
<div style="display:flex;visibility:hidden" >
<div class="blue" style="font-weight:bold; margin:10px; align-self:center;">----→</div>
<img style="box-shadow:none;border:none;" src="./cloud-service2.png" />
</div>
</div>

<div style="color:#696969">Infra-code and business logic code live together with every microservice</div>



---

<!-- .slide: data-background="#ffffff" data-transition="fade" data-state="soluto" -->
### Service structure

<div style="display: flex; justify-content:center; " >
<img style="box-shadow:none;border:none;" src="./cloud-service.png" />
<div  style="display:flex" >
<div class="blue" style="font-weight:bold; margin:10px; align-self:center;">----→</div>
<img style="box-shadow:none;border:none;" src="./cloud-service2.png" />
</div>
</div>

<div style="color:#696969;font-weight:bold">Can we write only our business code and let our hosting environment take care of the rest?</div>

---

<!-- .slide: data-background="#ffffff" data-state="soluto" -->


## About me
<div style="float:right">
<img style=" width:300px; border:6px #00aaef solid; border-radius:150px;  box-shadow:none; " src="./me.png" />
<div>Yshay Yaacobi</div>
<div>@yshayy</div>
</div>
* Tech lead @ Soluto
* Open source
* Cloud architecture
* Functional Programming
* Docker
* Code Quality


---

<!-- .slide: data-background="#ffffff" data-state="soluto" -->

## About Soluto

* Based in Tel Aviv, acquired by Asurion at 2013
* Next generation of tech support
* 150M users worldwide
* We love open-source


---

<!-- .slide: data-background="#ffffff" data-state="soluto" -->

<img style="border:none; box-shadow:none" src="./soluto-micro.png" />

---

<!-- .slide: data-background="#ffffff" data-state="soluto" -->

## Shifting to microservices

* ~5 services -> 100+ services
* Cultural change, new aspects of ownership
* CI/CD - Better tooling automation

---

<!-- .slide: data-background="#ffffff" data-state="soluto" -->

# How does a service look like?

---

<!-- .slide: data-background="#ffffff" data-state="soluto" -->

### DEMO - Notifications service V1

---

<!-- .slide: data-background="#ffffff" data-state="soluto" -->

## Spec - Notifications service

* We want to send notifications to users
* Notifications will be based in templates
* Notifications will be personalized

---

<!-- .slide: data-background="#ffffff" data-state="soluto" -->

## Flow - Notification service

<img src="./app.png" style="width:600px" />

1. Get user identifier and notification type
* Fetch user details from users micro-service
* Format message using a template
* Send a message

---

<!-- .slide: data-background="#ffffff" data-state="soluto" -->

## Let's write some code

---

# Demo

---


<!-- .slide: data-background="#ffffff" data-state="soluto" -->

## What's missing?

<div style="text-align:left; font-size:1.2em; margin:0 40px">
- Visibility  
- Security  
- Resiliency  
</div>

---


<!-- .slide: data-background="#ffffff" data-state="soluto" -->

## Logging

* We need to add a logger
* We send logs to a 3rd party provider
* Let's get a library + a provider

---


<!-- .slide: data-background="#ffffff" data-state="soluto" -->

<div style="text-align:left; font-size:60px; margin:0 20%">
☑ Logging  
<span style="font-weight:600">☐ Error policies </span> 
<div style="color:#333333">
☐ Authentication  
☐ Monitoring
</div>

---


<!-- .slide: data-background="#ffffff" data-state="soluto" -->

## Error policies

* The network can fail
* We want to retry failed requests
* Let's add Polly

---


<!-- .slide: data-background="#ffffff" data-state="soluto" -->

<div style="text-align:left; font-size:60px; margin:0 20%">
☑ Logging  
☑ Error policies  
<span style="font-weight:600">☐ Authentication</span>
<div style="color:#333333">
☐ Monitoring
</div>

---


<!-- .slide: data-background="#ffffff" data-state="soluto" -->

## Authentication

* We'll use JWT token
* OIDC/OAuth2

---

<!-- .slide: data-background="#ffffff" data-state="soluto" -->
<!-- Add business monitoring -->
<!-- Add metrics -->

<div style="text-align:left; font-size:60px; margin:0 20%">
☑ Logging  
☑ Error policies  
☑ Authentication  
<span style="font-weight:600">☐ Monitoring<span>
</div>

---


<!-- .slide: data-background="#ffffff" data-state="soluto" -->

## Monitoring

* Performance metrics, throughput, latency
* Statsd client

---


<!-- .slide: data-background="#ffffff" data-state="soluto" -->

<div style="text-align:left; font-size:60px; margin:0 20%">
☑ Logging  
☑ Error policies  
☑ Authentication  
☑ Monitoring
</div>

---

# Demo

---

<!-- .slide: data-background="#ffffff" data-transition="fade" data-state="soluto" -->

### What just happend here?

<div style="position: relative">
<img style="box-shadow:none; border:none; width:400px" src="./deps.png" />

<div class="fragment fade-in" style="
background-color:orange;
color:white;
font-weight:bold;
width:800px;
box-shadow: 3px 6px 3px #969696;
position:absolute;
        left: 0;
        right: 0;
        margin: auto;
        top:200px;
        ">
We wanted a small micro service and got a bunch of code and dependencies
</div>

---

<!-- .slide: data-background="#ffffff" data-transition="fade" data-state="soluto" -->

### What just happend here?

<div style="position: relative">
<img style="box-shadow:none; border:none; width:400px" src="./deps.png" />

<div  style="
background-color:orange;
color:white;
font-weight:bold;
width:800px;
box-shadow: 3px 6px 3px #969696;
position:absolute;
        left: 0;
        right: 0;
        margin: auto;
        top:200px;
        ">
4 X Lines of codes !!! <br/>
3 X Direct dependencies !!!
</div>


---

<!-- .slide: data-background="#ffffff" data-state="soluto" -->

### Soluto - microservices v1

* Shared template - dependencies and code blocks
* Used by teams as a boilerplate
* Shared “common” packages/frameworks
* Lots of DI magic
* Worked well until...

---

<!-- .slide: data-background="#ffffff" data-state="soluto" -->

### Problems

* Upgrades are **Hard**
* Dependencies can break
* Dependencies can conflict
* Dependencies requires re-build+re-deploy
* Extremely difficult to introduce global change

---

<!-- .slide: data-background="#ffffff" data-state="soluto" -->

## And that's not the worse...

---

<!-- .slide: data-background="#ffffff" data-state="soluto" -->

### We need to solve it for each and every programming language

---

<!-- .slide: data-background="#ffffff" data-state="soluto" -->

### Not all languages are born equal

<img style="border:none;box-shadow:none" src="./matrix.png">

---

<!-- .slide: data-background="#ffffff" data-state="soluto" -->
 <div style="font-size:1.5em;color:#696969">
 As a developer, I want to <span style="color:#00aeef;font-weight:bold" > focus on building features</span> that deliver  <span style="color:#00aeef;font-weight:bold" >business value </span>.
 </div>

---

<!-- .slide: data-background="#ffffff" data-state="soluto" -->
 <div style="n font-size:1.5em;color:#696969">
 Which of these concerns can be solved at <span style="color:#00aeef;font-weight:bold" > environment level </span> ?
 </div>

---

<!-- .slide: data-background="#ffffff" data-state="soluto" -->

### Soluto - microservices v2

<div style="justify-content:center; display:flex; align-items:center" >
<img style="border-radius:40px; padding:10px;width:250px;height:230px;" src="./docker.png" />
<div class="blue" style="width:250px;font-size:200px"> + </div>
<img style="border-radius:40px; padding:10px;width:250px;height:230px" src="./k8s.png " />
</div>

---

<!-- .slide: data-background="#ffffff" data-state="soluto" -->

### Kubernetes

* Orchestrate our services
* Solves many cross cutting concerns

---

<!-- .slide: data-background="#ffffff" data-state="soluto" -->

### A **Sidecar** Container
<div style="position:relative;float:right">
<img style=" width:350px; border:none;  box-shadow:none; " src="./pod.png" />
<img class="fragment" style="position:absolute;right:10px; top:300px; width:500px;border:none;box-shadow:none;" src="./replica.png" />
<img class="fragment" style="position:absolute;right:400px; top:300px; width:500px;border:none;box-shadow:none;" src="./replica.png" />
</div>
* Additonal Container in a **pod**
* Provide **functionality** <br/> to support main app
* **Co-scheduled** together in <br/> replicas

---

<!-- .slide: data-background="#ffffff" data-state="soluto" -->

### Sidecars can help us solve infrastructure concerns **externally** to our app

---

# Let's get rid of stuff

---


<!-- .slide: data-background="#ffffff" data-state="soluto" -->

# Logging Revisited

---

<!-- .slide: data-background="#ffffff" data-state="soluto" -->

## Logging

* Use log forwarder
* Scrape the logs from Docker

---

<!-- .slide: data-background="#ffffff" data-state="soluto" -->

## FluentD

* Run on every node (Daemonset)
* Declarative configuration to define log pipelines

---

<!-- .slide: data-background="#ffffff" data-state="soluto" -->

## Logging - extra benefits

* Different policies
* Info/Debug  -> low retention 
* Error/Fatal  -> high retention 
* Plugins -> anonymization

---


<!-- .slide: data-background="#ffffff" data-state="soluto" -->

<div style="text-align:left; font-size:60px; margin:0 20%">
<s>☑ Logging  </s>    
☑ Error policies  
☑ Authentication  
☑ Monitoring
</div>

---

<!-- .slide: data-background="#ffffff" data-state="soluto" -->

# Error policies Revisited

---


<!-- .slide: data-background="#ffffff" data-state="soluto" -->

## Error policies

* Service-mesh, THE buzzword for 2018
* Istio
* Injects proxy sidecar

---


<!-- .slide: data-background="#ffffff" data-state="soluto" -->

## Service mesh - Istio 

<img src="./service-mesh.png" style="width:100%" />

---

<!-- .slide: data-background="#ffffff" data-state="soluto" -->

## Service mesh - Resiliency 

* Configurable failure handling

---


<!-- .slide: data-background="#ffffff" data-state="soluto" -->

## Service mesh extra benefits

* Security
* Traffic management
* Tracing
* Too many to count...

---


<!-- .slide: data-background="#ffffff" data-state="soluto" -->

<div style="text-align:left; font-size:60px; margin:0 20%">
<s>☑ Logging</s>  
<s>☑ Error recovery</s>  
☑ Authentication  
☑ Monitoring
</div>

---


<!-- .slide: data-background="#ffffff" data-state="soluto" -->

# Authentication Revisited

---


<!-- .slide: data-background="#ffffff" data-state="soluto" -->

## Authentication

* Let's use a sidecar
* Soluto/Airbag

---


<!-- .slide: data-background="#ffffff" data-state="soluto" -->

## Authentication - Airbag

<img src="./airbag.png" style="width:100%" />

---

<!-- .slide: data-background="#ffffff" data-state="soluto" -->

## Authentication - Airbag

* Configuration yaml example
* Open source
* Probably be superseded by <br/> Istio's origin authentication

---


<!-- .slide: data-background="#ffffff" data-state="soluto" -->

<div style="text-align:left; font-size:1.25em; margin:0 20%">
<s>☑ Logging</s>   
<s>☑ Resiliency</s>   
<s>☑ Authentication</s>  
☑ Monitoring  
</div>

---


<!-- .slide: data-background="#ffffff" data-state="soluto" -->

# Monitoring

---


<!-- .slide: data-background="#ffffff" data-state="soluto" -->

## Monitoring

<img src="./prom.png" style="width:100%" />

---

<div style="text-align:left; font-size:1.3em; margin:0 20%">
<s>☑ Logging</s>  
<s>☑ Resiliency</s>  
<s>☑ Authentication</s>  
<s>☑ Monitoring</s>
</div>

---


<!-- .slide: data-background="#ffffff" data-state="soluto" -->

##  A new requirement

* Sending lots of messages
* Batch process 

---


<!-- .slide: data-background="#ffffff" data-state="soluto" -->

## Previous solutions

<img src="./dqd-intro.png" style="width:100%" />

---


<!-- .slide: data-background="#ffffff" data-state="soluto" -->

## Yet Another sidecar 

<img src="./dqd.png" style="width:100%" />

---


<!-- .slide: data-background="#ffffff" data-state="soluto" -->

## Dequeue Daemon Sidecar 

* Soluto/DQD
* Read items from queue, activate service
* Back-pressure support
* Expose consumption metrics

---


## DQD - Demo

---


<!-- .slide: data-background="#ffffff" data-state="soluto" -->

## DQD - benefits

* Scaled with service
* Testing
* Agnostic 

---

<!-- .slide: data-background="#ffffff" data-state="soluto" -->

### Second iteration

* Lots of code elimination
* Dependencies removal
* Leaner, more testable service
* Declarative approach
* Better visibility

---

### Architecture

<!-- .slide: data-background="#ffffff" data-state="soluto" -->

<img style="width:600px" src="./arch.png">
</div>
* External processes
* **Agents & Proxies**
* Co-scheduling

---

<!-- .slide: data-background="#ffffff" data-state="soluto" -->

### How far can we go?

* **Gateways** - routing, caching, validation, rate limiting, policies
* **Configuration** - secrets, cloud resource binding
* **Tools** - remote debugging/profiling
Supporting services - analytics, feature flags, etc…
* **Probably more**… (https://landscape.cncf.io/)

---

<!-- .slide: data-background="#ffffff" data-state="soluto" -->

### How did it **affect** us?
* Cleaner, leaner services
* Testing got easier
* Faster adoptions of new languages and tools
* No more Soluto.Logging/Monitoring/Auth/... packages
* We're still learning...

---

<!-- .slide: data-background="#ffffff" data-state="soluto" -->
 <div style="font-size:1.5em;color:#696969">
 As a developer, I want to <span style="color:#00aeef;font-weight:bold" > focus on building features</span> that deliver  <span style="color:#00aeef;font-weight:bold" >business value </span>.
 </div>

---

<!-- .slide: data-background="#ffffff" data-state="soluto" -->

# What can the infrastructure do for you?


---

<!-- .slide: data-background="#ffffff" data-state="soluto" -->

## Thank you


---

<!-- .slide: data-background="#ffffff" data-state="soluto" -->

## Questions


---


<!-- .slide: data-background="#ffffff" data-state="soluto" -->


### Additonal resources - tools

* AirBag - github.com/soluto/airbag 
* DQD - github.com/soluto/dqd
* FluentD - https://www.fluentd.org/
* Prometheus - https://prometheus.io
* Istio - https://istio.io/
* Skaffold - github.com/GoogleContainerTools/skaffold
* Oidc-server-mock - github.com/Soluto/oidc-server-mock
* FluentD k8s level filter - github.com/Soluto/fluent-plugin-kubernetes-log-level

---

<!-- .slide: data-background="#ffffff" data-state="soluto" -->

### Additonal resources

<div style="font-size:0.8em">
<ul>
<li>CNCF landscape - https://landscape.cncf.io/ </li>
<li>
Design patterns for container-based distributed systems - https://static.googleusercontent.com/media/research.google.com/en//pubs/archive/45406.pdf
</li>
<li>
Introduction to modern network load balancing and proxying - https://blog.envoyproxy.io/introduction-to-modern-network-load-balancing-and-proxying-a57f6ff80236
</li>
</ul>
</div>