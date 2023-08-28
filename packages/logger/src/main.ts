import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { WinstonModule, WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { transports, format } from 'winston';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.NATS,
      options: {
        servers: [process.env.NATS_URI],
        queue: 'logger_queue',
        debug: false,
      },
      logger: WinstonModule.createLogger({
        transports: [
          // let's log errors into its own file
          new transports.File({
            filename: `logs/error.log`,
            level: 'error',
            format: format.combine(format.timestamp(), format.json()),
          }),
          // logging all level
          new transports.File({
            filename: `logs/combined.log`,
            format: format.combine(format.timestamp(), format.json()),
          }),
          // we also want to see logs in our console
          new transports.Console({
            format: format.combine(
              format.cli(),
              format.splat(),
              format.timestamp(),
              format.printf((info) => {
                return `${info.timestamp} ${info.level}: ${info.message}`;
              }),
            ),
          }),
        ],
      }),
    },
  );
  app.useLogger(app.get(WINSTON_MODULE_NEST_PROVIDER));

  await app.listen();
}
bootstrap();
