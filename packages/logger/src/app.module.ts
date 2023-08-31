import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule } from "@nestjs/config";
import { WinstonModule } from "nest-winston";
import * as winston from "winston";
import * as path from "path";
@Module({
	imports: [
		ConfigModule.forRoot(),
		WinstonModule.forRoot({
			format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
			transports: [
				new winston.transports.Console(),
				new winston.transports.File({
					dirname: path.join(__dirname, process.env.LOG_PATH), //path to where save loggin result
					filename: "error.log", //name of file where will be saved logging result
					level: "error",
				}),
				new winston.transports.File({
					dirname: path.join(__dirname, process.env.LOG_PATH),
					filename: "warn.log",
					level: "warn",
				}),
				new winston.transports.File({
					dirname: path.join(__dirname, process.env.LOG_PATH),
					filename: "debug.log",
					level: "debug",
				}),
				new winston.transports.File({
					dirname: path.join(__dirname, process.env.LOG_PATH),
					filename: "info.log",
					level: "info",
				}),
			],
		}),
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
