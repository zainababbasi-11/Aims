const activity = require('../../fixtures/activity.json')
const dayjs = require('dayjs')

class ActivityPage{
   constructor(){}
   

    EnterActivtyDetail(value){
       cy.get(activity.clickActivity).click()
       cy.get(activity.activityType).type(activity.type).type('{enter}')
       cy.get(activity.activityTitle).type(activity.title)
       cy.get(activity.activityAim).type(activity.aim)
       cy.wait(1000)
       cy.get(activity.activityCriticality).type(activity.criticality).type('{enter}')
       cy.get(activity.activityOutput).type(activity.output).type('{enter}')
       cy.get(activity.activityOutcome).type(activity.outecome).type('{enter}')
       cy.wait(1000)
       cy.get(activity.activityProviance).type(activity.Proviance).type('{enter}')
       cy.wait(1000)
       cy.get(activity.activityDistrict).type(activity.district).type('{enter}')
       cy.get(activity.activitysection).type(activity.section).type('{enter}')
       cy.get(activity.activitySubType).type(activity.subType).type('{enter}')
       cy.get(activity.activityDate).type(dayjs().format('MM/DD/YYYY'))
       cy.get(activity.activityLocation).type(activity.location)
       cy.get(activity.activityCleared).type(activity.cleared).type('{enter}')
       cy.get(activity.activityFocalP).type(activity.focalPerson)
       cy.get(activity.activityFocalPoint).type(activity.focalPoint)
       cy.get(activity.activityMedia).type(activity.mediaBefore).type('{enter}')
       cy.get(activity.activityMediaAfter).type(activity.mediaAfter).type('{enter}')
       cy.get(activity.activityAttand).type(activity.attend)
       cy.get(activity.activityUnAttend).type(activity.unAttend)
       cy.get(activity.activityAddButton).click()
       cy.get(activity.activityTab).click()






        return this
    }
    
 
    

}
export default ActivityPage
