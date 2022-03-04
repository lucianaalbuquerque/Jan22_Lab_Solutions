

function ContactCard( {celebrityObj, deleteCelebrity} ) {
    return (
        <tr>
            <td><img src={celebrityObj.pictureUrl} alt={celebrityObj.name}/></td>
            <td>{celebrityObj.name}</td>
            <td>{Math.round((celebrityObj.popularity) * 100) / 100}</td>
            { celebrityObj.wonOscar ? <td> 🏆</td> : <td> </td>}
            { celebrityObj.wonEmmy ? <td> 🌟</td> : <td> </td>}
            <td><button className="btn" onClick={() => deleteCelebrity(celebrityObj.id) }>Delete</button></td>
        </tr>
      );
}

export default ContactCard;