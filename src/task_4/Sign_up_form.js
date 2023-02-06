import ReasetFnamect, { useState } from 'react'
import { TextField, Radio, RadioGroup, FormControl, FormControlLabel, FormLabel, FormHelperText, Checkbox, FormGroup, Button, Typography } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

const Sign_upForm = () => {

  const [fname, setFname] = useState("")
  const [fname_err, setFname_err] = useState("");

  const [lname, setLname] = useState("");
  const [lname_err, setLname_err] = useState("");

  const [email, setEmail] = useState("");
  const [email_err, setEmail_err] = useState("");

  const [address, setAddress] = useState("");
  const [address_err, setAddress_err] = useState("");

  const [pincode, setPincode] = useState("");
  const [pincode_err, setPincode_err] = useState("");

  const [mnum, setMnum] = useState("");
  const [mnum_err, setMnum_err] = useState("");

  const [gender, setGender] = useState('');
  const [gen_err, setGen_err] = useState('');

  const [chkbox, setChkbox] = useState([]);

  // For Gender radio button
  const changeGender = e => {
    setGender(e.target.value);
    console.log(e.target.value)
  }

  //For Checkbox
  const changeCkhbox = e => {
    if (e.target.checked) {
      setChkbox(chkbox => ([...chkbox, e.target.value]))
    } else {
      const removed_chk = chkbox.indexOf(e.target.value);
      chkbox.splice(removed_chk, 1);
      setChkbox(chkbox);
    }
  }

  const handleSubmit = e => {
    e.preventDefault();

    // Validation For First Name i.e fname
    if (fname.length > 0) {
      if (/\d/.test(fname)) {
        setFname_err("Name should not contain numbers");
      } else if (fname.length > 20) {
        setFname_err("length should be less than 20 characters");
      } else {
        setFname_err("")
      }
    } else {
      setFname_err("Name can not be empty")
    }

    //Validation for Last Name i.e. lname
    if (lname.length > 0) {
      if (/\d/.test(lname)) {
        setLname_err("Name should not contain numbers");
      } else if (lname.length > 20) {
        setLname_err("length should be less than 20 characters");
      } else {
        setLname_err("")
      }
    } else {
      setLname_err("Name can not be empty")
    }

    // Validation For Email
    if (email.length > 0) {
      const email_pattern = /[A-Za-z][A-Za-z0-9]*@[A-Za-z]*.com/
      if (email_pattern.test(email)) {
        setEmail_err("")
      } else {
        setEmail_err("invalid email")
      }
    } else {
      setEmail_err("Email cannot be empty")
    }

    // Validation For address
    if (address.length > 0) {
      setAddress_err("")
    } else {
      setAddress_err("Address cannot be empty")
    }

    // Validate Pinocde
    if (pincode.length > 0) {
      if (/\D/.test(pincode)) {
        setPincode_err("it should be Numeric")
      } else {
        if (/[0-9]{6}/.test(pincode)) {
          setPincode_err("")
        } else {
          setPincode_err("it should be exact 6 digits long")
        }
      }
    } else {
      setPincode_err("Field cannot be empty")
    }

    //Validate Mobile number
    if (mnum.length > 0) {
      if (/\D/.test(mnum)) {
        setMnum_err("it should be Numeric")
      } else {
        if (/[0-9]{10}/.test(mnum)) {
          setMnum_err("")
        } else {
          setMnum_err("it should be exact 10 digits long")
        }
      }
    } else {
      setMnum_err("Field cannot be empty")
    }

    //Validate gender selection
    if (gender) {
      setGen_err("");
    } else {
      setGen_err("Select Gender");
    }
  }

  return (
    <Grid2 container>
      <Grid2 textAlign="center" xs={12}>
        <Typography variant='h2'>Sign-up Form</Typography>
      </Grid2>
      <Grid2 textAlign="center" xs={12}>
        <form onSubmit={handleSubmit}>
          {/* Render First name field based on Error */}
          {fname_err
            ? <TextField required error
              label="First Name"
              variant='outlined'
              size='small'
              margin='normal'
              value={fname}
              onChange={(e) => setFname(e.target.value.trim())}
              helperText={fname_err}
            /> : <TextField required
              label="First Name"
              variant='outlined'
              size='small'
              margin='normal'
              value={fname}
              onChange={(e) => setFname(e.target.value)} />
          }

          <br />

          {/* Render Last Name field based on Error */}
          {lname_err ?
            <TextField required error
              label="Last Name"
              variant='outlined'
              size='small'
              margin='normal'
              value={lname}
              onChange={(e) => setLname(e.target.value)}
              helperText={lname_err}
            /> : <TextField required
              label="Last Name"
              variant='outlined'
              size='small'
              margin='normal'
              value={lname}
              onChange={(e) => setLname(e.target.value)} />
          }

          <br />

          {/* Render Email field based on error */}
          {email_err ?
            <TextField required error
              label="email"
              variant='outlined'
              size='small'
              margin='normal'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              helperText={email_err}
            /> : <TextField required
              label="email"
              variant='outlined'
              size='small'
              margin='normal'
              value={email}
              onChange={(e) => setEmail(e.target.value)} />
          }

          <br />

          {/* Render Radio Button */}
          <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
            <RadioGroup row
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={gender}
              onChange={changeGender}
            >
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="female" control={<Radio />} label="Female" />
            </RadioGroup>
            <FormHelperText error size="medium">{gen_err}</FormHelperText>
          </FormControl>

          <br />

          {/* Render address field based on error */}
          {address_err ?
            <TextField required error multiline
              rows={4}
              label="address"
              variant='outlined'
              size='small'
              margin='normal'
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              helperText={pincode_err}
            /> : <TextField required multiline
              rows={4}
              label="address"
              variant='outlined'
              size='small'
              margin='normal'
              value={address}
              onChange={(e) => setAddress(e.target.value)} />
          }

          <br />

          {/* Render pincode field based on error */}
          {pincode_err ?
            <TextField required error
              label="pincode"
              variant='outlined'
              size='small'
              margin='normal'
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              helperText={pincode_err}
            /> : <TextField required
              label="pincode"
              variant='outlined'
              size='small'
              margin='normal'
              value={pincode}
              placeholder="123456"
              onChange={(e) => setPincode(e.target.value)} />
          }

          <br />

          {/* Render mobile number field based on error */}
          {mnum_err ?
            <TextField required error
              label="mnum"
              variant='outlined'
              size='small'
              margin='normal'
              value={mnum}
              onChange={(e) => setMnum(e.target.value)}
              helperText={mnum_err}
            /> : <TextField required
              label="mnum"
              variant='outlined'
              size='small'
              margin='normal'
              value={mnum}
              onChange={(e) => setMnum(e.target.value)} />
          }
          <br />

          {/* Render check box */}
          <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
            <FormLabel component="legend"> Technologies </FormLabel>
            <FormGroup row>
              <FormControlLabel control={<Checkbox value="ReactJS" onChange={changeCkhbox} />} label="React JS" />
              <FormControlLabel control={<Checkbox value="NodeJS" onChange={changeCkhbox} />} label="Node JS" />
              <FormControlLabel control={<Checkbox value="AgularJS" onChange={changeCkhbox} />} label="Angular JS" />
            </FormGroup>
          </FormControl>

          <br />

          <Button variant='outlined' color='success' type="submit" >Submit</Button>
        </form>
      </Grid2>
    </Grid2>
  )
}

export default Sign_upForm