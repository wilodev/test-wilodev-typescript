# Wilodev Api

Este proyecto es una aplicación desarrollada con Nest.js, TypeORM y MySQL. A continuación, se proporcionan las instrucciones para configurar el proyecto utilizando pnpm, Docker y ejecutar las migraciones para poner en marcha la base de datos.

## Requisitos previos

Antes de empezar, asegúrese de tener instalados los siguientes requisitos en su sistema:

Node.js (versión 12 o superior)
pnpm (se recomienda pnpm como gestor de paquetes, puede instalarlo con npm install -g pnpm)
Docker (para la base de datos MySQL)
Configuración del proyecto
Clonar el repositorio:

```bash
Copy code
git clone <URL_DEL_REPOSITORIO>
cd nombre-del-repositorio
```

### Instalar las dependencias utilizando pnpm

```bash
Copy code
pnpm install
```

Construir la imagen de Docker y levantar el contenedor de MySQL:

Asegúrese de tener Docker instalado y en ejecución. Luego, desde la raíz del proyecto, ejecute el siguiente comando:

```bash
Copy code
docker-compose up -d
```

Esto iniciará un contenedor de MySQL con la configuración necesaria para el proyecto.

### Crear y ejecutar las migraciones

Una vez que el contenedor de MySQL esté en funcionamiento, ejecute el siguiente comando para ejecutar las migraciones y crear las tablas necesarias en la base de datos:

```bash
Copy code
pnpm run m:g:mysql -- app
pnpm run m:r:mysql
```

Después de realizar este comando recuerda debes eliminar el archivo en la ruta `./database/migrations/mysql/mysql`

Por último puedes ejecutar el comando `pnpm run start:dev` para levantar el servidor en modo desarrollo.

## Author

- Author - [Wilodev](https://github.com/wilodev)
