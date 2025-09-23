import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthModule } from './main/auth/auth.module';
import { UserModule } from './main/user/user.module';
import { LikeModule } from './main/like/like.module';
import { MessageModule } from './main/message/message.module';

@Module({
  imports: [AuthModule, UserModule, LikeModule, MessageModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
