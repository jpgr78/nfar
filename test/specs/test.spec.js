const DynamicLoadingPage = require('../pageobjects/dynamic_loading.page');

var test=[{path:"replicated/account/logon/", element:'#userName',text: 'User name exist'},
{path:"replicated/account/logon/",element:'#userPassword',text:'User password exist'},
{path:"replicated/account/logon/",element:'#btnFormSubmit',text:'Submit button exist'},
{path:"replicated/account/logon/", element:'#rememberMe',text: 'Remember exist'},
{path:"replicated/account/logon/", element:'.mT15 .buttonLink',text: 'Login16'},
{path:"replicated/Account/ForgotPassword", element:'#forgotPasswordEmail',text: 'Login18'},


]


describe('My Login application', () => {
    
    
    
    for(var i=0;i<test.length;i++){
    	  DynamicLoadingPage.exist(test[i]);}
          
          
          
		
    //DynamicLoadingPage.login('replicated/account/logon','#userName','#userPassword',"#btnFormSubmit", "jgroening@yahoo.com", "Surfingyoga24-",'Blank password', "#profileImg" )
	//DynamicLoadingPage.login('replicated/account/logon','#userName','#userPassword',"#btnFormSubmit", "jgroening@yahoo.com", " ",'Blank password', '.errorDv')
	
    
            
		  
});

describe('Checking', () => {
    
    


        
       
               
        
       // DynamicLoadingPage.checkinglogin("replicated/account/logon","#rememberMe",'#userName','#userPassword', "jgroening@yahoo.com", "Surfingyoga24-",'Checked')
       // DynamicLoadingPage.checkingloginsign("replicated/account/logon",'#userName','#userPassword', "#btnFormSubmit","jgroening@yahoo.com", "Surfingyoga24-",'Checking login and sign',"#rememberMe","#profileImg")  
        DynamicLoadingPage.attribute({path:"replicated/account/logon/", element:'.mT15 a.buttonLink',text: 'Login16 second step',attr:"href",value:"/replicated/Account/ForgotPassword"});  
        DynamicLoadingPage.forgotfull({path:"replicated/Account/ForgotPassword",username:'jgroening@yaho.com' ,element:'.mT9',text: 'Login19',elementexpected:'.formSubmitMsg',inputus:'#forgotPasswordEmail'})  
		
    //DynamicLoadingPage.login('replicated/account/logon','#userName','#userPassword',"#btnFormSubmit", "jgroening@yahoo.com", "Surfingyoga24-",'Blank password', "#profileImg" )
	//DynamicLoadingPage.login('replicated/account/logon','#userName','#userPassword',"#btnFormSubmit", "jgroening@yahoo.com", " ",'Blank password', '.errorDv')
	
    
            
		  
});

describe('Forgot email', () => {
    
    


        
       
               
        
       // DynamicLoadingPage.checkinglogin("replicated/account/logon","#rememberMe",'#userName','#userPassword', "jgroening@yahoo.com", "Surfingyoga24-",'Checked')
       // DynamicLoadingPage.checkingloginsign("replicated/account/logon",'#userName','#userPassword', "#btnFormSubmit","jgroening@yahoo.com", "Surfingyoga24-",'Checking login and sign',"#rememberMe","#profileImg")  
       DynamicLoadingPage.attribute({path:"replicated/Account/ForgotPassword", element:'#forgotPasswordEmail',text: 'Login18 second step',attr:"placeholder",value:"Email Address"});  
          
        
    //DynamicLoadingPage.login('replicated/account/logon','#userName','#userPassword',"#btnFormSubmit", "jgroening@yahoo.com", "Surfingyoga24-",'Blank password', "#profileImg" )
    //DynamicLoadingPage.login('replicated/account/logon','#userName','#userPassword',"#btnFormSubmit", "jgroening@yahoo.com", " ",'Blank password', '.errorDv')
    
    
            
          
});





describe('Forgot', () => {
    
    


        
       
               
        
       // DynamicLoadingPage.checkinglogin("replicated/account/logon","#rememberMe",'#userName','#userPassword', "jgroening@yahoo.com", "Surfingyoga24-",'Checked')
       // DynamicLoadingPage.checkingloginsign("replicated/account/logon",'#userName','#userPassword', "#btnFormSubmit","jgroening@yahoo.com", "Surfingyoga24-",'Checking login and sign',"#rememberMe","#profileImg")  
        DynamicLoadingPage.golink({path:"replicated/account/logon/", element:'.mT15 a.buttonLink',text: 'Login17', elementexpected: '.actforgotpassword'});  
          
        
    //DynamicLoadingPage.login('replicated/account/logon','#userName','#userPassword',"#btnFormSubmit", "jgroening@yahoo.com", "Surfingyoga24-",'Blank password', "#profileImg" )
    //DynamicLoadingPage.login('replicated/account/logon','#userName','#userPassword',"#btnFormSubmit", "jgroening@yahoo.com", " ",'Blank password', '.errorDv')
    
    
            
          
});
