
export interface Greet{

    greeter:string;greeting:string; 
}
const ShowMessage = ({greeting,greeter}:Greet) => {
  return (
    <div>
                <div>
            <h4>{greeting}</h4>
            <p>from : {greeter}</p>
        </div>

    </div>
  )
}

export default ShowMessage
