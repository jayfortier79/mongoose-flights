


  const React = require("react")

class Index extends React.Component {
    render() {
      const { flight } = this.props
      return(
        <div>
          <h1> Welcome to Flight Page! </h1>
          <nav>
            <a href="/flight/new">Create Your Flight Plan</a>
          </nav>
          <ul>
            {
              flight.map((flight, i) => {
                return (
                  <li key={i}>
                      <a href={`/flight/${flight._id}`}>
                        {flight.airline}
                      </a>
                     <br />
                        {flight.flightNo}
                        <br />
                        {`${flight.departs}`}
                        <a href={`/flight/${flight._id}`}>flight details</a>
                  </li>
                )
              })
            }
          </ul>
        </div>
      )
    }
  }

  module.exports = Index