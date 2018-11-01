
<link rel="stylesheet" type="text/css" href="./soluto.css" />

<!-- .slide: data-background="#ffffff" data-state="soluto" -->
# <span style="color:#00aeef; font-weight:bold">Not my problem!</span>
### <span style="color:#9e9e9e"> Delegating respobisiblites to infrastrucutre </span>
<br/>

<div style="color:#434343">
<div>Yshay Yaacobi</div>
@yshayy
</div>

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
<span style="position:absolute;bottom:40px;left:30px; color:#696969" >Monolith #1 </span>
<img style="border:none; box-shadow:none" src="./monolith.png" >
</div>

<div position="relative">
<div style="position:absolute; top:440px; left:80px">
<span style="position:absolute;bottom:40px;left:30px; color:#696969" >Monolith #2 </span>
<img style="border:none; box-shadow:none" src="./monolith.png" >
</div>

<div position="relative">
<div style="position:absolute; top:440px; right:80px">
<span style="position:absolute;bottom:40px;left:30px; color:#696969" >Monolith #3 </span>
<img style="border:none; box-shadow:none" src="./monolith.png" >
</div>

</div>

---


<!-- .slide: data-background="#ffffff" data-transition="fade" data-state="soluto" -->

### Few Monoliths

<div position="relative">
<div style="position:absolute; top:120px; left:300px">
<span style="position:absolute;top:80px;left:30px; font-size:0.7em; color:#696969" >Application code</span>
<img style="border:none; box-shadow:none" src="./monolith.png" >
<div style="text-align:left;position:absolute; bottom:-15px; left:-15px; ">
<img style=" margin:0; border:none; box-shadow:none;width:80px" src="./monolith-code.png" />
<div style="color:#696969;font-size:0.7em;margin-top:-15px">Infra code </div>
</div>
</div>

<div position="relative">
<div style="position:absolute; top:440px; left:80px">
<span style="position:absolute;top:80px;left:30px; font-size:0.7em; color:#696969" >Application code</span>
<img style="border:none; box-shadow:none" src="./monolith.png" >
<div style="text-align:left;position:absolute; bottom:-15px; left:-15px; ">
<img style=" margin:0; border:none; box-shadow:none;width:80px" src="./monolith-code.png" />
<div style="color:#696969;font-size:0.7em;margin-top:-15px">Infra code </div>
</div>
</div>

<div position="relative">
<div style="position:absolute; top:440px; right:80px">
<span style="position:absolute;top:80px;left:30px; font-size:0.7em; color:#696969" >Application code</span>
<img style="border:none; box-shadow:none" src="./monolith.png" >
<div style="text-align:left;position:absolute; bottom:-15px; left:-15px; ">
<img style=" margin:0; border:none; box-shadow:none;width:80px" src="./monolith-code.png" />
<div style="color:#696969;font-size:0.7em;margin-top:-15px">Infra code </div>
</div>
</div>

</div>

---

<!-- .slide: data-background="#ffffff" data-transition="fade" data-state="soluto" -->

<div class="blue" style="font-weight:bold;">
Monoliths ----→ Lots of Microservices
</div>


---

<!-- .slide: data-background="#ffffff" data-transition="fade" data-state="soluto" -->

<div class="blue" style="font-weight:bold;">
Monoliths ----→ Lots of Microservices
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
* 150M worldwide users
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

* We want to send notifications for users
* Notifications will be based on templates
* Notifications will be personalized

---

## Flow - Notification service

<img src="./app.png" style="width:800px" />

1. Get user identifier and notification type
* Fetch user details from users micro-service
* Format message using a template
* Send a message

---

## Let's write some code

---

# Demo

---

<div style="text-align:left; font-size:60px; margin:0 20%">
<span style="font-weight:600">☐ Logging </span> 
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
<span style="font-weight:600">☐ Resiliency </span> 
<div style="color:#333333">
☒ ???????  
☒ ???????????
</div>

---

## Resiliency

* The network can fail
* We want to retry failed requests
* Let's add Polly

---

<div style="text-align:left; font-size:60px; margin:0 20%">
☑ Logging  
☑ Resiliency  
<span style="font-weight:600">☐ Authentication</span>
<div style="color:#333333">
☐ ???????????
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
<span style="font-weight:600">☐ Monitoring<span>
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

---

<!-- .slide: data-background="#ffffff" data-transition="fade" data-state="soluto" -->

### What just happend here?

