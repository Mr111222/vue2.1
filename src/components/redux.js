// redux 


// // index.js  入口文件

// npm install redux react-redux -D
// import {createStore, combinReducers} from 'redux'
// import {Provider} from 'react-redux'


// // 1.创建存储 
// // 初始转态 state为空
// function reduxFn1(state={name:'pps', age:20}, action){
// 	switch(action.type){
// 		case 'set_name' :
// 			return{
// 				...state,
// 				name: action.name
// 			}
// 		case 'set_age' :
// 			return {
// 				...state,
// 				age:state.age + action.age
// 			}
// 		default 
// 			return state
// 	}
// }

// function reduxFn2(state={name:'dds', age:99}, action){
// 	switch(action.type){
// 		case 'set_name' :
// 			return{
// 				...state,
// 				name: action.arr.name
// 			}
// 		case 'set_age' :
// 			return {
// 				...state,
// 				age:state.age + action.arr.age
// 			}
// 		default 
// 			return state
// 	}
// }

// let arr = combinReducers({
// 	user:reduxFn1,
// 	company: reduxFn2
// })


// const store = createStore(arr)



// ReactDom.render(
// 	<Provider store={store}>
// 		<App />
// 	</Provider>,document.getElementById('app')
// )



// // 应用 

// import {connect} from 'react-redux'


// class App extends React.Componet{
// 	fn(){
// 		this.props.setName()
// 	}
// 	ageFn (){
// 		this.props.add_age(6)
// 	}
// 	render(){
// 		return (
// 			<div>
// 				<button onClick={this.fn.bind(this)}>点击</button>
// 				<button onClick={this.ageFn.bind(this)}>年领++</button>
// 				<p>{this.props.age}</p>
// 			</div>      //展示值为20
// 		)
// 	}
// }




// export default connent(function(state, props){
// 	return state   // 此处返回的是state和props混合之后的对象,放到props身上
// },{
// 	setName (name){
// 		return {
// 			type: 'set_name',
// 			name: name
// 		}
// 	},
// 	add_age (age){
// 		type:'set_age',
// 		age
// 	}
// })(App)





// ------------------------------------------------------------------------------------------------
// react-router

// npm install react-router-dom -D

// eg:

// import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
// import News from './news'
// import Home from 'home'
// import Game from './game'
//  render(){
//  	return (
//  		<router>
//  			<div>
//  				<Link to="/">首页</Link>
//  				<Link to="/news">新闻</Link>
//  				<Link to="/game">新闻</Link>
//  				<Route path="/" exact component={Home}></Router>
//  				<Route path="/news/:id" component={News}></Router>
//  				<Route path="/game/game1" component={Game}></Router>  //设置默认路由为game1
//  			</div>
//  		</Router>
//  	)
//  }

//  // 获取路由信息   this.props.match.parmas.id
//  // 
//  // new.js
//  class mews extends Component{
//  	constructor(...args){
//  		super(...args)
//  		this.state = {
//  			id:this.props.match.params.id
//  		}
//  	}

//  	componentDidUpdate(old_props, old_state){
//  		let old_id = old_props.match.params.id
//  		let id = this.props.match.parmas.id
//  		if(id != old_id){
//  			console.log('更新了', id)
//  		}
//  	}

//  }
//  export News

//  // game.js   子路由示例
//  import React ,{Component} from 'react'
//  import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
//  import Game1 from './game1'
//  import Game2 from './game2'
//  class Game extends Component{
//  	constructor(...args){
//  		super(...args)
//  		this.state = {
//  			id:this.props.match.params.id
//  		}
//  	}
//  	render(){
//  		const path = this.props.match.path
//  		return (
//  			<div>
//  				<h2>Game 子路由</h2>
// 	 				<Link to={`${path}/game1}`>游戏1</Link>
// 	 				<Link to={`${path}/game2}`>游戏2</Link>
// 	 				<Route path={`${path}/game1}` component={Game1}></Route>
// 	 				<Route path={`${path}/game2}` component={Game2}></Route>
//  			</div>
//  		)
//  	}

//  }
//  export Game



