# Digital Banking Web (Frontend)

## Description

Digital Banking Web est une application frontend développée avec Angular.  
Elle consomme une API backend Spring Boot pour gérer un système bancaire digital incluant les clients, les comptes bancaires et les opérations financières.

L’application inclut un système d’authentification sécurisé avec JWT et une gestion des rôles (ADMIN / USER).

---

## Technologies utilisées

| Technologie        | Rôle                                      |
|--------------------|------------------------------------------|
| Angular            | Framework frontend                        |
| TypeScript         | Langage principal                         |
| Bootstrap 5        | UI / design responsive                    |
| Bootstrap Icons    | Icônes                                    |
| RxJS               | Programmation réactive                   |
| JWT Decode         | Décodage du token JWT                    |
| Angular Router     | Navigation entre les pages               |
| Angular Guards     | Sécurisation des routes                  |
| HttpClient         | Communication avec API backend           |

---

## Fonctionnalités

### Authentification
- Login avec username/password
- Gestion du JWT token
- Gestion des rôles (ADMIN / USER)
- Protection des routes avec Guards

### Clients
- Liste des clients
- Recherche par keyword
- Ajout de client (ADMIN)
- Suppression de client

### Comptes bancaires
- Consultation des comptes
- Détails d’un compte
- Historique des opérations

### Opérations
- Débit
- Crédit
- Virement entre comptes

---

## Architecture du projet

| Dossier / Module | Description |
|------------------|-------------|
| services         | Communication avec backend API |
| models           | Interfaces (Customer, Account, Operation) |
| guards           | Sécurité des routes |
| components       | UI (Customers, Accounts, Login...) |
| environments     | Configuration backend URL |
| routing          | Gestion des routes Angular |

---

##  Sécurité

- Authentification JWT
- Stockage du token côté client
- Interception des requêtes HTTP
- Protection des routes :
  - AuthenticationGuard (utilisateur connecté)
  - AuthorizationGuard (rôle ADMIN)

---

## Installation

### 1. Installer les dépendances
```bash
npm install
