# Procurement Calendar

## Overview

The Procurement Calendar is a tender-management application for the City of Montreal.
It brings several sources of information together in one interface: upcoming tenders, publicly available tenders, and contracts awarded to companies.

## Background

I built this project during my internship at the City of Montreal and continued working on it as an external consultant. It began as a proof of concept but eventually became a fully functional application, which explains why some features were added in a somewhat patchwork way.

Originally, the software only offered an administration interface for upcoming tenders. Two more information sources were later added: tenders being negotiated and active contracts resulting from tenders.

## Features

### Statistics

The software provided several interfaces for an overview of current tenders and their status:

- A calendar showing status changes by date for upcoming, in-preparation, and active tenders.
- A Gantt chart showing tender stages against their dates.
- Statistics comparing the current situation with the previous year.

### Administration

Several administration interfaces allowed users to add information to tenders that was not necessarily available in the original sources, but added real value to an application bringing together all three sources.

### Communication

A chat interface made it easy to quickly review all interactions related to a tender. It also allowed users to mention tenders and add people to a room.

## Technologies

### Database

MySQL

### Backend and frontend

PHP (no framework)
