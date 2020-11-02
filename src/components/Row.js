
const Row = ({ name, location, email, phone, id, picture }) => (
    <tr>
      <td>{name.first}</td>
      <td>{name.last}</td>
      <td>{location.city}</td>
      <td>{email}</td>    
      <td>{phone}</td>
      <td>{id.value}</td>
    </tr>
  );
  export default Row