import react from "react";

const Row = ({name, location, email, phone}) => (
    <tr>
      <td>{name.first}</td>
      <td>{name.last}</td>
      <td>{location.city}</td>
      <td>{email}</td>    
      <td>{phone}</td>    
    </tr>
  );

  export default Row