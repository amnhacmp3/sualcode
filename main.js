const buyBtns = document.querySelectorAll('.js-name-ticket')
      const modal = document.querySelector('.js-modal')
      
     const modalClose = document.querySelector('.js-modal-close')

      function showbuytickets(){
      modal.classList.add('open')
      }
       function hideBuyTickets(){
        modal.classList.remove('open')
      }
       for (const buyBtn of buyBtns){
        buyBtn.addEventListener('click',showbuytickets)
       }
       modalClose.addEventListener('click',hideBuyTickets)
              
  

const names = document.querySelectorAll('.js-name-registration')
       const nameregistration = document.querySelector('.js-registration')
       const nameregistrationClose = document.querySelector('.js-modal-registration')
 
       function showbuytickregistration(){
         nameregistration.classList.add('open')
       }
       function hidenamebuy(){
       nameregistration.classList.remove('open')
       }
        
        for (const name of names){
         name.addEventListener('click',showbuytickregistration)
        }
        nameregistrationClose.addEventListener('click',hidenamebuy)

  