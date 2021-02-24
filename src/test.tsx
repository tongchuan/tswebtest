// console.log('1')
import * as React from 'react'
import * as ReactDOM from 'react-dom'

function Test(props: any):React.ReactNode {
	return (
		<div>dddddd</div>
	)
}

ReactDOM.render (
	<Test />,
	document.querySelector('#root')
)
alert('111')
