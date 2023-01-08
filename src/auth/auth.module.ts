import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'
import { UsersModule } from 'src/users/users.module'
import { AuthService } from './auth.service'
import { LocalStrategy } from './local.strategy'
import { JwtStrategy } from './jwt.strategy'

@Module({
	providers: [AuthService, LocalStrategy, JwtStrategy],
	imports: [
		UsersModule,
		PassportModule,
		JwtModule.register({
			secret: 'space cat',
			signOptions: { expiresIn: '60s' },
		}),
	],
	exports: [AuthService],
})
export class AuthModule {}
