import * as L from './LoginStyle';

export const Login = () => {
    return (
        <>
            <L.Container>
                <L.loginContiner>
                    <form>
                        <L.H3>Login</L.H3> 
                        <L.Input type="text" placeholder='seu nome' />
                        <L.H3>Senha</L.H3> 
                        <L.Input type="password" placeholder='sua senha' />
                    </form>
                </L.loginContiner>
            </L.Container>

        </>
    )
}