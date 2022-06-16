# Week 10 - Wednesday


## Node.JS Core Understanding

### What is Node.JS?

- Node.js is an open source server environment
- Node.js is free
- Node.js runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.)
- Node.js uses JavaScript on the server

### What problem does Node.JS solve?

Node.JS is trying to create a single ecosystem where all the components of an application be it fronted, backend, desktop app, mobile app can all be written in one language and that is Java Script.

Node.JS also provides flexibility, asynchronous calls, and the most importantly it can be made to behave both functional and object oriented as and when need arises (this property is basically due to JavaScript, but it can be put to many unique applications)

### What is the V8 Javascript Engine?

V8 is the name of the JavaScript engine that powers Google Chrome. It's the thing that takes our JavaScript and executes it while browsing with Chrome.

V8 is the JavaScript engine i.e. it parses and executes JavaScript code. The DOM, and the other Web Platform APIs (they all makeup runtime environment) are provided by the browser.

The cool thing is that the JavaScript engine is independent of the browser in which it's hosted. This key feature enabled the rise of Node.js. V8 was chosen to be the engine that powered Node.js back in 2009, and as the popularity of Node.js exploded, V8 became the engine that now powers an incredible amount of server-side code written in JavaScript.

The Node.js ecosystem is huge and thanks to V8 which also powers desktop apps, with projects like Electron.

### Is Node.JS really necessary in the Development ecosystem?

Yes, Node.js made JavaScript a full-stack technology of choice for web application development.

### What is the difference between Node.JS and any other browser?

Both the browser and Node.js use JavaScript as their programming language.

Building apps that run in the browser is a completely different thing than building a Node.js application.

Despite the fact that it's always JavaScript, there are some key differences that make the experience radically different.

From the perspective of a frontend developer who extensively uses JavaScript, Node.js apps bring with them a huge advantage: the comfort of programming everything - the frontend and the backend - in a single language.

You have a huge opportunity because we know how hard it is to fully, deeply learn a programming language, and by using the same language to perform all your work on the web - both on the client and on the server, you're in a unique position of advantage.

### What is NVM and Why is it useful for Node.JS developers?

Node Version Manager (NVM) is a tool used to manage multiple active Node.js versions.

The Node.js platform, Node.js community of tools, and Node.js libraries are fast-moving targets – what might work under one Node.js version is not guaranteed to work for another version of Node.js. Hence, users need ways to switch between multiple versions of Node.js

NVM allows users to:

Locally download any of the remote Long Term Support (LTS) versions of Node.js with a simple command.
Easily switch between multiple versions of Node.js, right from the command line.
Set up aliases to switch between different downloaded versions of Node.js with ease.

## Node.JS Module System

### What is a Javascript Module?

A module in JavaScript is just a file containing related code. In JavaScript, we use the import and export keywords to share and receive functionalities respectively across different modules. The export keyword is used to make a variable, function, class or object accessible to other modules.

### Why are Javascript Modules necessary?

You create modules to better organize and structure your codebase. You can use them to break down large programs into smaller, more manageable, and more independent chunks of code which carry out a single or a couple of related tasks.

### What module standards are available in Node.JS?

Module in Node.js is a simple or complex functionality organized in single or multiple JavaScript files which can be reused throughout the Node.js application.

Each module in Node.js has its own context, so it cannot interfere with other modules or pollute global scope. Also, each module can be placed in a separate .js file under a separate folder.

Node.js implements CommonJS modules standard. CommonJS is a group of volunteers who define JavaScript standards for web server, desktop, and console application.

<img width="961" alt="image" src="https://user-images.githubusercontent.com/86013814/174150792-3020d3c8-4745-4a02-9740-67a0d591486e.png">

### What are the differences between ESModules and CommonJS modules?

ES modules are the standard for JavaScript, while CommonJS is the default in Node.js

The ES module format was created to standardize the JavaScript module system. It has become the standard format for encapsulating JavaScript code for reuse.

The CommonJS module system, on the other hand, is built into Node.js. Prior to the introduction of the ES module in Node.js, CommonJS was the standard for Node.js modules. As a result, there are plenty of Node.js libraries and modules written with CommonJS.


### Which types of modules exist in Node.JS?

Node.js includes three types of modules:

- Core Modules
- Local Modules
- Third Party Modules

## Node.JS Module System - Practice

***Link***: 
https://github.com/kathe92/core-code-from-scratch-readme/tree/main/WEEK-10/Week%2010

## Client-Server Model

### What is a Server?
A server is a computer program or device that provides a service to another computer program and its user, also known as the client. In a data center, the physical computer that a server program runs on is also frequently referred to as a server. That machine might be a dedicated server or it might be used for other purposes.

### Why is a Client?
In the client/server programming model, a server program awaits and fulfills requests from client programs, which might be running in the same, or other computers. A given application in a computer might function as a client with requests for services from other programs and as a server of requests from other programs.

### Is a server just another physical computer?
Why do we refer to a certain class of applications as Servers?
What is the difference?

A physical server is simply a computer that is used to run server software. 

A server is a computer or system that provides resources, data, services, or programs to other computers, known as clients, over a network. In theory, whenever computers share resources with client machines they are considered servers. There are many types of servers, including web servers, mail servers, and virtual servers.

An individual system can provide resources and use them from another system at the same time. This means that a device could be both a server and a client at the same time.

### Is there any similarity between human communication and the client-server model?

A client makes a request to the server and the server responds by satisfying the client's request. In the client/server model new clients and servers can be added incrementally as more users come on-line and the demand for services increases. That is to say, the client/server model is easily extensible and therefore scales well. Many clients can share the resources provided by a single server. This eliminates the need for each client to have their own “copy” of the resources. Each Internet service has its own associated set of clients and servers. For example, in the Web domain browsers are clients and Web servers are the servers.

### Is the client-server model applicable only to the Web?
Can you mention any other example of this model outside the Web?

The client-server approach enables any general-purpose computer to expand its capabilities by utilizing the shared resources of other hosts. Popular client-server applications include email, the World Wide Web, and network printing.



