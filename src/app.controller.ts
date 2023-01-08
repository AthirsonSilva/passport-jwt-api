import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common'
import { AppService } from './app.service'
import { AuthenticatedGuard } from './auth/authenticated.guard'
import { LocalAuthGuard } from './auth/local-auth.guard'

@Controller()
export class AppController {
	constructor(private readonly appService: AppService) {}

	@Post('login')
	@UseGuards(LocalAuthGuard)
	login(@Request() request) {
		return {
			user: request.user,
			message: 'You are logged in',
		}
	}

	@Get()
	@UseGuards(AuthenticatedGuard)
	protected(@Request() request) {
		return {
			user: request.user,
			session: request.session,
			message: 'You are protected',
		}
	}
}
