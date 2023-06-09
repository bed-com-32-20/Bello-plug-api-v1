import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './users/entities/user.entity';
import { CatalogueModule } from './catalogue/catalogue.module';
import { AdvertsModule } from './adverts/adverts.module';
import { Catalogue } from './catalogue/entities/catalogue.entity';
import { LocationModule } from './location/location.module';
import { Location } from './location/entities/location.entity';
import { AuthenticationModule } from './authentication/authentication.module';
import { Advert } from './adverts/entities/advert.entity';

@Module({
 
    controllers: [AppController,],
    providers: [AppService],
    imports: [UsersModule,
      TypeOrmModule.forRoot({
        type: 'mysql',
        host:'sql8.freemysqlhosting.net',
        port: 3306,
        username: 'sql8624852',
        password: 'CaI1C9eXYU',
        database: 'sql8624852',
        entities: [Users, Catalogue, Location, Advert],
        //synchronize: true,
      }),
      CatalogueModule,
      AdvertsModule,
      LocationModule,
      AuthenticationModule,
    ],

})
export class AppModule {}
