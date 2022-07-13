const TextInput = props => {
	return (
		<div>
	    <div>
	      <span>{props.children}</span>
	      {props.required && <span>必須</span>}
	    </div>
			<input type="text" />
		</div>
	);
}

export default TextInput;