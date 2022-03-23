const DynamicLoadingPage = require('../pageobjects/dynamic_loading.page');

var test=[
{path:"replicated/account/logon/", element:'#rememberMe',text: 'Login 12'},
{path:"replicated/account/logon/", element:'.mT15 .buttonLink',text: 'Login16'},
{path:"replicated/Account/ForgotPassword", element:'#forgotPasswordEmail',text: 'Login18'},
{path:"replicated/Account/ForgotPassword", element:'.mT32 a',text: 'Login25'}

]


describe('My Login application', () => {
    
    
    
    for(var i=0;i<test.length;i++){
    	  DynamicLoadingPage.exist(test[i]);}
          
          
          
		
    //DynamicLoadingPage.login('replicated/account/logon','#userName','#userPassword',"#btnFormSubmit", "jgroening@yahoo.com", "Surfingyoga24-",'Blank password', "#profileImg" )
	//DynamicLoadingPage.login('replicated/account/logon','#userName','#userPassword',"#btnFormSubmit", "jgroening@yahoo.com", " ",'Blank password', '.errorDv')
	
    
            
		  
});

describe('Remember me', () => {
    
    


        
       
               
        
       // DynamicLoadingPage.checkinglogin("replicated/account/logon","#rememberMe",'#userName','#userPassword', "jgroening@yahoo.com", "Surfingyoga24-",'Checked')
       // DynamicLoadingPage.checkingloginsign("replicated/account/logon",'#userName','#userPassword', "#btnFormSubmit","jgroening@yahoo.com", "Surfingyoga24-",'Login 7',"#rememberMe","#profileImg")  
        DynamicLoadingPage.attribute({path:"replicated/account/logon/", element:'.mT15 a.buttonLink',text: 'Login16 second step',attr:"href",value:"/replicated/Account/ForgotPassword"});  
        DynamicLoadingPage.forgotfull({path:"replicated/Account/ForgotPassword",username:'jgroening@yahoo.com' ,element:'.mT9',text: 'Login19',elementexpected:'.formSubmitMsg',inputus:'#forgotPasswordEmail'})  
		
    //DynamicLoadingPage.login('replicated/account/logon','#userName','#userPassword',"#btnFormSubmit", "jgroening@yahoo.com", "Surfingyoga24-",'Blank password', "#profileImg" )
	//DynamicLoadingPage.login('replicated/account/logon','#userName','#userPassword',"#btnFormSubmit", "jgroening@yahoo.com", " ",'Login 11', '.errorDv')
	
    
            
		  
});

/**describe('Forgot email', () => {
    
    


        
       
               
        
       // DynamicLoadingPage.checkinglogin("replicated/account/logon","#rememberMe",'#userName','#userPassword', "jgroening@yahoo.com", "Surfingyoga24-",'Checked')
       // DynamicLoadingPage.checkingloginsign("replicated/account/logon",'#userName','#userPassword', "#btnFormSubmit","jgroening@yahoo.com", "Surfingyoga24-",'Checking login and sign',"#rememberMe","#profileImg")  
       DynamicLoadingPage.attribute({path:"replicated/Account/ForgotPassword", element:'#forgotPasswordEmail',text: 'Login18 second step',attr:"placeholder",value:"Email Address"});  
          
        
    //DynamicLoadingPage.login('replicated/account/logon','#userName','#userPassword',"#btnFormSubmit", "jgroening@yahoo.com", "Surfingyoga24-",'Blank password', "#profileImg" )
    //DynamicLoadingPage.login('replicated/account/logon','#userName','#userPassword',"#btnFormSubmit", "jgroening@yahoo.com", " ",'Blank password', '.errorDv')
    
    
            
          
});**/





describe('Forgot', () => {
    
    


        
       
               
        
       // DynamicLoadingPage.checkinglogin("replicated/account/logon","#rememberMe",'#userName','#userPassword', "jgroening@yahoo.com", "Surfingyoga24-",'Checked')
       // DynamicLoadingPage.checkingloginsign("replicated/account/logon",'#userName','#userPassword', "#btnFormSubmit","jgroening@yahoo.com", "Surfingyoga24-",'Checking login and sign',"#rememberMe","#profileImg")  
        DynamicLoadingPage.golink({path:"replicated/account/logon/", element:'.mT15 a.buttonLink',text: 'Login17', elementexpected: '.actforgotpassword'});  

        
    //DynamicLoadingPage.login('replicated/account/logon','#userName','#userPassword',"#btnFormSubmit", "jgroening@yahoo.com", "Surfingyoga24-",'Blank password', "#profileImg" )
    //DynamicLoadingPage.login('replicated/account/logon','#userName','#userPassword',"#btnFormSubmit", "jgroening@yahoo.com", " ",'Blank password', '.errorDv')
    
    
            
          
});

describe('Don`t have account', () => {
    
    


        
       
               
        DynamicLoadingPage.golink({path:"replicated/Account/ForgotPassword", element:'.mT32 a',text: 'Login26', elementexpected: '.actregister'});
       // DynamicLoadingPage.checkinglogin("replicated/account/logon","#rememberMe",'#userName','#userPassword', "jgroening@yahoo.com", "Surfingyoga24-",'Checked')
       // DynamicLoadingPage.checkingloginsign("replicated/account/logon",'#userName','#userPassword', "#btnFormSubmit","jgroening@yahoo.com", "Surfingyoga24-",'Checking login and sign',"#rememberMe","#profileImg")  
      //  DynamicLoadingPage.golink({path:"replicated/account/logon/", element:'.mT15 a.buttonLink',text: 'Login17', elementexpected: '.actforgotpassword'});  
      //  DynamicLoadingPage.exist({path:"replicated/Account/ResetPassword/049895fd-1a6d-4b7f-aa2d-fe86586df746?h=vMFTx60saf24aN7QMVjl9A%3d%3d",element:"#loginFormContainer", text:'Login 19'}); 
      //  DynamicLoadingPage.exist({path:"replicated/Account/ResetPassword/049895fd-1a6d-4b7f-aa2d-fe86586df746?h=vMFTx60saf24aN7QMVjl9A%3d%3d",element:"#newPass", text:'Login 22 new Password'}); 
      //  DynamicLoadingPage.exist({path:"replicated/Account/ResetPassword/049895fd-1a6d-4b7f-aa2d-fe86586df746?h=vMFTx60saf24aN7QMVjl9A%3d%3d",element:"#newPassConfirm", text:'Login 22 new Password Confirm'}); 
        
    //DynamicLoadingPage.login('replicated/account/logon','#userName','#userPassword',"#btnFormSubmit", "jgroening@yahoo.com", "Surfingyoga24-",'Blank password', "#profileImg" )
    //DynamicLoadingPage.login('replicated/account/logon','#userName','#userPassword',"#btnFormSubmit", "jgroening@yahoo.com", " ",'Blank password', '.errorDv')
    
    
            
          
});