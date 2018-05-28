# Let's start

---

## Notification micro-service

* Get user identifier and message type
* Fetch email and user details from users micro-service
* Format message using a template
* Send an email

---

## Let's write some code

---

# Coding...

---

# What about Logging?

---

## Logging

* We need to add a logger
* We send logs to a 3rd party provider
* Let's get a library + a provider

---

# What about Authentication?

---

Authentication

---

* We want to allow sending email from allowed users
* We'll use JWT token for authentication and validation them against OIDC provider

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

---

* We want to retry failed requests against our other microservices (users, email)