import { connect } from 'react-redux';
import carteProf from '../components/carteProf';
import { push } from 'react-router-redux';

function mapStateToProps(state) {
    return {
        status: state.account.get('status'),
        redirectUrl: state.account.get('redirectUrl'),
    };
}

const mapDispatchToProps = {
    goto: () => push('/prof'),
};

export default connect(mapStateToProps, mapDispatchToProps)(carteProf);
