import React from 'react';
import styles from './styles'

class ChatRoom extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      socket    : this.props.socket,
      roomName  : this.props.roomName,
      username  : this.props.username,
      message   : "",
      messages  : []
    }
  }

  componentWillReceiveProps(nextProps){
    if(this.state.roomName !== nextProps.roomName){

      this.setState({roomName:nextProps.roomName, messages:[]});
    }

  }

  componentDidMount(){


    var io = this.state.socket;

    // receive messages
    io.on('message', messageObject => {
      // store incoming messages
      var messages = this.state.messages.slice();
      var messages = messages.concat([messageObject]);
      this.setState({messages: messages})
    });

    io.on('errorMessage', (error) => alert(error));
  }

  handleChange(event){
    event.preventDefault();
    this.setState({
      message: event.target.value
    })
  }

  handleSubmit(){
    this.state.socket.emit('message', this.state.message);

    // create new message
    var newMsg = {
      username: this.state.username,
      content: this.state.message
    }

    this.setState({message: '', messages: [...this.state.messages, newMsg]})
  }

  render(){
    return(
      <div style={styles.chatContainer}>
        <h3>{this.props.roomName}</h3>
        <div style={styles.messages}>
          {this.state.messages.map((message)=>
            <p key={message.username+message.content+Math.random()*100}>
              <span style={{color:'blue'}}>
                {message.username}
              </span>
              {': '+message.content}
            </p>
          )}
        </div>
        <div style={styles.inputStyle}>
          <input value={this.state.message} onChange={(e)=>this.handleChange(e)} style={styles.inputBox}>
          </input>

          <input style={styles.submit} type='submit' onClick={()=>this.handleSubmit()}></input>
        </div>
      </div>
    )
  }
}

export default ChatRoom;
