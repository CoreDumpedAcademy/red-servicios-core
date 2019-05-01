#API-RED-DE-CORE

API para la aplicación social de core  
-> Modelos: Dispone de un modelo de usuarios y uno de insignias. El modelo de insignias está contenido dentro del de usuarios (el usuario tiene un array de insignias).  
Las insignias cuentan con tres campos: Una id (pensada para ser el identificador de la insignia), un nombre y una descripción.  
El usuario cuenta con un email y un username unicos, y no hace falta usar contraseña ya que usaremos el login del servicio de la nevera. El register debe ser una llamada a la nevera y coger sus datos, además de pedirle un username. Los usuarios tienen roles numericos; a más número más poder. El middleware para comprobar si un usuario es administrador para proteger ciertas rutas aún no está implementado.  

-> Rutas y controladores: Las rutas están separadas según usuarios e insignias. Son:  
  ->  RUTAS DE /api/user 
    -> post '/'          => Registrar un usuario en la base de datos  
    -> put '/:username'  => Editar un usuario, pasado como parámetro. La info va en el body.  
    -> get '/'           => Obtener una lista de todos los usuarios.  
  -> RUTAS DE /api/ins
    -> get '/:username'  => Obtiene una lista de las insignias de un usuario.  
    -> put '/:username'  => Añade una insignia (pasada por body) al usuario  
    -> put '/:username/:pos'  => Elimina la insignia de la posición pos al usuario username.
      
