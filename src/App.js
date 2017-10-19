import React, { Component } from 'react';
import { Container, Card, Header, Segment, Image } from 'semantic-ui-react';

class App extends Component {
  state = { forecast: [] }

  componentDidMount() {
    
  }

  render() {
    return(
      <Container style={styles.container}>
        <Segment style={styles.row} textAlign='center'>
          <Card.Group>
            <Card style={styles.card}>
              <Card.Header>
                <Header as='h2'>Mon</Header>
              </Card.Header>
              <Card.Content>
                <Segment basic>
                  <i className='wi wi-day-sunny' style={{fontSize: '10vh'}}></i>
                </Segment>
              </Card.Content>
            </Card>
          </Card.Group>
        </Segment>
      </Container>
    )
  }
}

const styles = {
  container: {
    height: '100%',
    width: '100%',
    position: 'fixed',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    height: '40vh',
    width: '85%',
    display: 'flex',
    justifyContent: 'center',
  },
  card: {
    display: 'flex',
    alignItems: 'center',
  },
}

export default App;
