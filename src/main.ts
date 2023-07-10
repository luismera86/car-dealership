import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.useGlobalPipes( // Usamos los pipes a nivel global
    // Para usar el ValidationPipe se debe instalar class-validator y class-transform
    new ValidationPipe({ // Configuramos las validaciones de los dto a nivel global
      whitelist: true, // Remueve la data enviada por el body que no necesita
      forbidNonWhitelisted: true // Le devuelve un error 400 indicando que esas propiedades no existen
    })
  )
  await app.listen(3000);
}
bootstrap();