<div style="position: relative">
<img style="box-shadow:none; border:none; width:600px" src="./deps.png" />

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
        top:300px;
        ">
We wanted a small micro service and got a bunch of code and dependencies
</div>

---

<!-- .slide: data-background="#ffffff" data-transition="fade" data-state="soluto" -->

### What just happend here?

<div style="position: relative">
<img style="box-shadow:none; border:none; width:600px" src="./deps.png" />

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
        top:300px;
        ">
4 X Lines of codes !!! <br/>
3 X Direct dependencies !!!
</div>


---

<!-- .slide: data-background="#ffffff" data-state="soluto" -->

### Soluto - microservices v1

* Shared template - dependencies and code blocks
* Used by teams as a boilerplate
* Shared “common” packages
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

<img src="./matrix.png">

---

<!-- .slide: data-background="#ffffff" data-state="soluto" -->
 <div style="font-size:1.5em;color:#696969">
 As a developer, I want to <span style="color:#00aeef;font-weight:bold" > focus on building features</span> that deliver  <span style="color:#00aeef;font-weight:bold" >business value </span>.
 </div>

---

<!-- .slide: data-background="#ffffff" data-state="soluto" -->
 <div style="font-size:1.5em;color:#696969">
 Which of these concerns cam be solved at <span style="color:#00aeef;font-weight:bold" > environment level </span> ?
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

* Orchestrate all workloads
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

# Logging Revisited

---

## Logging

* Use log collector
* Scrape the logs from Docker

---

## FluentD

* Run on every node (Daemonset)
* Declarative configuration to define log pipelines

---

## Logging - extra benefits

* Different policies
* Info/Debug  -> low retention 
* Error/Fatal  -> high retention 
* Plugins -> anonymization

---

<div style="text-align:left; font-size:60px; margin:0 20%">
<s>☑ Logging  </s>    
☑ Resiliency  
☑ Authentication  
☑ Monitoring
</div>

---

# Resiliency Revisited

---

## Resiliency

* Service-mesh, THE buzzword for 2018
* Istio
* Injects proxy sidecar

---

## Service mesh - Istio 

<img src="./service-mesh.png" style="width:100%" />

---

## Service mesh - Resiliency 

* Configurable failure handling

---

## Service mesh extra benefits

* Security
* Traffic management
* Tracing
* Too many to count...

---

<div style="text-align:left; font-size:60px; margin:0 20%">
<s>☑ Logging</s>  
<s>☑ Resiliency</s>  
☑ Authentication  
☑ Monitoring
</div>

---

# Authentication Revisited

---

## Authentication

* Let's use a sidecar
* Soluto/Airbag

---

## Authentication - Airbag

<img src="./airbag.png" style="width:100%" />

---

## Authentication - Airbag

* Configuration yaml example
* Open source
* Probably be superseded by <br/> Istio's origin authentication

---

<div style="text-align:left; font-size:1.25em; margin:0 20%">
<s>☑ Logging</s>   
<s>☑ Resiliency</s>   
<s>☑ Authentication</s>  
☑ Monitoring  
</div>

---

# Monitoring

---

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

##  A new requirement

* Sending lots of messages
* Batch process 

---

## Previous solution

<img src="./dqd-intro.png" style="width:100%" />

---

## Yet Another sidecar 

<img src="./dqd.png" style="width:100%" />

---

## Dequeue Daemon Sidecar 

* Soluto/DQD
* Read items from queue, activate service
* Back-pressure support
* Expose consumption metrics

---

## DQD - Demo

---

## DQD - benefits

* Scaled with service
* Trusted
* Agnostic 
* Testing

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
## What about **serverless**?

---

<!-- .slide: data-background="#ffffff" data-state="soluto" -->

### Serverless

* Allows you to focus only on functions and nothing else…
* Sort-of language agnostic
* Event-driven model with separation between triggers/sources/sinks managed by declarative configuration

---

<!-- .slide: data-background="#ffffff" data-state="soluto" -->

### Serverless - drawbacks

* Works mostly for stateless workload
* Popular solutions comes with serious vendor lock-in across all stack
* Many promising k8s implementations
* Many efforts to make it better/stronger/faster and standard
* Might be the best solution in the future

---

<!-- .slide: data-background="#ffffff" data-state="soluto" -->

### How did it **affect** us?
* Still on-going process
* Cleaner, leaner services
Testing got easier
* Faster adoptions of new languages and tools

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