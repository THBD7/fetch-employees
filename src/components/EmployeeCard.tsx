// src/components/EmployeeCard.tsx
import './EmployeeCard.css'

interface EmployeeCardProps {
  employee: {
    name: {
      first: string;
      last: string;
    };
    email: string;
    picture: {
      medium: string;
    };
  };
}
 
function EmployeeCard({ employee }: EmployeeCardProps) {
  return (
    <figure className='DisplayEmployee'>
      <img src={employee.picture.medium} alt={employee.name.first} className="imgEmp"/>
      <figcaption className='textEmp'>
        <strong>{employee.name.first} {employee.name.last}</strong>
        {employee.email}
      </figcaption>
    </figure>
  );
}

export default EmployeeCard;