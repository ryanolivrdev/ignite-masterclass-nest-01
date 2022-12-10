import { PrismaRocketMemberRepository } from './repositories/prisma/prisma-rocket-members-repository';
import { PrismaService } from './database/prisma.service';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { RocketMembersRepository } from './repositories/rocket-members-repository';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    PrismaService,
    {
      provide: RocketMembersRepository,
      useClass: PrismaRocketMemberRepository,
    },
  ],
})
export class AppModule {}
