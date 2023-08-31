import { Inject, Injectable } from "@nestjs/common";
import { Logger } from "winston";

@Injectable()
export class AppService {
	constructor(@Inject("winston") private readonly logger: Logger) {}
	info(message) {
		return this.logger.info(message);
	}

	debug(message) {
		return this.logger.debug(message);
	}

	warn(message) {
		return this.logger.warn(message);
	}

	error(message) {
		return this.logger.error(message);
	}
}
