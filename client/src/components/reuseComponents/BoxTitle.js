export default function BoxTitle(props) {

    return (
        <>
            <div style={props.styleCard}>
                <h1 style={{ fontSize: "20px" }}>{props.nameBox}</h1>
                <p>{props.line}</p>
                <p style={{ fontSize: "13px" }}>{props.contentBox1} <br/> {props.contentBox2} </p>
            </div>
        </>
    )
}