import { SignInForm } from '../components/Auth/SignInForm';
import { SignUpForm } from '../components/Auth/SignUpForm';

export function AuthPage() {
	const isAuth = true;
	return <>{isAuth ? <SignInForm /> : <SignUpForm />}</>;
}
