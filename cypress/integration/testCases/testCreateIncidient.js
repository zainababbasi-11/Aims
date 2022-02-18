/// <reference types="Cypress" />
const CreateIncidientPage = require('../PageObject/CreateIncidientPage');
const user = require('../../fixtures/user.json')
import LoginPage from '../PageObject/LoginPage';

describe('Login', function(){
    const incidient = new CreateIncidientPage()
    const Ilogin = new LoginPage()
   
    it('Login and Click Incidient Form', function(){
        Ilogin.visit()
        Ilogin.fillEmail(user.user9)
        Ilogin.fillPassword(user.pass9)
        Ilogin.clickSubmit()
        
    })
    it('Enter Incidient Detail', function(){
        for(let i=0; i<=1; i++){
        incidient.enterIncidientDetail()
        //testing
        }
    })
    
    

})