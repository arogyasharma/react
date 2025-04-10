function ChildComponent(props) {
    return <h2>Child Received: {props.message}</h2>;
   }
   function ParentComponent() {
    return <ChildComponent message="Hello from Parent!" />;
   }
   export default ParentComponent;