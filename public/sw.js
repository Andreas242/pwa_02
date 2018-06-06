/* add serviceworker code here 
   A servcieworker only listens to events and is refered to as 'self' 
   ie. self.addEventListener('eventname', (event) =>) {

   })

   you need to *install* the service worker, *activate* it and probably see that you can intercept *fetch*-requests
   the *activate* also may need 'return self.clients.claim();' at the end.
*/
