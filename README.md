# pwa_02
Sopra Steria - jump off point - nothing added

PWA

Tools of the trade:

>Git – to get the code

Chrome – dev tools (F12) – lighthouse – application – console

>	Chrome - “Audit” for Lighthouse

>	Chrome - “Application” for serviceworker / cache / manifest

>	Chrome - Make sure clear-cache is set on “network”

>	Chrome - Make sure “Update on reload” is checked on “Application -> service worker”  

Ngrok – to actually use your mobile, or use an emulator, or host on firebase
>npm install –g ngrok

Resources
>https://whatwebcando.today/

>https://developers.google.com/web/fundamentals/web-app-manifest/  - Web manifest

>https://developers.google.com/web/fundamentals/app-install-banners/ - Install 2 Home Screen

>https://developers.google.com/web/fundamentals/primers/service-workers/ - Service Workers

IOS
>https://www.netguru.co/codestories/few-tips-that-will-make-your-pwa-on-ios-feel-like-native 

Get started
>git clone https://github.com/Andreas242/pwa_02
>cd pwa_02
>npm install
>npm start

- later in another window
>npm install –g ngrok
ngrok http 127.0.0.1:xxxx

What to do!
Task 1)
Make the website at … to a PWA ie, reach close to 100 on PWA in Lighthouse.
- Either just open Lighthouse and get cracking or use the links on the webpage to get more information.

I’ve added some code that is constantly in flux to be able to ”Add 2 Home Screen”. This will probably change somewhat again next month. I’m not sure how this works on IOS so, please let me know!

Task 2 - 
Cache all static resources so that we still see things when we are offline

-	Cache API information is available at the same place as the service worker information.
-	Clearly show that we are not connected if that is the case.
-	Add another asset (such as a new page) and cache it as well

Task 3 - 
Lets go mobile!
-	Use whatwebcando.today and pick some functionallity you want to try out.
-	Make sure to present alternatives for those who do not have access to that functionality on their device. 

Task 4)
- Try to set up a PWA with React or Vue – this works well with task 5 as well 

Task 5)
-	Use firebase to set up a database
-	Allow the user to add content, ie make a TODO or something a bit more interesting
-	Cache dynamic content with the help of indexDB
-	Use background sync to make sure that we always have the most recent data 
-	Enable push-notifications
