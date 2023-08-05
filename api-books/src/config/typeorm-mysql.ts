import { DataSource, DataSourceOptions } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';

config();

const configService = new ConfigService();
const options: DataSourceOptions = {
  type: 'mysql',
  host: configService.get('MYSQL_HOST'),
  port: configService.get('MYSQL_PORT'),
  username: configService.get('MYSQL_USER'),
  password: configService.get('MYSQL_PASSWORD'),
  database: configService.get('MYSQL_DATABASE'),
  migrationsRun: true,
  logging: true,
  entities: [configService.get('TYPEORM_ENTITIES_MYSQL')],
  migrations: [configService.get('TYPEORM_MIGRATIONS_MYSQL')],
  synchronize: false,
  migrationsTableName: configService.get('TYPEORM_MIGRATIONS_TABLE_NAME_MYSQL'),
};

export default new DataSource(options);
