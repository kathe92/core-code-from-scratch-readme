# Week 10 - Thursday


## Node.JS Core Understanding

### What is an API?

The term API is an acronym, and it stands for “Application Programming Interface.”

Think of an API like a menu in a restaurant. The menu provides a list of dishes you can order, along with a description of each dish. When you specify what menu items you want, the restaurant’s kitchen does the work and provides you with some finished dishes. You don’t know exactly how the restaurant prepares that food, and you don’t really need to.

Similarly, an API lists a bunch of operations that developers can use, along with a description of what they do. The developer doesn’t necessarily need to know how, for example, an operating system builds and presents a “Save As” dialog box. They just need to know that it’s available for use in their app.

This isn’t a perfect metaphor, as developers may have to provide their own data to the API to get the results, so perhaps it’s more like a fancy restaurant where you can provide some of your own ingredients the kitchen will work with.

But it’s broadly accurate. APIs allow developers to save time by taking advantage of a platform’s implementation to do the nitty-gritty work. This helps reduce the amount of code developers need to create, and also helps create more consistency across apps for the same platform. APIs can control access to hardware and software resources.

### What is a Protocol?

A protocol is a set of rules for formatting and processing data. Network protocols are like a common language for computers. The computers within a network may use vastly different software and hardware; however, the use of protocols enables them to communicate with each other regardless.
 
### Is the term API only applicable to the communication of programs over the Internet?

Web services and microservices.

### Why is structured communication between two programs important?
Do we humans use APIs when communicating without technology?

Without APIs, we’re left with “application islands” – a world of isolated data and applications that can’t communicate. Without the ‘digital glue’ of APIs to hold systems together, the technologies we have come to expect and rely on simply won’t work… and it doesn’t just stop at social media.

***A World Without APIs***

Instant messaging applications give way to phone, email, or SMS – assuming that none of the back-end systems of your network provider use APIs to deliver their service. Global communication as we know it is gone. Without APIs, any and all services run from remote or cloud-based servers cease to function.

Say goodbye to Youtube, Netflix, FreeSat, Sky+, or Tivo; you’ll have to rely on video entertainment services delivered by cable. Online bookings won’t work; everything from the cinema to flight and rail travel will only be bookable via interaction with a human being.

![image](https://user-images.githubusercontent.com/86013814/174203716-88a390dd-6f7c-46ee-92a0-c9fba8fecdd5.png)

### Is an API just another program or a standard?

An API is both a piece of software running on a networked server and a component of programming code.

APIs are standards for application data interchange, just as protocols are standards for network data interchange. Without them, software developers would have a much harder time writing code to get information from platforms or apps they want to access.

### Do you know any API? Can you list at least 5 examples of APIs?

- Streaming services like Spotify and Netflix use APIs to distribute content.
- Financial institutions like banks use private APIs to track and manage checking accounts, credit cards, and more.
- Twitter Bots
- Pay with PayPal
- Weather Snippets

## From JSON to REST

### What is HTTP?

HTTP stands for Hyper Text Transfer Protocol

WWW is about communication between web clients and servers

Communication between client computers and web servers is done by sending HTTP Requests and receiving HTTP Responses

### What is JSON?
Is JSON the same as a plain Javascript object?

JSON stands for JavaScript Object Notation

JSON is a lightweight format for storing and transporting data

JSON is often used when data is sent from a server to a web page

JSON is "self-describing" and easy to understand

The JSON format is syntactically similar to the code for creating JavaScript objects. Because of this, a JavaScript program can easily convert JSON data into JavaScript objects. Since the format is text only, JSON data can easily be sent between computers, and used by any programming language.

### What is REST?
Is REST a programming language, framework, technology, or architecture pattern?

![image](https://user-images.githubusercontent.com/86013814/174204378-bccad58c-1667-4d20-aa0a-a050b81b0dff.png)

REST, or REpresentational State Transfer, is an architectural style for providing standards between computer systems on the web, making it easier for systems to communicate with each other. REST-compliant systems, often called RESTful systems, are characterized by how they are stateless and separate the concerns of client and server. We will go into what these terms mean and why they are beneficial characteristics for services on the Web.

### What is a Resource in REST?
What is a resource identifier?

A resource in REST is a similar Object in Object Oriented Programming or is like an Entity in a Database. Once a resource is identified then its representation is to be decided using a standard format so that the server can send the resource in the above said format and client can understand the same format.

Resource identification is the most flexible aspect of designing a REST based system. There is no exact science to identifying resources and there is no right or wrong with resources identified. We can identify resources from domain nouns. A resource could be a document, a video, a business process or even a device.

### What is an HTTP method?
What HTTP methods does REST use within its architecture rules?
Why do we use HTTP methods in REST and how do they relate to resources?

The Hypertext Transfer Protocol (HTTP) is designed to enable communications between clients and servers.

HTTP works as a request-response protocol between a client and server.

Example: A client (browser) sends an HTTP request to the server; then the server returns a response to the client. The response contains status information about the request and may also contain the requested content.

***HTTP Methods:***
- GET
- POST
- PUT
- HEAD
- DELETE
- PATCH
- OPTIONS
- CONNECT
- TRACE

The two most common HTTP methods are: GET and POST.

### Is REST the same as HTTP?

While many people continue to use the terms REST and HTTP interchangeably, the truth is that they are different things. REST refers to a set of attributes of a particular architectural style, while HTTP is a well-defined protocol that happens to exhibit many features of a RESTful system.

## REST API Clients

### Postman only works with REST APIs?

REST, SOAP, and GraphQL

### Is there an alternative to Postman?

Swagger UI, Insomnia REST Client, Paw, Apigee, and cURL are the most popular alternatives and competitors to Postman.
