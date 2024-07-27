'use client';

import { Grid, Paper, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import BaseCard from '@/app/(DashboardLayout)/components/shared/BaseCard';

// Define a light color theme
const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2', // Blue color
    },
    secondary: {
      main: '#dc004e', // Pink color
    },
    background: {
      default: '#f4f6f8', // Light gray background
    },
    text: {
      primary: '#333', // Dark gray text
    },
  },
});

// Define an interface for the data
interface UserData {
  user_id: number;
  first_name: string;
  last_name: string;
  department: string;
  role: string;
  email: string;
  mobile_number: string;
}

// Sample data structure
const data: UserData[] = [
  {
    user_id: 1,
    first_name: "Stephanie",
    last_name: "Bryant",
    department: "Education",
    role: "Principal",
    email: "stephanie.bryant@imcindore.in",
    mobile_number: "+91 4357442789"
  },
  {
    "user_id": 2,
    "first_name": "Carmen",
    "last_name": "Schwartz",
    "department": "Transportation",
    "role": "Transport Manager",
    "email": "carmen.schwartz@imcindore.in",
    "mobile_number": "+91 6704598496"
  },
  {
    "user_id": 3,
    "first_name": "Matthew",
    "last_name": "Bradford",
    "department": "Transportation",
    "role": "Driver",
    "email": "matthew.bradford@imcindore.in",
    "mobile_number": "+91 3229172581"
  },
  {
    "user_id": 4,
    "first_name": "Rachel",
    "last_name": "Howell",
    "department": "Transportation",
    "role": "Transport Coordinator",
    "email": "rachel.howell@imcindore.in",
    "mobile_number": "+91 1681823471"
},
{
    "user_id": 5,
    "first_name": "Hannah",
    "last_name": "Thompson",
    "department": "Education",
    "role": "Principal",
    "email": "hannah.thompson@imcindore.in",
    "mobile_number": "+91 5647807483"
},
{
    "user_id": 6,
    "first_name": "Ryan",
    "last_name": "Sutton",
    "department": "Education",
    "role": "Teacher",
    "email": "ryan.sutton@imcindore.in",
    "mobile_number": "+91 2137623752"
},
{
    "user_id": 7,
    "first_name": "David",
    "last_name": "Hester",
    "department": "Education",
    "role": "Teacher",
    "email": "david.hester@imcindore.in",
    "mobile_number": "+91 4433603819"
},
{
    "user_id": 8,
    "first_name": "Jennifer",
    "last_name": "Rose",
    "department": "Healthcare",
    "role": "Doctor",
    "email": "jennifer.rose@imcindore.in",
    "mobile_number": "+91 1845548793"
},
{
    "user_id": 9,
    "first_name": "Melissa",
    "last_name": "Hernandez",
    "department": "Water Management",
    "role": "Water Engineer",
    "email": "melissa.hernandez@imcindore.in",
    "mobile_number": "+91 5413086121"
},
{
    "user_id": 10,
    "first_name": "Samantha",
    "last_name": "Graham",
    "department": "Transportation",
    "role": "Transport Manager",
    "email": "samantha.graham@imcindore.in",
    "mobile_number": "+91 7901269971"
},
{
    "user_id": 11,
    "first_name": "Melissa",
    "last_name": "Johnson",
    "department": "Education",
    "role": "Teacher",
    "email": "melissa.johnson@imcindore.in",
    "mobile_number": "+91 2175727800"
},
{
    "user_id": 12,
    "first_name": "Jason",
    "last_name": "Myers",
    "department": "Healthcare",
    "role": "Nurse",
    "email": "jason.myers@imcindore.in",
    "mobile_number": "+91 4770288112"
},
{
    "user_id": 13,
    "first_name": "Brenda",
    "last_name": "Wilson",
    "department": "Transportation",
    "role": "Transport Manager",
    "email": "brenda.wilson@imcindore.in",
    "mobile_number": "+91 0570310645"
},
{
    "user_id": 14,
    "first_name": "Sarah",
    "last_name": "Baker",
    "department": "Education",
    "role": "Education Coordinator",
    "email": "sarah.baker@imcindore.in",
    "mobile_number": "+91 6995186575"
},
{
    "user_id": 15,
    "first_name": "Yvonne",
    "last_name": "Huber",
    "department": "Water Management",
    "role": "Water Quality Analyst",
    "email": "yvonne.huber@imcindore.in",
    "mobile_number": "+91 7749919137"
},
{
    "user_id": 16,
    "first_name": "Shawn",
    "last_name": "Caldwell",
    "department": "Healthcare",
    "role": "Nurse",
    "email": "shawn.caldwell@imcindore.in",
    "mobile_number": "+91 6799826453"
},
{
    "user_id": 17,
    "first_name": "David",
    "last_name": "Greer",
    "department": "Water Management",
    "role": "Field Technician",
    "email": "david.greer@imcindore.in",
    "mobile_number": "+91 3550551635"
},
{
    "user_id": 18,
    "first_name": "Jason",
    "last_name": "Buchanan",
    "department": "Transportation",
    "role": "Driver",
    "email": "jason.buchanan@imcindore.in",
    "mobile_number": "+91 0856556603"
},
{
    "user_id": 19,
    "first_name": "Peter",
    "last_name": "Rodriguez",
    "department": "Education",
    "role": "Education Coordinator",
    "email": "peter.rodriguez@imcindore.in",
    "mobile_number": "+91 6306518254"
},
{
    "user_id": 20,
    "first_name": "Monica",
    "last_name": "Klein",
    "department": "Healthcare",
    "role": "Nurse",
    "email": "monica.klein@imcindore.in",
    "mobile_number": "+91 1809832051"
},
{
    "user_id": 21,
    "first_name": "Wyatt",
    "last_name": "Rush",
    "department": "Water Management",
    "role": "Field Technician",
    "email": "wyatt.rush@imcindore.in",
    "mobile_number": "+91 9836216249"
},
{
    "user_id": 22,
    "first_name": "Walter",
    "last_name": "Peterson",
    "department": "Water Management",
    "role": "Water Engineer",
    "email": "walter.peterson@imcindore.in",
    "mobile_number": "+91 7694088199"
},
{
    "user_id": 23,
    "first_name": "Jennifer",
    "last_name": "Shelton",
    "department": "Education",
    "role": "Education Coordinator",
    "email": "jennifer.shelton@imcindore.in",
    "mobile_number": "+91 2206270707"
},
{
    "user_id": 24,
    "first_name": "Jerry",
    "last_name": "Ayala",
    "department": "Education",
    "role": "Education Coordinator",
    "email": "jerry.ayala@imcindore.in",
    "mobile_number": "+91 4271986265"
},
{
    "user_id": 25,
    "first_name": "Kenneth",
    "last_name": "Coffey",
    "department": "Healthcare",
    "role": "Health Administrator",
    "email": "kenneth.coffey@imcindore.in",
    "mobile_number": "+91 6143395942"
},
{
    "user_id": 26,
    "first_name": "Michael",
    "last_name": "Norris",
    "department": "Education",
    "role": "Principal",
    "email": "michael.norris@imcindore.in",
    "mobile_number": "+91 8579047838"
},
{
    "user_id": 27,
    "first_name": "Jason",
    "last_name": "Moses",
    "department": "Education",
    "role": "Principal",
    "email": "jason.moses@imcindore.in",
    "mobile_number": "+91 3104753249"
},
{
    "user_id": 28,
    "first_name": "Megan",
    "last_name": "Padilla",
    "department": "Water Management",
    "role": "Water Engineer",
    "email": "megan.padilla@imcindore.in",
    "mobile_number": "+91 8006038005"
},
{
    "user_id": 29,
    "first_name": "Nicole",
    "last_name": "Smith",
    "department": "Education",
    "role": "Teacher",
    "email": "nicole.smith@imcindore.in",
    "mobile_number": "+91 0693763075"
},
{
    "user_id": 30,
    "first_name": "Steven",
    "last_name": "Wolf",
    "department": "Education",
    "role": "Teacher",
    "email": "steven.wolf@imcindore.in",
    "mobile_number": "+91 5881571472"
},
{
    "user_id": 31,
    "first_name": "Joseph",
    "last_name": "Chan",
    "department": "Water Management",
    "role": "Water Quality Analyst",
    "email": "joseph.chan@imcindore.in",
    "mobile_number": "+91 2525165104"
},
{
    "user_id": 32,
    "first_name": "Michael",
    "last_name": "Cross",
    "department": "Transportation",
    "role": "Transport Coordinator",
    "email": "michael.cross@imcindore.in",
    "mobile_number": "+91 6790006405"
},
{
    "user_id": 33,
    "first_name": "Laura",
    "last_name": "Moore",
    "department": "Transportation",
    "role": "Transport Manager",
    "email": "laura.moore@imcindore.in",
    "mobile_number": "+91 0072826715"
},
{
    "user_id": 34,
    "first_name": "Christina",
    "last_name": "Koch",
    "department": "Education",
    "role": "Teacher",
    "email": "christina.koch@imcindore.in",
    "mobile_number": "+91 0146549976"
},
{
    "user_id": 35,
    "first_name": "Robert",
    "last_name": "Baker",
    "department": "Transportation",
    "role": "Transport Coordinator",
    "email": "robert.baker@imcindore.in",
    "mobile_number": "+91 4182695440"
},
{
    "user_id": 36,
    "first_name": "Mark",
    "last_name": "Silva",
    "department": "Transportation",
    "role": "Driver",
    "email": "mark.silva@imcindore.in",
    "mobile_number": "+91 8691038647"
},
{
    "user_id": 37,
    "first_name": "Bradley",
    "last_name": "Carlson",
    "department": "Transportation",
    "role": "Transport Manager",
    "email": "bradley.carlson@imcindore.in",
    "mobile_number": "+91 4125899646"
},
{
    "user_id": 38,
    "first_name": "Linda",
    "last_name": "Ho",
    "department": "Education",
    "role": "Teacher",
    "email": "linda.ho@imcindore.in",
    "mobile_number": "+91 7288617049"
},
{
    "user_id": 39,
    "first_name": "Heather",
    "last_name": "Scott",
    "department": "Education",
    "role": "Education Coordinator",
    "email": "heather.scott@imcindore.in",
    "mobile_number": "+91 3033617713"
},
{
    "user_id": 40,
    "first_name": "Courtney",
    "last_name": "Smith",
    "department": "Transportation",
    "role": "Driver",
    "email": "courtney.smith@imcindore.in",
    "mobile_number": "+91 3653637813"
},
  {
    user_id: 1,
    first_name: "ABHILASH",
    last_name: "MISHRA",
    department: "IMC Commisioner",
    role: "Admin",
    email: "abhilash.mishra@imcindore.in",
    mobile_number: "+91 6941886825"
  },
  {
    user_id: 2,
    first_name: "RAJESH",
    last_name: "SHARMA",
    department: "IT HEAD IMC",
    role: "Admin",
    email: "rajesh.sharma@imcindore.in",
    mobile_number: "+91 1514451934"
  },
  // Add more user data here
];

