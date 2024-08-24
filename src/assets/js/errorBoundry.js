import {Component} from 'react'

class ErrorBoundry extends Component {
    constructor(props) {
        super(props)
        this.state = {
            occurErorr: false
        }
    }
    static getDerivedStateFromError(error) {
        return {occurError: true}
    }
    componentDidCatch(error , info) {
        console.log(error , info)
    }

    render() {
        if(this.state.occurErorr) {
            return <p className="error">
                Something went wrong!
            </p>
        }
        return this.props.children
    }
}

export default ErrorBoundry
