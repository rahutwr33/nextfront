
const HOC = function (WrappedComponent) {
  return class extends React.Component {
   render() {
      return <WrappedComponent {...this.props} />;
    }
  }
}

export default HOC;