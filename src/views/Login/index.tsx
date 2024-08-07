import AuthContainer from "../../components/AuthContainer";
import Logo from '../../assets/svg/logo.svg'

const LoginPage = () => {
    return <>
        <img className={'logo'} src={Logo} alt={'logo'}/>
        <AuthContainer/>
    </>
}
export default LoginPage
