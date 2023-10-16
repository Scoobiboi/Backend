import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { getConnectionInfo } from '../config/db';
import * as dotenv from 'dotenv';


async function bootstrap() {
  const dbStatus = await getConnectionInfo();
  dotenv.config();
  const app = await NestFactory.create(AppModule);
  console.log(`Database connection status: ${dbStatus}`);
  console.log(`Database connection NAME: ${process.env.DB_USER}`);

  app.enableCors({
    origin: ['http://localhost:3000', 'https://vercel-nest-scoobiboi.vercel.app'],
  });
    // add a process env port 
    await app.listen(process.env.PORT || 8080);


  await app.listen(3000);
}
bootstrap();