// Filter function to separate admins and users
const filterData = (data: UserData[]): { admins: UserData[], users: UserData[] } => {
  const admins = data.filter(item => item.role.toLowerCase() === 'admin');
  const users = data.filter(item => item.role.toLowerCase() !== 'admin');
  return { admins, users };
};

// Styled component for table rows
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&.admin': {
    backgroundColor: theme.palette.background.default,
  },
  '&.user': {
    backgroundColor: theme.palette.background.default,
  },
}));

const Tables = () => {
  const { admins, users } = filterData(data);

  return (
    <ThemeProvider theme={lightTheme}>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={12}>
          <BaseCard>
            <>
              <Typography variant="h6" color="primary">Admins</Typography>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>ID</TableCell>
                      <TableCell>First Name</TableCell>
                      <TableCell>Last Name</TableCell>
                      <TableCell>Department</TableCell>
                      <TableCell>Role</TableCell>
                      <TableCell>Email</TableCell>
                      <TableCell>Mobile Number</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {/* Insert admin data here */}
                    {admins.map((item) => (
                      <StyledTableRow key={item.user_id} className="admin">
                        <TableCell>{item.user_id}</TableCell>
                        <TableCell>{item.first_name}</TableCell>
                        <TableCell>{item.last_name}</TableCell>
                        <TableCell>{item.department}</TableCell>
                        <TableCell>{item.role}</TableCell>
                        <TableCell>{item.email}</TableCell>
                        <TableCell>{item.mobile_number}</TableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>

              <Typography variant="h6" color="primary" sx={{ marginTop: 4 }}>Users</Typography>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>ID</TableCell>
                      <TableCell>First Name</TableCell>
                      <TableCell>Last Name</TableCell>
                      <TableCell>Department</TableCell>
                      <TableCell>Role</TableCell>
                      <TableCell>Email</TableCell>
                      <TableCell>Mobile Number</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {users.map((item) => (
                      <StyledTableRow key={item.user_id} className="user">
                        <TableCell>{item.user_id}</TableCell>
                        <TableCell>{item.first_name}</TableCell>
                        <TableCell>{item.last_name}</TableCell>
                        <TableCell>{item.department}</TableCell>
                        <TableCell>{item.role}</TableCell>
                        <TableCell>{item.email}</TableCell>
                        <TableCell>{item.mobile_number}</TableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </>
          </BaseCard>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Tables;
