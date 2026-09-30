# K8s for Bhuvan toolkit - Kubernetes Infrastructure & Observability Pipeline

A production-ready microservices architecture and observability pipeline built for the **Bhuvan Toolkit** using **Kubernetes (Minikube)**, **Prometheus**, **Grafana**, and **k6**.

This repository demonstrates cloud-native deployment patterns, zero-downtime application updates via **Rolling Updates**, centralized secrets management, real-time application metrics collection and simulated load testing.

---

## Architecture Overview

```text
[ Client ]
        │
        ▼
[ frontend-service ]
        │
        ▼
[ backend-service ] ────► [ mongo-service ]
        │
        ├── (Exposes /metrics) ◄──────┐
        │                             │ (Scrapes)
        ▼                             │
  [ k6-load-test ]            [ prometheus-service:9090 ]
  (Virtual Users)                     │
                                      ▼
                              [ grafana-service:3000 ]
```

## Tech Stack

* **Orchestration:** Kubernetes, Minikube, Docker, `kubectl`
* **Observability:** Prometheus, Grafana, `prom-client`
* **Load Testing:** Grafana k6

---