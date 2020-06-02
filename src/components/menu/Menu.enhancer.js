import { connect } from "react-redux";
import { logout } from "../../redux/actions/auth";

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.isAuthenticated,
});

const mapDispatchToProps = {
  logout,
};

export const enhancer = connect(mapStateToProps, mapDispatchToProps);
