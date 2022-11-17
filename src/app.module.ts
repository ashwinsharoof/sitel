import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/sitel',
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  }
  ), UserModule],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule {}
