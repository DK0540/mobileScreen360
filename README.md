/_ src/components/Login.css _/

/_ Default styles _/
.login-container {
max-width: 360px;
margin: 0 auto;
text-align: center;
padding: 20px;
background-color: black;
color: white;
height: 800px; /_ Set the screen height _/
display: flex;
flex-direction: column;
justify-content: center;
}

.logo {
width: 60px;
margin-bottom: 10px;
}

.input-container {
margin-bottom: 15px;
}

.input-field {
width: calc(100% - 40px); /_ Adjust the width to match the button size _/
padding: 10px;
border: none;
border-radius: 20px;
background-color: #2e2e2ea8;
border: 3px solid #121212db;
color: white;
}

/_ Set placeholder text color to white _/
.input-field::placeholder {
color: white;
}

.login-button {
background-color: #4caf50;
color: white;
padding: 10px 20px;
border: none;
border-radius: 20px;
cursor: pointer;
}

.login-button:hover {
background-color: #45a049;
}

.button-link {
text-decoration: none;
color: white;
}

.forgot-password-link {
text-decoration: none;
color: #007bff;
display: block;
margin-top: 10px;
}

.forgot-password-link:hover {
text-decoration: underline;
}
