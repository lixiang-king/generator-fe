/**
 * Create By lixiang040
 * Create At 2018/10/19
 */
import React, { Component } from 'react';
import { Route, Switch, withRouter, Link } from 'react-router-dom';
import { Layout,  Menu, Icon } from 'antd';
import { Provider } from 'mobx-react';
import stores from '../stores';
import Home from './Home';


const NoMatch = ({ location, match }) => {
    return (
        <div>
          <h3>No match for <code>{location.pathname}</code></h3>
        </div>
      )
}

const { Content, Sider } = Layout;

  const Topic = ({ match }) => (
    <div>
      <h3>{match.params.topicId}</h3>
    </div>
  );

@withRouter
class Routers extends Component {
    constructor(props){
        super(props)
        this.pathname = this.props.location.pathname;
    }

    render(){
        return (
            <Layout>
                <Slider/>
                <Layout>
                    <Header/>
                    <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: '100vh' }}>
                    <Provider Store={stores}>
                        <Switch>
                            <Route exact path='/login' component={Home}/>
                            <Route component={NoMatch}/>
                        </Switch>
                    </Provider>
                    </Content>
                </Layout>
            </Layout>
        )
    }
}

export default Routers
