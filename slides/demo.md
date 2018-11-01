
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

<!-- .slide: data-background="#ffffff" data-transition="fade" data-state="soluto" -->


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

<!-- .slide: data-background="#ffffff" data-transition="fade" data-state="soluto" -->

## About Soluto

* Based in Tel Aviv, acquired by Asurion at 2013
* Next generation of tech support
* 150M worldwide users
* We love open-source


---

<!-- .slide: data-background="#ffffff" data-transition="fade" data-state="soluto" -->

<img style="border:none; box-shadow:none" src="./soluto-micro.png" />

---

<!-- .slide: data-background="#ffffff" data-transition="fade" data-state="soluto" -->

## Shifting to microservices

* ~5 services -> 100+ services
* Cultural change, new aspects of ownership
* CI/CD - Better tooling automation

---

<!-- .slide: data-background="#ffffff" data-transition="fade" data-state="soluto" -->

# How does a service look like?

---

<!-- .slide: data-background="#ffffff" data-transition="fade" data-state="soluto" -->

### DEMO - Notifications service V1

---

<!-- .slide: data-background="#ffffff" data-transition="fade" data-state="soluto" -->

## Spec - Notifications service

* We want to send notifications for users
* Notifications will be based on templates
* Notifications will be personalized

---

## Flow - Notification service

<img src="./app.png" style="width:80%" />

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
