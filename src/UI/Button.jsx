/* eslint-disable react/prop-types */

function Button(props) {
  return (
    // eslint-disable-next-line react/prop-types
    <button className={props.className}>
         
          {props.children}
        </button>
  )
}

export default Button;