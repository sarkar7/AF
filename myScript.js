function regForm(){
	
	var a = "<div id='form'>"+
	"<form>"+
			"<table>"+
			"<tr><td><h3 class='header'>Sign Up Form</h3></td></tr>"+
			"<tr><td><input class='input' type='text' placeholder='Full Name' /></td></tr>"+
			"<tr><td><input class='input' type='text' placeholder='Address' /></td></tr>"+
			"<tr><td><input class='input' type='text' placeholder='Username' /></td></tr>"+
			"<tr><td><input class='input' type='password' placeholder='Password' /></td></tr>"+
			"<tr><td><input class='input' type='password' placeholder='Retype Password' /></td></tr>"+
			"<tr><td><input class='input' type='text' placeholder='Email ID' /></td></tr>"+
			"<tr><td><input class='input' type='text' placeholder='Mobile Number' /></td></tr>"+
			"<tr><td><input class='input' type='text' placeholder='Date of Birth' onfocus='(this.type='date')'/></td></tr>"+
			
			"<tr><td>"+
			"<select class='input_country'>"+
				"<option>Country</option>"+
				"<option value='HU'>Hungary</option>"+
				"<option value='IS'>Iceland</option>"+
				"<option value='IN'>India</option>"+
				"<option value='ID'>Indonesia</option>"+
				"<option value='IR'>Iran, Islamic Republic of</option>"+
				"<option value='IQ'>Iraq</option>"+
				"<option value='IE'>Ireland</option>"+
				"<option value='IM'>Isle of Man</option>"+
				"<option value='IL'>Israel</option>"+
				"<option value='IT'>Italy</option>"+
				"<option value='JM'>Jamaica</option>"+
				"<option value='JP'>Japan</option>"+
				"<option value='JE'>Jersey</option>"+
				"<option value='JO'>Jordan</option>"+
				"<option value='KZ'>Kazakhstan</option>"+
			"</select>"+
			"</td></tr>"+
			"<tr><td>"+
				"<input class='input_radio_male' type='radio' name='gender' value='male' /> <b>Male</b>"+
				"<input class='input_radio_female' type='radio' name='gender' value='female' /> <b>Female</b>"+
			"</td></tr>"+
			"<tr><td>"+
				"<input class='btn_input_submit' type='submit' value='Sign Up' />"+
				"<input class='btn_input_reset' type='submit' value='Reset' />"+
			"</td></tr>"+
			"</table>"+
		"</form>"+
		"</div>";
	
	//document.getElementById('signUpForm').innerHTML = a;
	
	$('#signUpForm').html(a);
	
}
