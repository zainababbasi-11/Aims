const Auser = require('../../fixtures/user.json')
class LoginPage{
   constructor(){}
    visit(){
       
        cy.visit('http://172.104.180.223/ss-dev/#/login');
    }

    fillPassword(password){
        const field = cy.get(Auser.password)
        field.clear()
        field.type(password)
        field.invoke('attr', 'placeholder').should('contain', 'Password')
       
        return this
    }
    fillEmail(value){
        const field =cy.get(Auser.mail)
        field.clear()
        field.type(value)
        field.invoke('attr', 'placeholder').should('contain', 'Email')
        return this
    }

 
    clickSubmit(){
        const button = cy.get(Auser.loginbtn)
        button.click()
        return this
    }

}
export default LoginPage
