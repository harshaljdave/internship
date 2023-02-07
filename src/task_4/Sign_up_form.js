import { useState } from 'react'
import { TextField, Radio, RadioGroup, FormControl, FormControlLabel, FormLabel, FormHelperText, Checkbox, FormGroup, Button, Typography } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

const Sign_upForm = () => {
  const [formdata, setFormdata] = useState({
    fname: '',
    lname: '',
    email: '',
    gender: '',
    address: '',
    pincode: '',
    mnum: '',
    terms: false
  });

  const [fname_err, setFname_err] = useState("");

  const [lname_err, setLname_err] = useState("");

  const [email_err, setEmail_err] = useState("");

  const [address_err, setAddress_err] = useState("");

  const [pincode_err, setPincode_err] = useState("");

  const [mnum_err, setMnum_err] = useState("");

  const [gen_err, setGen_err] = useState("");

  const [chk_err, setChk_err] = useState("");

  // For updating states
  const handleInput = e => {
    let keyName = e.target.name
    let val = e.target.value
    if (keyName === "terms") {
      setFormdata(formdata => ({ ...formdata, [keyName]: e.target.checked }));
    } else {
      setFormdata(formdata => ({ ...formdata, [keyName]: val }));
    }
  }

  //Validate gender selection
  const gender_select = () => {
    let Gender = formdata.gender
    if (Gender) {
      setGen_err("");
    } else {
      setGen_err("Select Gender");
    }
  }

  //Validation function For all other fields
  const validate = (e) => {
    let field = e.target.name
    let validation_value = e.target.value

    switch (field) {
      // Validation For First Name
      case 'fname':
        if (validation_value.length > 0) {
          if (/\d/.test(validation_value)) {
            setFname_err("Name should not contain numbers");
          } else if (validation_value.length > 20) {
            setFname_err("length should be less than 20 characters");
          } else {
            setFname_err("")
          }
        } else {
          setFname_err("Name can not be empty")
        }
        break;

      // Validate Last Name
      case 'lname':
        if (validation_value.length > 0) {
          if (/\d/.test(validation_value)) {
            setLname_err("Name should not contain numbers");
          } else if (validation_value.length > 20) {
            setLname_err("length should be less than 20 characters");
          } else {
            setLname_err("")
          }
        } else {
          setLname_err("Name can not be empty")
        }
        break;

      //Validate E-Mail
      case 'email':
        if (validation_value.length > 0) {
          const email_pattern = /[A-Za-z][A-Za-z0-9]*@[A-Za-z]*.[a-z]+/
          if (validation_value.match(email_pattern)) {
            setEmail_err("")
          } else {
            setEmail_err("invalid email")
          }
        } else {
          setEmail_err("Email cannot be empty")
        }
        break;

      //Validate Address
      case 'address':
        if (validation_value.length > 0) {
          setAddress_err("")
        } else {
          setAddress_err("Address cannot be empty")
        }
        break;

      //Validate Pincode
      case 'pincode':
        if (validation_value.length > 0) {
          if (/\D/.test(validation_value)) {
            setPincode_err("it should be Numeric")
          } else {
            // if (/[0-9]{6}/.test(validation_value)) {
            if (validation_value.length == 6) {
              setPincode_err("")
            } else {
              setPincode_err("it should be exact 6 digits long")
            }
          }
        } else {
          setPincode_err("Field cannot be empty")
        }
        break;

      //Validate Mobile number
      case 'mnum':
        if (validation_value.length > 0) {
          if (/\D/.test(validation_value)) {
            setMnum_err("it should be Numeric")
          } else {
            // if (/[0-9]{10}/.test(validation_value)) {
            if (validation_value.length == 10) {
              setMnum_err("")
            } else {
              setMnum_err("it should be exact 10 digits long")
            }
          }
        } else {
          setMnum_err("Field cannot be empty")
        }
        break;

      //Validate checkbox
      case 'terms':
        if (e.target.checked) {
          setChk_err("")
        } else {
          setChk_err("Please agree to terms and conditions")
        }
        break;

      default:
        console.log("Unknown Field")
        break;
    }
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (formdata.terms) {
      if (!fname_err && !lname_err && !email_err && !gen_err && !address_err && !pincode_err && !mnum_err && !chk_err) {
        console.log(formdata, "submitted")
      } else {
        console.log("Some field left empty")
      }
    } else {
      setChk_err("Please agree to terms and conditions")
    }
  }

  return (
    <Grid2 container>
      <Grid2 textAlign="center" xs={12}>
        <Typography variant='h2'>Sign-up Form</Typography>
      </Grid2>
      <Grid2 textAlign="center" xs={12}>
        <form onSubmit={handleSubmit}>
          {/* Display First name field based on Error */}
          {fname_err
            ? <TextField required error
              name="fname"
              label="First Name"
              variant='outlined'
              size='small'
              margin='normal'
              value={formdata.fname}
              onChange={(e) => { handleInput(e); validate(e) }}
              onBlur={validate}
              helperText={fname_err}
            /> : <TextField required
              name="fname"
              label="First Name"
              variant='outlined'
              size='small'
              margin='normal'
              value={formdata.fname}
              onBlur={validate}
              onChange={(e) => { handleInput(e); validate(e) }} />
          }

          <br />

          {/* Display Last Name field based on Error */}
          {lname_err ?
            <TextField required error
              name='lname'
              label="Last Name"
              variant='outlined'
              size='small'
              margin='normal'
              value={formdata.lname}
              onChange={(e) => { handleInput(e); validate(e) }}
              helperText={lname_err}
              onBlur={validate}
            /> : <TextField required
              name='lname'
              label="Last Name"
              variant='outlined'
              size='small'
              margin='normal'
              value={formdata.lname}
              onBlur={validate}
              onChange={(e) => { handleInput(e); validate(e) }} />
          }

          <br />

          {/* Display Email field based on error */}
          {email_err ?
            <TextField required error
              name='email'
              label="email"
              variant='outlined'
              size='small'
              margin='normal'
              value={formdata.email}
              onChange={(e) => { handleInput(e); validate(e) }}
              onBlur={validate}
              helperText={email_err}
            /> : <TextField required
              name='email'
              label="email"
              variant='outlined'
              size='small'
              margin='normal'
              value={formdata.email}
              onBlur={validate}
              onChange={(e) => { handleInput(e); validate(e) }} />
          }

          <br />

          {/* Display Radio Button */}
          <FormControl>
            <FormLabel>Gender</FormLabel>
            <RadioGroup row
              value={formdata.gender}
              onChange={handleInput}
            >
              <FormControlLabel name="gender" value="male" control={<Radio />} label="Male" />
              <FormControlLabel name="gender" value="female" control={<Radio />} label="Female" />
              <FormControlLabel name="gender" value="other" control={<Radio />} label="Other" />
            </RadioGroup>
            <FormHelperText error size="medium">{gen_err}</FormHelperText>
          </FormControl>

          <br />

          {/* Display address field based on error */}
          {address_err ?
            <TextField required error multiline
              name="address"
              rows={4}
              label="address"
              variant='outlined'
              size='small'
              margin='normal'
              value={formdata.address}
              onChange={(e) => { handleInput(e); validate(e) }}
              onBlur={validate}
              onFocus={gender_select}
              helperText={address_err}
            /> : <TextField required multiline
              name='address'
              rows={4}
              label="address"
              variant='outlined'
              size='small'
              margin='normal'
              value={formdata.address}
              onFocus={gender_select}
              onBlur={validate}
              onChange={(e) => { handleInput(e); validate(e) }} />
          }

          <br />

          {/* Display pincode field based on error */}
          {pincode_err ?
            <TextField required error
              name='pincode'
              label="pincode"
              variant='outlined'
              size='small'
              margin='normal'
              maxLength='6'
              value={formdata.pincode}
              onChange={(e) => { handleInput(e); validate(e) }}
              onBlur={validate}
              helperText={pincode_err}
            /> : <TextField required
              name="pincode"
              label="pincode"
              variant='outlined'
              size='small'
              margin='normal'
              maxLength='6'
              value={formdata.pincode}
              placeholder="123456"
              onBlur={validate}
              onChange={(e) => { handleInput(e); validate(e) }} />
          }

          <br />

          {/* Display mobile number field based on error */}
          {mnum_err ?
            <TextField required error
              name='mnum'
              label="mnum"
              variant='outlined'
              size='small'
              margin='normal'
              value={formdata.mnum}
              onChange={(e) => { handleInput(e); validate(e) }}
              onBlur={validate}
              helperText={mnum_err}
            /> : <TextField required
              name='mnum'
              label="mnum"
              variant='outlined'
              size='small'
              margin='normal'
              value={formdata.mnum}
              onBlur={validate}
              onChange={(e) => { handleInput(e); validate(e) }} />
          }
          <br />

          {/* Display check box */}
          <FormControl>
            <FormGroup>
              <FormControlLabel
                name='terms'
                checked={formdata.terms}
                control={<Checkbox />}
                label="I agree to terms and conditions"
                labelPlacement="end"
                onChange={(e) => { handleInput(e); validate(e) }}
              />
              <FormHelperText color="error">{chk_err}</FormHelperText>
            </FormGroup>
          </FormControl>

          <br />

            <Button required variant='outlined' color='success' type="submit" >Submit</Button>

        </form>
      </Grid2>
    </Grid2>
  )
}

export default Sign_upForm