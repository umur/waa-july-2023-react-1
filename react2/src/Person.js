export default function Person(props){
    console.log("print "+props.name)
    return (
        <>
            <h2>{props.name}</h2>
            <h3>{props.age}</h3>
            <h4>{props.email}</h4>
        </>
    )
}