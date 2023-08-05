import { Module } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import global from 'src/config/global';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      name: 'default',
      useFactory: (configService: ConfigType<typeof global>) => ({
        type: 'mysql',
        host: configService.mysql.host,
        port: configService.mysql.port,
        username: configService.mysql.username,
        password: configService.mysql.password,
        database: configService.mysql.database,
        entities: ['dist/**/*.entity{.ts,.js}'],
        migrations: configService.mysql.migrations,
        autoLoadEntities: true,
        synchronize: false,
      }),
      inject: [global.KEY],
    }),
  ],
})
export class DatabasesModule {}
