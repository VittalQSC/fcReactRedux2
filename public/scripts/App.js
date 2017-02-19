import React from 'react'
import ReactDOM from 'react-dom'
import Articles from './Articles'
import store from './store'
import { Provider } from 'react-redux'

ReactDOM.render(<Provider store={store}> 
					<Articles /> 
				</Provider>, 
				document.querySelector('#app')
			);