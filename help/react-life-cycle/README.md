React life cycle:<br/>
What is it?<br/>
When a component is rendering or state of it changed, certain methods of class called. These methods known as life cycle of component.
List of its:<br/>
•	```getInitialState```<br/>
•	```getDefaultProps -> static method defaultProps```<br/>
•	```componentWillMount```<br/>
•	```componentDidMount```<br/>
•	```componentWillReceiveProps```<br/>
•	```componentWillUnmount```<br/>
•	```shouldComponentUpdate```<br/>
•	```componentWillUpdate```<br/>
•	```componentDidUpdate```<br/>

setState():<br/>
	type 1: <br/>
		```this.setState ({a: ”foo”, b: “bar”});```
	type 2:<br/>
		```this.setState (
   (prevState, props)=>{
       return{a: “foo”};
   }
);```
