# Inventory Management

## Overview

The original goal of this software was to create a tool that I could deploy myself to become familiar with my club's infrastructure. Since the inventory department wanted to move away from Excel files to manage its inventory, it was the perfect opportunity to explore a new framework and create configurations for the club's infrastructure, managed with Argo CD.

## Background

For context, I had just taken on the role of infrastructure manager as part of our partnership with the Cédille club. At that point, I had very little experience with Kubernetes, Ansible, and Argo CD, the three main components of the club's infrastructure.

### Club server configuration

We have eight servers, all in a Proxmox cluster. Each server is also part of the Kubernetes cluster, which can use as many resources as needed.
Kubernetes is configured with Argo CD, which aims to make our Git repositories the single source of truth.
Argo CD monitors several repositories for configuration changes. When one changes, updates are deployed automatically and, if there is a problem, Cédille members are notified right away.

In this role, my responsibilities include configuring LAN ETS applications, making sure everything works correctly, and creating requested virtual machines on the Proxmox cluster, which can also allocate any remaining resources.

## Features

- Manage inventory locations and items.
- Allow club members to request equipment with direct access to inventory data, and external users to submit requests through a form that does not reveal the exact inventory contents.
- View inventory status statistics, including pending requests, loans nearing their due dates, and needed purchases.

## Technologies

### Frontend

Angular

### Backend

Node.js (TypeScript)

### Database

PostgreSQL

### Infrastructure

- Kubernetes and Argo CD (deployment)
- Docker (development environment)
