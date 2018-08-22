import React from "react";

class HelloUser extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      username: 'John'
    }

    this.enterName = this.enterName.bind(this)
  }
  enterName (e) {
    this.setState({
      username: e.target.value
    })
  }
  render() {
    return (
      <section>
        <div className="container">
          <div className="hello-user">
            <div className="hello-user__item">Hello {this.state.username}!</div>
            <div className="hello-user__enter-name">
              <span>Enter other name:</span>
              <input type="text" onChange={this.enterName}/>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default HelloUser;
