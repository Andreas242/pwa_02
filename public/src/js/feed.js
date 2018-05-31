var createPostArea = document.querySelector('#create-post');
var btnAddDOM = document.getElementsByClassName('enable-notifications');
var btnAdd = Array.from(btnAddDOM);

console.log(btnAdd.length);
console.table(btnAdd);

btnAdd.forEach(element => {
  console.log('all gone');
  element.style.display = 'none'
});

// btnAdd.style.display = 'none';

let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  console.log(e)
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
});

window.addEventListener('appinstalled', (evt) => {
    app.logEvent('a2hs', 'installed');
  });

  window.addEventListener('beforeinstallprompt', (e) => {
    console.log('all ok');
    e.preventDefault();
    deferredPrompt = e;
    // Update UI notify the user they can add to home screen
    btnAdd.forEach(element => {
      element.style.display = 'block';
    });
  });

  btnAdd.forEach(element =>
    element.addEventListener('click', (e) => {
      console.log('all osssd');
      console.log('clicked!');
      // hide our user interface that shows our A2HS button
      element.style.display = 'none';
      // Show the prompt
      deferredPrompt.prompt();
      // Wait for the user to respond to the prompt
      deferredPrompt.userChoice
        .then((choiceResult) => {
          if (choiceResult.outcome === 'accepted') {
            console.log('User accepted the A2HS prompt');
          } else {
            console.log('User dismissed the A2HS prompt');
          }
          deferredPrompt = null;
        });
    })
  );

function openCreatePostModal() {
  createPostArea.style.display = 'block';
}

function closeCreatePostModal() {
  createPostArea.style.display = 'none';
}
