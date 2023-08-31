import { Inject, Injectable } from "@nestjs/common";
import { Logger } from "winston";

@Injectable()
export class AppService {
	constructor(
		@Inject("winston")
		private readonly logger: Logger,
	) {}
	info(data) {
		return this.logger.info(data);
	}
}
