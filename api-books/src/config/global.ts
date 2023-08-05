import { registerAs } from '@nestjs/config'

export default registerAs('app', () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  env: process.env.NODE_ENV || 'dev',
  auth: {
    apiKey: process.env.AUTH_API_KEY,
    clientId: process.env.AUTH_CLIENT_ID,
    clientSecret: process.env.AUTH_CLIENT_SECRET,
    expiresIn: parseInt(process.env.AUTH_EXPIRES_IN, 10),
    expiresInRefreshToken: parseInt(
      process.env.AUTH_EXPIRES_IN_REFRESH_TOKEN,
      10
    ),
    privateKey: process.env.AUTH_PRIVATE_KEY,
    publicKey: process.env.AUTH_PUBLIC_KEY,
    encryptionKey: process.env.AUTH_ENCRYPTION_KEY,
    optExpiresIn: parseInt(process.env.AUTH_OPT_EXPIRES_IN, 10),
    optDigits: parseInt(process.env.AUTH_OPT_DIGITS, 10)
  },
  mysql: {
    host: process.env.MYSQL_HOST,
    port: parseInt(process.env.MYSQL_PORT, 10),
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    entities: [process.env.TYPEORM_ENTITIES_MYSQL],
    migrations: [process.env.TYPEORM_MIGRATIONS_MYSQL],
    autoLoadEntities: process.env.TYPEORM_AUTOLOAD_ENTITIES || 'false',
    synchronize: process.env.TYPEORM_SYNCHRONIZE || 'false',
    url: process.env.MYSQL_URL
  },
  mongodb: {
    url: process.env.MONGODB_URL,
    host: process.env.MONGODB_HOST,
    port: parseInt(process.env.MONGODB_PORT, 10),
    server: process.env.MONGODB_SERVER,
    username: process.env.MONGODB_USER,
    password: process.env.MONGODB_PASSWORD,
    database: process.env.MONGODB_DATABASE,
    entities: [process.env.TYPEORM_ENTITIES_MONGODB],
    migrations: [process.env.TYPEORM_MIGRATIONS_MONGODB],
    autoLoadEntities: process.env.TYPEORM_AUTOLOAD_ENTITIES || 'false',
    synchronize: process.env.TYPEORM_SYNCHRONIZE || 'false'
  }
}))
