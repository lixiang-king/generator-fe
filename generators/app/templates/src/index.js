import React from 'react'
import { render } from 'react-dom'
import { HashRouter, BrowserRouter } from 'react-router-dom'
import { LocaleProvider } from 'antd'
import zhCN from 'antd/lib/locale-provider/zh_CN'
import 'normalize'
import Routers from './pages'

class App extends React.Component {
    render() {
        return (
            <LocaleProvider locale={zhCN}>
                <BrowserRouter>
                    <Routers />
                </BrowserRouter>
            </LocaleProvider>
        )
    }
}

render(<App/>, document.getElementById('root'))

if (module.hot) {
    module.hot.accept()
}
