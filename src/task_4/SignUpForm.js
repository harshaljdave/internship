import { useState } from 'react'
import { TextField, Radio, RadioGroup, FormControl, FormControlLabel, FormLabel, FormHelperText, Checkbox, FormGroup, Button, Typography } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

const SignUpForm = () => {

  //States
  const [formdata, setFormdata] = useState({
    fname: '',
    lname: '',
    password: '',
    cPassword: '',
    email: '',
    gender: '',
    address: '',
    pincode: '',
    mnum: '',
    terms: false
  });

  const [form_err, setForm_err] = useState({
    fname_err: "",
    lname_err: "",
    email_err: "",
    psd_err: "",
    cpsd_err: "",
    address_err: "",
    pincode_err: "",
    mnum_err: "",
    gen_err: "",
    chk_err: ""
  })

  const [editing, setEditing] = useState(true)
  const [first_edit,setFirst_edit] = useState(false)

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
      setForm_err(form_err => ({ ...form_err, gen_err: "" }))
    } else {
      setForm_err(form_err => ({ ...form_err, gen_err: "Select Gender" }))
    }
  }

  //Compare passwords
  const compare_passwords = e => {
    if (e.target.name == 'password') {
      if (e.target.value != formdata.cPassword && formdata.cPassword != "") {
        setForm_err(form_err => ({ ...form_err, cpsd_err: "Passwords must match" }));
      }
    } else {
      validate(e)
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
            setForm_err(form_err => ({ ...form_err, fname_err: "First Name should not contain numbers" }));
          } else if (validation_value.length > 20) {
            setForm_err(form_err => ({ ...form_err, fname_err: "Length should be less then 20 characters" }));
          } else {
            setForm_err(form_err => ({ ...form_err, fname_err: "" }));
          }
        } else {
          setForm_err(form_err => ({ ...form_err, fname_err: "First name cannot be empty" }));
        }
        break;

      // Validate Last Name
      case 'lname':
        if (validation_value.length > 0) {
          if (/\d/.test(validation_value)) {
            setForm_err(form_err => ({ ...form_err, lname_err: "Last Name should not contain numbers" }));
          } else if (validation_value.length > 20) {
            setForm_err(form_err => ({ ...form_err, lname_err: "Length should be less then 20 characters" }));
          } else {
            setForm_err(form_err => ({ ...form_err, lname_err: "" }));
          }
        } else {
          setForm_err(form_err => ({ ...form_err, lname_err: "Last name cannot be empty" }));
        }
        break;

      //Password validation
      case 'password':
        //To check a password between 8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character
        const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
        if (validation_value.match(password_pattern)) {
          setForm_err(form_err => ({ ...form_err, psd_err: "" }))
        } else {
          setForm_err(form_err => ({ ...form_err, psd_err: "password does not match requirments" }))
        }
        break;

      //Confirm password validation
      case 'cPassword':
        if (validation_value === formdata.password) {
          setForm_err(form_err => ({ ...form_err, cpsd_err: "" }))
        } else {
          setForm_err(form_err => ({ ...form_err, cpsd_err: "Passwords must match" }))
        }
        break;

      //Validate E-Mail
      case 'email':
        if (validation_value.length > 0) {
          const email_pattern = /[A-Za-z][A-Za-z0-9]*@[A-Za-z]*.com/
          if (validation_value.match(email_pattern)) {
            setForm_err(form_err => ({ ...form_err, email_err: "" }))
          } else {
            setForm_err(form_err => ({ ...form_err, email_err: "Invald Email" }))
          }
        } else {
          setForm_err(form_err => ({ ...form_err, email_err: "Email cannot be empty" }))
        }
        break;

      //Validate Address
      case 'address':
        if (validation_value.length > 0) {
          setForm_err(form_err => ({ ...form_err, address_err: "" }))
        } else {
          setForm_err(form_err => ({ ...form_err, address_err: "Adress can not be empty" }))
        }
        break;

      //Validate Pincode
      case 'pincode':
        if (validation_value.length > 0) {
          if (/\D/.test(validation_value)) {
            setForm_err(form_err => ({ ...form_err, pincode_err: "It should be numeric" }));
          } else {
            // if (/[0-9]{6}/.test(validation_value)) {
            if (validation_value.length === 6) {
              setForm_err(form_err => ({ ...form_err, pincode_err: "" }));
            } else {
              setForm_err(form_err => ({ ...form_err, pincode_err: "It should be exactly 6 digits long" }));
            }
          }
        } else {
          setForm_err(form_err => ({ ...form_err, pincode_err: "It cannot be empty" }));
        }
        break;

      //Validate Mobile number
      case 'mnum':
        if (validation_value.length > 0) {
          if (/\D/.test(validation_value)) {
            setForm_err(form_err => ({ ...form_err, mnum_err: "It should contain only digits" }))
          } else {
            // if (/[0-9]{10}/.test(validation_value)) {
            if (validation_value.length === 10) {
              setForm_err(form_err => ({ ...form_err, mnum_err: "" }))
            } else {
              setForm_err(form_err => ({ ...form_err, mnum_err: "It should be exactly 10 digits" }))
            }
          }
        } else {
          setForm_err(form_err => ({ ...form_err, mnum_err: "It cannot be empty" }))
        }
        break;

      //Validate checkbox
      case 'terms':
        if (e.target.checked) {
          setForm_err(form_err => ({...form_err,chk_err:""}))
        } else {
          setForm_err(form_err => ({...form_err,chk_err:"Please agree to terms and conditions"}))
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
      if (!form_err.fname_err && !form_err.lname_err && !form_err.email_err && 
          !form_err.gen_err && !form_err.address_err && !form_err.pincode_err && 
          !form_err.mnum_err && !form_err.chk_err && !form_err.psd_err && !form_err.cpsd_err) {
        console.log(formdata, "submitted")
        setEditing(editing => !editing)
      } else {
        console.log("Some field left empty")
      }
    } else {
      setForm_err(form_err => ({...form_err,chk_err:"Please agree to terms and conditions"}))
    }
  }

  return (
    <>
    {console.log(first_edit)}
    {!editing ? 
      <div>
      <p>Filled Information</p>
      <p>{formdata.fname}</p>
      <p>{formdata.lname}</p>
      <p>{formdata.password}</p>
      <p>{formdata.email}</p>
      <p>{formdata.gender}</p>
      <p>{formdata.address}</p>
      <p>{formdata.pincode}</p>
      <p>{formdata.mnum}</p>
      <Button 
      variant='outlined' 
      color='success' 
      type="submit" 
      onClick={()=> {setEditing(editing=>!editing) ; !first_edit && setFirst_edit(true)}}>Edit</Button>
      </div> : <Grid2 container>
      <Grid2 textAlign="center" xs={12}>
        <Typography variant='h2'>Sign-up Form</Typography>
      </Grid2>
      <Grid2 textAlign="center" xs={12}>
        <form onSubmit={handleSubmit}>
          {/* Display First name field based on Error */}
          {form_err.fname_err
            ? <TextField required error
              name="fname"
              label="First Name"
              variant='outlined'
              size='small'
              margin='normal'
              value={formdata.fname}
              onChange={(e) => { handleInput(e); validate(e) }}
              onBlur={validate}
              helperText={form_err.fname_err}
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
          {form_err.lname_err ?
            <TextField required error
              name='lname'
              label="Last Name"
              variant='outlined'
              size='small'
              margin='normal'
              value={formdata.lname}
              onChange={(e) => { handleInput(e); validate(e) }}
              onBlur={validate}
              helperText={form_err.lname_err}
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

          {/* Password */}
          {form_err.psd_err ?
            <TextField required error
              name='password'
              label="Password"
              type="password"
              variant='outlined'
              size='small'
              margin='normal'
              value={formdata.password}
              onBlur={validate}
              onChange={(e) => { handleInput(e); validate(e); compare_passwords(e) }}
              helperText={form_err.psd_err}
            /> : <TextField required
              name='password'
              label="Password"
              type="password"
              variant='outlined'
              size='small'
              margin='normal'
              value={formdata.password}
              onBlur={validate}
              onChange={(e) => { handleInput(e); validate(e); compare_passwords(e) }} />
          }


          <br />

          {/* Password Confirmation */}
          {form_err.cpsd_err
            ? <TextField required error
              name='cPassword'
              label="Confirm Password"
              type="password"
              variant='outlined'
              size='small'
              margin='normal'
              value={formdata.cPassword}
              onBlur={validate}
              onChange={(e) => { handleInput(e); validate(e) }}
              helperText={form_err.cpsd_err}
            /> : <TextField required
              name='cPassword'
              label="Confirm Password"
              type="password"
              variant='outlined'
              size='small'
              margin='normal'
              value={formdata.cPassword}
              onBlur={validate}
              onChange={(e) => { handleInput(e); validate(e) }} />
          }

          <br />

          {/* Display Email field based on error */}
          {form_err.email_err ?
            <TextField required error
              name='email'
              label="email"
              variant='outlined'
              size='small'
              margin='normal'
              value={formdata.email}
              onChange={(e) => { handleInput(e); validate(e) }}
              onBlur={validate}
              helperText={form_err.email_err}
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
            <FormHelperText error size="medium">{form_err.gen_err}</FormHelperText>
          </FormControl>

          <br />

          {/* Display address field based on error */}
          {form_err.address_err ?
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
              helperText={form_err.address_err}
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
          {form_err.pincode_err ?
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
              helperText={form_err.pincode_err}
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
          {form_err.mnum_err ?
            <TextField required error
              name='mnum'
              label="mnum"
              variant='outlined'
              size='small'
              margin='normal'
              value={formdata.mnum}
              onChange={(e) => { handleInput(e); validate(e) }}
              onBlur={validate}
              helperText={form_err.mnum_err}
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
              <FormHelperText color="error">{form_err.chk_err}</FormHelperText>
            </FormGroup>
          </FormControl>

          <br />

          <Button variant='outlined' color='success' type="submit" >{first_edit ? "Save" : "Submit"}</Button>

        </form>
      </Grid2>
    </Grid2>
  }
  </>
  )
}


export default SignUpForm