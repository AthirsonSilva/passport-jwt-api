import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common'
import { AuthService } from './auth/auth.service'
import { JwtAuthGuard } from './auth/jwt-auth.guard'
import { LocalAuthGuard } from './auth/local-auth.guard'

@Controller()
export class AppController {
	constructor(private readonly authService: AuthService) {}

	@Post('login')
	@UseGuards(LocalAuthGuard)
	login(@Request() request: any) {
		return this.authService.login(request.user)
	}

	@Get('protected')
	@UseGuards(JwtAuthGuard)
	protected(@Request() request: any) {
		return request.user
	}
}
