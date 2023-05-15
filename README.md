# Smart Contract Voting

This is a simple web application built with HTML, CSS, and JavaScript that allows users to vote for candidates and add new candidates to the list.

## Installation

To run the application, you will need a web server to serve the HTML file. You can use any web server you like, such as Apache or Nginx. Simply copy the `index.html`, `style.css`, `web3.min.js`, and `app.js` files to your server directory.

## Usage

Once the application is running on your web server, open it in a web browser. You will see a list of candidates and a form to add new candidates. To vote for a candidate, select their name from the dropdown menu and enter the amount of Ether you want to vote with.

When you submit the vote form, the transaction will be sent to the Ethereum blockchain using the `web3` library. You can view the total number of votes and the number of votes for each candidate on the page.

To add a new candidate, simply fill out the form and submit it. The candidate will be added to the list and the page will be refreshed.

## Dependencies

This application requires the `web3` library to interact with the Ethereum blockchain. The library is included in the `web3.min.js` file and is loaded in the HTML file. The application also relies on a smart contract deployed on the Ethereum blockchain, which is specified by the `AppAbi` and `AppAddress` variables in the `app.js` file.

## Credits

This application was created by jjjmmy. Feel free to modify and distribute the code as you wish.
