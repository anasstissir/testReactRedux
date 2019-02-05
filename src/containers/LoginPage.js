import { connect } from 'react-redux';
import LoginPage from '../components/LoginPage';
import { push } from 'react-router-redux';

function mapStateToProps(state) {
    return {
        status: state.account.get('status'),
        redirectUrl: state.account.get('redirectUrl'),
    };
}

const mapDispatchToProps = {
    onAuthenticationSuccess: () => push('/home'),
    onAuthenticationFailure: (redirectUrl) => push(redirectUrl),
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
