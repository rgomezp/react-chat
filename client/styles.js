const styles = {
  appContainer:{
    marginTop: '50px',
  },
  chatContainer : {
    display: 'flex',
    border: 'black',
    color: '#2E6A8C',
    padding: '20px',
    width: '100%',
    marginTop: '10px',
    height: '600px',
    flexDirection: 'column',
    backgroundColor: '#D3EAF6',
    borderRadius: '5px 5px 5px 5px',
  },
  inputStyle: {
    display: 'flex'
  },
  messages:{
    flex: '10',
    backgroundColor: 'white',
    borderRadius: '5px 5px 5px 5px',
    color: 'black',
    padding: '20px',
    overflowY: 'auto'
  },
  inputBox:{
    marginTop: '10px',
    flex: '4',
    resize: 'none',
    border: 'none',
    borderRadius: '5px 0 0 5px',
    color: 'black',
    fontSize: '20px',
    padding: '10px'
  },
  submit:{
    marginTop: '10px',
    flex: '1',
    backgroundColor: '#2E6A8C',
    border: 'none',
    borderRadius: '0 5px 5px 0',
    color: 'white'
  }
}

export default styles;
