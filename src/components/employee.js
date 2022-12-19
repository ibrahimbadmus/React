function Employee (props) {
    return ( 
            <>
    <h3>Employee {props.name}</h3>

    {/*<p>{props.role ? props.role: "no role"}</p>*/}
       
        {/* The above line of code is similar to the one below*/}
    {props.role ? <p class="role">{props.role}</p> : <p class="norole"> No Role </p>}

    </>
    )
}

export default Employee;