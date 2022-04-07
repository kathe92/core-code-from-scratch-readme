# Week 1 - Wednesday

## Your date of birth in the matrix?

My real birthdate: 17-07-1992

My birthdate in binary is:

``` 
17   =  00000010001
7    =  00000000111
1992 =  11111001000
```

Solution:

![IMG_20220406_181349](https://user-images.githubusercontent.com/86013814/162095648-d9edc0e4-2239-42fa-aac9-365f96729ed5.jpg)


## MIPS

### Create a program that adds any two given numbers provided by the user

```ruby 
 .data
      	      number1: .asciiz "\nAdd the first number: "
	      number2: .asciiz "\nAdd the second number: "
	      result_message: .asciiz "\nThe result is: "
 .text
	      main:
              li $v0, 4
              la $a0, number1
              syscall
              
              li $v0, 5
              syscall

              move $t0, $v0
              
              li $v0, 4
              la $a0, number2
              syscall

              li $v0, 5
              syscall

              move $t1, $v0
              
              add $t2, $t0, $t1

              li $v0, 4
              la $a0 result_message
              syscall

              li $v0, 1
              move $a0, $t2
              syscall
``` 

### Create a program that displays your name

``` ruby
  .data
        myname: .asciiz "\nHello, my name is Katherine!\n"
  .text
        main:
              li $v0, 4
              la $a0, myname
              syscall
``` 
