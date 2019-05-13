# red-servicios-core
Red para incorporar todos los servicios de Core

//SIDEMENU

1. Añadir a componente app para que se despliegue en todas las tabs
2. Modificar rutas de tabs en tabs.router.module.ts para redirigir a menu y a los children correspondientes
3. Arrays de páginas a desplegar en el menú dentro de app.component.ts (pages)
4. Variable que comprueba el path en el que estas y activar propiedades de active-item del global.scss (selectedPath)


//VER TABS EN TAB

1. Añadir ruta de la Tab como children de la ruta /core en tabs.router.module.ts.

//REGISTRO CON CROP

1. Installar ImagePicker, Crop, Cordoba plugins
2. Installar FileTransfer
3. Añadir plugins a proyecto 
4. Importar dentro de app.module.ts y register

//Algunos plugins mencionados
ionic cordova plugin add cordova-plugin-crop
npm install @ionic-native/crop
ionic cordova plugin add cordova-plugin-camera
npm install @ionic-native/camera
ionic cordova plugin add cordova-plugin-file-transfer
npm install @ionic-native/file-transfer
ionic cordova plugin add cordova-plugin-file
npm install @ionic-native/file

5. Crear formulario para recoger datos en array user
6. Funcion formulario en register.page.ts mandar datos user a authservice
7. Funcion authservice para añadir usuario en API
