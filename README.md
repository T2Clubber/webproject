# webproject

[Lien vers le premier repository](https://github.com/T2Clubber/Webform) : C'est notre repository "brouillon/apprentissage". 

Ce nouveau repository est la version finale.

### Préalable MySQL :

• Installer MySQL

• Dans l'inferface mysql (mysql --password) :

    • Créer la base de données 'formdatabase' (create database formdatabase;)

    • Créer un utilisateur 'springuser'@'%' with password 'ThePassword' (create user 'springuser'@'%' identified by 'ThePassword';)

    • Donner les privilèges au nouvel utilisateur (grant all on formdatabase.* to 'springuser'@'%';)

### Fonctionnalités :

    • Création/connexion utilisateur sécurisée (Username unique/Mail unique/Pas de champs NULL).
    
    • Insertion dans une BDD MySQL les nouveaux utilisateurs et les réponses aux formulaires.
    
    • Réponse console des données entrées par l'utilisateur.
   
