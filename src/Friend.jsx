
const Friend = ({friend}) => {
    const {name,email} = friend;
  return (
    <div  style={{
        border: '2px solid purple',
        margin: '15px',
        padding: '5px',
        borderRadius: '12px'
    }}>
        <h4>Name: {name}</h4>
        <p>Email: {email}</p>
    </div>
  )
}

export default Friend