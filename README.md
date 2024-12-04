# Projet CV Statique avec Docker et Gatsby - Mahdi SELMANI

Ce projet utilise Gatsby, un générateur de site statique (SSG), pour créer un CV pour Mahdi SELMANI. Toutes les étapes (développement, build, et run) sont encapsulées dans des conteneurs Docker afin d'assurer un environnement portable et reproductible.

## Prérequis

1. **Docker** doit être installé sur votre machine.
2. Aucun autre outil (Node.js, Gatsby CLI, etc.) n'est nécessaire sur votre machine hôte. 

## Instructions

### Pull image 

1. Vous pouvez télécharger l'image directement depuis Docker Hub pour la tester (les étapes suivantes fourniront plus de détails). Notez que l'image publiée contient uniquement les fichiers générés par la commande build exécutée localement, afin d'éviter une taille trop grande.
   ```bash
   docker pull selmanimahdi/resume:latest
   ```

2. Lancez un conteneur pour exécuter l'application :
   ```bash
   docker run -p 8000:8000 resume
   ```
3. Accédez à l'application dans votre navigateur à l'adresse suivante :
   ```bash
   http://localhost:8000
   ```
## Etapes en details

### Phase de Développement
1. Cloner le code :
   
   ```bash
   git clone https://github.com/MahdiSelmani/resume
   ```

2. Lancez un conteneur Docker en mode interactif :
   
   Pour Linux :
   ```bash
   docker run -it --rm -v $(pwd):/app -p 8000:8000 node:20 bash
   ```
   Pour Windows :
   ```bash
   docker run -it --rm -v ${PWD}:/app -p 8000:8000 node:20 bash
   ```

3. Une fois dans le conteneur, exécutez les commandes suivantes pour démarrer le mode développement (-H 0.0.0.0 permet l'accès depuis le navigateur):
   ```bash
   cd /app
   npm install
   npm run develop -- -H 0.0.0.0 
   ```

4. Accédez à l'application dans votre navigateur à l'adresse suivante :
   ```bash
   http://localhost:8000
   ```

### Phase de Build

1. Construisez une image Docker pour le build :
   
   ```bash
   docker build -t resume -f Dockerfile .
   ```

### Phase de Run

1. Lancez un conteneur pour exécuter l'application :
   ```bash
   docker run -p 8000:8000 resume
   ```

2. Accédez à l'application dans votre navigateur à l'adresse suivante :
   ```bash
   http://localhost:8000
   ```