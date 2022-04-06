# Week 1 - Tuesday


## 1. Explanation about "Interpreted And Compiled Programming Languages"

**Compiled Programming Languages:**

A compiled language is a programming language that is converted into machine code so that the processor can execute it. The Compiler will scan the complete source code at once and then generate a binary file called executable code or object code (which is undecipherable by humans). The source code is directly translated into Machine code that the processor can execute. 

**Interpreted Programming Languages:**

An interpreter will run through the program line by line and execute each line on the fly. This includes source code, pre-compiled code, and scripts. 

Both compiler and interpreters do the same job which is converting higher level programming language to machine code. However, a compiler will convert the code into machine code (create an exe) before program run. Interpreters convert code into machine code when the program is run.

**Difference:**

The difference between an interpreted and a compiled language lies in the result of the process of interpreting or compiling. An interpreter produces a result from a program, while a compiler produces a program written in assembly language. 

In general, interpreted programs are slower than compiled programs, but are easier to debug and revise. Other examples of interpreted languages include JavaScript and Python.

![image](https://user-images.githubusercontent.com/86013814/161876539-d8f74db5-2c3f-4d20-b51b-efd18e626b74.png)


## 2. Is Java compiled or interpreted, or both?

Java can be considered both a compiled and an interpreted language because its source code is first compiled into a binary byte-code. This byte-code runs on the Java Virtual Machine (JVM), which is usually a software-based interpreter. The use of compiled byte-code allows the interpreter (the virtual machine) to be small and efficient (and nearly as fast as the CPU running native, compiled code). In addition, this byte-code gives Java its portability: it will run on any JVM that is correctly implemented, regardless of computer hardware or software configuration. Most Web browsers (such as Microsoft Internet Explorer or Netscape Communicator) contain a JVM to run Java applets.

In a nutshell, Java is compiled to bytecode, which then goes into the Java VM, which interprets it.

## 3. Pseudocode currency converter

Algorithm that will be used to convert dollars (USD) to bitcoin (BTC):

```START </br>
WRITE "ADD THE CURRENT BTC PRICE IN USD: "
READ BTC_AMOUNT
WRITE "ADD THE AMOUNT IN USD TO CONVERT TO BTC: "
READ AMOUNT_TO_CONVERT
USD_TO_BTC <-- BTC_AMOUNT * AMOUNT_TO_CONVERT 
PRINT USD_TO_BTC
END
