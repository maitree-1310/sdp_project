// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Chip from '@mui/material/Chip'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import Typography from '@mui/material/Typography'
import TableContainer from '@mui/material/TableContainer'
import { Avatar, CardHeader } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const rows = [
  {
    age: 27,
    status: 'current',
    date: '09/27/2018',
    name: 'Sally Quinn',
    salary: '$19586.23',
    email: 'eebsworth2m@sbwire.com',
    designation: 'Human Resources Assistant',
    image:"https://media.istockphoto.com/id/1317804578/photo/one-businesswoman-headshot-smiling-at-the-camera.jpg?s=612x612&w=0&k=20&c=EqR2Lffp4tkIYzpqYh8aYIPRr-gmZliRHRxcQC5yylY="
  },
  {
    age: 41,
    date: '09/23/2016',
    salary: '$23896.35',
    status: 'professional',
    name: 'Margaret Bowers',
    email: 'kocrevy0@thetimes.co.uk',
    designation: 'Nuclear Power Engineer',
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbIhi9l4npCGPNWMAc6szDbxp75kjB3c0R5w&usqp=CAU"
  },
  {
    age: 39,
    date: '10/15/2017',
    name: 'Minnie Roy',
    status: 'rejected',
    salary: '$18991.67',
    email: 'ediehn6@163.com',
    designation: 'Environmental Specialist',
    image:"https://media.istockphoto.com/id/1368424494/photo/studio-portrait-of-a-cheerful-woman.jpg?s=612x612&w=0&k=20&c=ISNDV3ZXeNU6VvDhR7KXFd6y0saq4Eji15cep_Gj8Eg="
  },
  {
    age: 30,
    date: '06/12/2018',
    status: 'resigned',
    salary: '$19252.12',
    name: 'Ralph Leonard',
    email: 'dfalloona@ifeng.com',
    designation: 'Sales Representative',
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyzcwVGMG866yo2l3BNSLJx-Vy5kN4T1FRC8BgNS8jVJKncXO1ZjIjy4YCBIXMQ0l4E-4&usqp=CAU"
  },
  {
    age: 56,
    status: 'applied',
    date: '03/24/2018',
    salary: '$13076.28',
    name: 'Annie Martin',
    designation: 'Operator',
    email: 'sganderton2@tuttocitta.it',
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ1nyoJY0lTFc6_n4W17pxiEQzWq8m_hqIIM-SQhiYKTW54FikjSZHeHK_zikM4E9kX7w&usqp=CAU"
  },
  {
    age: 33,
    date: '08/25/2017',
    salary: '$10909.52',
    name: 'Adrian Day',
    status: 'professional',
    email: 'hnisius4@gnu.org',
    designation: 'Senior Cost Accountant',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsIcU2H_WwVjXbB-B3uTWOyX9MBgCjAwV0AQ&usqp=CAU'
  },
  {
    age: 42,
    status: 'current',
    date: '06/01/2017',
    salary: '$17803.80',
    name: 'Lora Jackson',
    designation: 'Geologist',
    email: 'ghoneywood5@narod.ru',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZa2MeF7zHiU-kCNb0Tsi55cbkWTO5be_GmKBniCtImSMtGpA4siFd-9t-SwurVNwSMZA&usqp=CAU'
  },
  {
    age: 26,
    date: '12/03/2017',
    salary: '$12336.17',
    name: 'Rodney Sharp',
    status: 'professional',
    designation: 'Cost Accountant',
    email: 'dcrossman3@google.co.jp',
    image: 'https://img.freepik.com/free-photo/happy-young-businessman-walking-near-business-center_171337-19784.jpg'
  }

]

const statusObj = {
  applied: { color: 'info' },
  rejected: { color: 'error' },
  current: { color: 'primary' },
  resigned: { color: 'warning' },
  professional: { color: 'success' }
}

const CustomersTable = () => {
  const navigate=useNavigate();
  return (
    <Card>
      <CardHeader
          title='New Customers'
          sx={{ pt: 2, alignItems: 'center', '& .MuiCardHeader-action': { mt: 0.6 } }}
          action={<Typography onClick={()=>navigate("/admin/customers")} variant='caption' sx={{color:"blue",cursor:"pointer",paddingRight:".8rem"}}>View All</Typography>}
          titleTypographyProps={{
            variant: 'h5',
            sx: { lineHeight: '1.6 !important', letterSpacing: '0.15px !important' }
          }}
        />
      <TableContainer>
        <Table sx={{ minWidth: 390 }} aria-label='table in dashboard'>
          <TableHead>
            <TableRow>
            <TableCell>Image</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(0,5).map(item => (
              <TableRow hover key={item.name} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
                <TableCell> <Avatar alt={item.name} src={item.image} /> </TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.email}</TableCell>
                
                
               
               
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  )
}

export default CustomersTable
