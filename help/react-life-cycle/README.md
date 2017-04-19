React life cycle:
What is it?
When a component is rendering or state of it changed, certain methods of class called. These methods known as life cycle of component.
List of its:
•	```getInitialState```
•	```getDefaultProps -> static method defaultProps```
•	```componentWillMount```
•	```componentDidMount```
•	```componentWillReceiveProps```
•	```componentWillUnmount```
•	```shouldComponentUpdate```
•	```componentWillUpdate```
•	```componentDidUpdate```

setState():
	type 1: 
		```this.setState ({a: ”foo”, b: “bar”});```
	type 2:
		```this.setState (
   (prevState, props)=>{
       return{a: “foo”};
   }
);```
