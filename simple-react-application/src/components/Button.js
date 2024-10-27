function Button(props) {

    function handleClick() {
        props.setCount(count => count + 1);
    }
    return <button onClick={handleClick}>Click Me</button>
}

export default Button;