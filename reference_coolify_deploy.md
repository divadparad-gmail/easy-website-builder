# Guide de Déploiement : De GitHub vers Coolify (API V4)
*(Archive rapatriée pour référence)*

Cette procédure documente le processus pour déployer une application web (comme notre Easy Website Builder basé sur React/Vite) sur ton serveur VPS via Coolify et GitHub.

## Étape 1 : Préparation et Hébergement sur GitHub

Pour que Coolify puisse récupérer ton code, il doit d'abord résider dans un dépôt Git.

1. **Création du dépôt** :
   * Créer un dépôt sur GitHub (ex: `easy-website-builder`).
   * Pousser le code source de l'application (le dossier `app/` complet).

## Étape 2 : Configuration Préalable sur Coolify

Avant de créer l'application, il faut récupérer trois informations essentielles :

1. **Le Token d'accès (Bearer Token)** depuis l'interface web de Coolify.
2. **Le UUID du Projet** cible.
3. **Le UUID du Serveur** (généralement `localhost` pour l'instance elle-même).

## Étape 3 : Création de l'Application (Exemple via API REST)

Bien que tu possèdes l'intégration MCP Coolify maitenant (ex: l'outil `mcp_coolify_application`), l'API REST donne une bonne idée du processus global et des paramètres attendus :

```bash
curl -X POST "https://votre-domaine-coolify.com/api/v1/applications/public" \
  -H "Authorization: Bearer VOTRE_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{ 
    "project_uuid": "UUID_DU_PROJET", 
    "server_uuid": "UUID_DU_SERVEUR", 
    "environment_name": "production", 
    "git_repository": "https://github.com/votre-user/easy-website-builder.git", 
    "git_branch": "main", 
    "build_pack": "nixpacks", 
    "name": "Easy Website Builder", 
    "ports_exposes": "5173" 
  }'
```
*(Note : Pour une application React/Vite, Nixpacks sait généralement builder automatiquement, ou tu peux spécifier un Dockerfile si besoin. Assure-toi d'exposer le bon port selon ton type de build).*

L'API te renvoie le `uuid` de l'application, utilisé pour les étapes suivantes.

## Étape 4 : Configuration du Domaine Pointeur (FQDN)

Une fois l'app créée, tu peux lui assigner son domaine public :

```bash
curl -X PATCH "https://votre-domaine-coolify.com/api/v1/applications/UUID_DE_L_APP_CREEE" \
  -H "Authorization: Bearer VOTRE_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{ 
    "domains": "https://builder.tondomaine.com" 
  }'
```

## Étape 5 : Lancement du Déploiement

Il faut forcer le premier déploiement pour que Coolify clone le repo et lance le build.

```bash
curl -X POST "https://votre-domaine-coolify.com/api/v1/deploy?uuid=UUID_DE_L_APP_CREEE" \
  -H "Authorization: Bearer VOTRE_TOKEN"
```

## Résumé pour notre usage futur via MCP :
Maintenant que nous avons les outils MCP de Coolify actifs (comme `mcp_coolify_application`, `mcp_coolify_deploy`, etc.), nous pourrons réaliser ces actions **directement** ici sans avoir à taper toutes ces requêtes cURL. Le processus sera identique :
1. Envoyer le code sur GitHub.
2. Déclarer l'application sur ton UUID de projet Coolify (port exposé, buildpack).
3. Lui lier ton domaine.
4. Lancer le déploiement.
