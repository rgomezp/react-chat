import React from 'react';
import ChatRoom from './chat';
import styles from './styles';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      socket: io(),
      roomName: ''
    };
  }

  componentDidMount() {
    // WebSockets Receiving Event Handlers
    this.state.socket.on('connect', () => {
      var username = prompt('Set username');
      this.setState({
        username: username
      });
      this.state.socket.emit('username', username);
    });


    this.state.socket.on('errorMessage', message => {
      alert(message);
    });
  }

  join(room) {
    this.state.roomChanged = true;
    this.setState({roomName: room});
    this.state.socket.emit('room', room);
  }

  render() {
    return (

      <div>
        <h1>React Chat</h1>
        <button className="btn btn-default" onClick={() =>{
            this.join("Party Place");
        }}>
          Join the Party Place
        </button>
        <button className="btn btn-default" onClick={() =>{
            this.join("Rager Place");
        }}>
          Join the Rager Place
        </button>
        {
          this.state.roomName == '' ? <div></div> :
          <ChatRoom socket={this.state.socket} username={this.state.username} roomName={this.state.roomName}/>}
      </div>
    );
  }
}

export default App;
