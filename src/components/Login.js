import React from 'react'
import { Grid,Paper,Avatar,TextField,Typography,Link } from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Button } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import { Formik, Field, Form, ErrorMessage } from "formik";



const Login=()=>{

  const [correo, setCorreo] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [lista, setLista] = React.useState([])

  const guardarDatos = (e) => {

      e.preventDefault()

      if(!correo.trim()){
          console.log('esta vacio nombre')
          return
      }

      if(!password.trim()){
          console.log('esta vacio correo')
          return
      }

      console.log('procesando datos...'+ correo+' '+ password )

      setLista([
          ...lista,
          {nombraCorreo: correo, nombrePassword: password}
      ])

      e.target.reset()

      setCorreo('')
      setPassword('')

      }

const paperStyle={padding :20,height:'70vh',width:270,margin:'20px auto'}
const avatarStyle={backgroundColor:'#325ed8'}
const btnstyle={margin:'8px 0'}

    return (
      <Grid >
          <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                <Avatar style={avatarStyle}><LockIcon/></Avatar>
                  <h2>Sign in </h2>

                  <form onSubmit={ guardarDatos } >
                  <TextField label='Correo Electronico' type='email' placeholder='Ingresar Correo' onChange={ e => setCorreo(e.target.value) } fullwidth required/>
                  <TextField label='Password' placeholder='Ingresar Clave' type='Password' onChange={ e => setPassword(e.target.value) }fullwidth required/>


                    <FormControlLabel
                       control={
                         <Checkbox
                          name="checkedB"
                          color="primary"
                        />
                      }
                      label="Recordar mi Usuario"
                    />
                    <Button type='submit'color='primary' variant='contained' style={btnstyle} fullwidth>Iniciar Sesion</Button>

                    </form>

                    <Typography>
                    <Link href="#">
                      RECUPERAR CLAVE
                    </Link>
                    </Typography>

                    <Typography> Tiene usted una cuenta?
                    <Link href="#">
                      REGÍSTRATE
                    </Link>
                    </Typography>


                </Grid>
            </Paper>
        </Grid>

    )
}

export default Login
