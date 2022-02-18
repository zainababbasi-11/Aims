const incidient = require('../../fixtures/incidient.json')
class CreateIncidientPage{
   constructor(){}
        
    enterIncidientDetail(value){
        cy.get(incidient.clickIncidient).click()
        cy.wait(3000)
        cy.get(incidient.selectProvince).type(incidient.Proviance).type('{enter}')
        cy.get(incidient.selectDistrict).type(incidient.District).type('{enter}')
        cy.get(incidient.selectTehsil).type(incidient.Tehsil).type('{enter}')
        cy.wait(2000)
        cy.get(incidient.selectArea).type(incidient.Area)
        cy.get(incidient.selectCategory).type(incidient.Category).type('{enter}')
        cy.get(incidient.selectSection).type(incidient.Section).type('{enter}')
        cy.get(incidient.selectKilled).type(incidient.Killed)
        cy.get(incidient.selectInjured).type(incidient.Injured)
        cy.get(incidient.selectKidnapped).type(incidient.Kidnapped)
        cy.get(incidient.selectSource).type(incidient.Source).type('{enter}')
        cy.get(incidient.selectOtherSource).type(incidient.OtherSource)
        cy.get(incidient.selectOffice).type(incidient.Office).type('{enter}')
        cy.get(incidient.selectDetail).type(incidient.Detail)
        cy.get(incidient.selectComment).type(incidient.Comment)
        cy.get(incidient.clickSubmit).click();
        cy.get(incidient.incidientTab).click();
        cy.wait(2000)   
        return this
    }
}
export default CreateIncidientPage