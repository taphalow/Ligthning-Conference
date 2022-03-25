import { LightningElement, api, wire } from 'lwc';
import getSession from '@salesforce/apex/SessionController.getSession';
export default class SessionDetails extends LightningElement {
  @api sessionId;
  session;
  @wire(getSession, { sessionId: '$sessionId' })
  wiredSession({ error, data }) {
    if (data) {
      this.session = data;
    } else if (error) {
      this.session = undefined;
      throw new Error('Failed to retrieve session');
    }
  }
  handleSessionsClick() {
    const navigateEvent = new CustomEvent('navigate', {
      detail: {
        state: 'list'
      }
    });
    this.dispatchEvent(navigateEvent);
  }  
}