# fishPost

[![Greenkeeper badge](https://badges.greenkeeper.io/insanity54/fishPost.svg)](https://greenkeeper.io/)

create shipping labels


## fishPost workflow

* open web browser to http://127.0.0.1:8931/
  * see fishPost interface
* receive a payment in OpenBazaar client
* fishPost detects payment received in OpenBazaar Client via websockets
* fishPost creates entry in Process Queue
  * this is a row in a table containing:
    * buyer address
    * dropdown menu with shipment type (USPS First Class, FedEx Ground, etc.)
    * button to create shipping label
  * GUI has bulk actions
    * each row has checkbox
    * button to carry out action on selected
* user creates shipping label
* fishPost moves entry to processed Queue.
  * processed queue is another table showing:
    * buyer address
    * transit status (in transit/delivered/issue) color coded. Green cell background == delivered
    