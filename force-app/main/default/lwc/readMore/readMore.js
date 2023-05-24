import { LightningElement } from 'lwc';

export default class ReadMore extends LightningElement {

   
    connectedCallback() {
        console.log('In connectedCallback');
       console.log('sdhaskd ',this.template.querySelector('.read-more-container'));

       
    }


handleMoreData(event){
     const current = event.target;
     console.log(' current ',current);
    
        const isReadMoreBtn = current.className.includes('read-more-btn');
    
        if(!isReadMoreBtn) return;
    
        const currentText = event.target.parentNode.querySelector('.read-more-text');
    
        currentText.classList.toggle('read-more-text--show');
    
        current.textContent = current.textContent.includes('Read More') ? "Read Less..." : "Read More...";
  
    
}
}