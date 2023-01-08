import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common'
import { AppService } from './app.service'
import { LocalAuthGuard } from './auth/local-auth.guard'

@Controller()
export class AppController {
	constructor(private readonly appService: AppService) {}

	@Post('login')
	@UseGuards(LocalAuthGuard)
	login(@Request() request) {
		return request.user
	}

	@Get()
	getHello(): string {
		return this.appService.getHello()
	}
}
