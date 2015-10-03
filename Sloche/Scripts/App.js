'use strict';

// SP.SOD.executeFunc('sp.js', 'SP.ClientContext', setItRight);
/* 
  A useful set of tips on loading scripts on demand:
  http://sharepoint.stackexchange.com/questions/101844/why-does-sp-js-load-only-when-i-am-editing-a-web-part-page
  http://sharepoint.stackexchange.com/questions/125580/sp-js-file-not-loaded-in-a-simple-jsom-example
  https://msdn.microsoft.com/en-us/library/office/ff409592(v=office.14).aspx
*/
/*
  Loaded all of SP heritage, just to run it fully, but dunno if the directories in index.html head/script section are right, e.g. if it's really 1033/init.js
  http://allthatjs.com/2012/04/03/using-sharepoint-csom-in-html5-apps/
*/

var context = SP.ClientContext.get_current();
var user = context.get_web().get_currentUser();


// This code runs when the DOM is ready and creates a context object which is needed to use the SharePoint object model
$(document).ready(function () {
  // getUserName();
});

// This function prepares, loads, and then executes a SharePoint query to get the current users information
//function getUserName() {
//  context.load(user);
//  context.executeQueryAsync(onGetUserNameSuccess, onGetUserNameFail);
//}

// This function is executed if the above call is successful
// It replaces the contents of the 'message' element with the user name
//function onGetUserNameSuccess() {
//  $('#message').text('Hello ' + user.get_title());
//  $('#message').append('<br/>ReactJS is around!');
//  var HelloPrinting = React.createClass({
//    render: function () {
//      return(
//        React.createElement("div", {className: "container"}),
//          React.createElement("h1", null, "Getting Started...")
//      );
//    }
//  });
//  React.render(React.createElement(HelloPrinting, null), message);
//}

// This function is executed if the above call fails
function onGetUserNameFail(sender, args) {
  alert('Failed to get user name. Error:' + args.get_message());
}
