# Object Oriented Programming Principles

## The Benefits of OOP
There are many benefits to using the OOP paradigm.

OOP helps developers to mimic the relationship between objects in the real world. It helps you to reason about relationships between things in your software, just like you would in the real world. Thus, OOP is an effective approach to come up with solutions in the code you write. OOP also:
- Allows ypu to write modular code
- Makes your code more flexible
- Makes your code reusable

## The Principles of OOP
The 4 fundamental OOP principles are:
- Inheritance
- Encapsulation
- Abstraction
- Polymorphism

Objects exist in a hierarchical structure. Meaning that the original base or super class for everything is the Object class, all objects derive from this class. This allows us to utilize the Object.create() method to create or instantiate objects of our classes.

```
class Animal { /* ...class code here... */ }

var myDog = Object.create(Animal)

console.log(Animal)
```

A more common method of creating objects from classes is to use the new keyword. When using a default or empty constructor method, JS implicitly calls the Object superclass to create the instance.

```
class Animal { /* ...class code here... */ }

var myDog = new Animal()

console.log(Animal)
```

## OOP Principles: Inheritance

Inheritance is one of the principles of OOP.

In essence, it works like this:

1. There is a base class of a "thing".
2. There is one or more sub-classes of "things" that inherit the properties of the base class (sometimes also referred to as the "super-class")
3. There might be some other sub-sub-classes of "things" that inherit from those classes in Point 2.

Note that each sub-class inherits from its super-class. In turn, a sub-class might also be a super-class, if there are classes inheriting from that sub-class.

Example:

1. There is a base class of "Animal"
2. There is another class, a sub-class inheriting from "Animal", and the name of this class is "Bird"
3. Next, there is another class, inheriting from "Bird, and this class is "Eagle".

In the above example, objects from the real world are modelled by constructing relationships between Animal, Bird and Eagle. Each of them are separate classes, meaning each of them are separate blueprints for specific object instances that can be constructed as needed.

To set up the inheritance relation between classes in JS, you can use the "extends" keyword, as in "class B extends A"

Here's an example of an inheritance in JS

```
class Animal { /* ...class code here */ }
class Bird extends Animal { /* ...class code here */ }
class Eagle extends Bird { /* ...class code here */ }
```

OOP Principles: Encapsulation

Encapsulation has to do with making a code implementation "hidden" from other users, in the sense that they do not have to know how my code works in order to "consume" the code.

For example, when I run the following code:
```
"abc".toUpperCase();
```

I don't really need to worry thinking about how the toUpperCase() method works. All I want is to use it, since I know it's available to me. Even if the underlying syntax - that is , the implementation of the toUpperCase() method changes - as long as it doesn't break my code, I don't have to worry about what it does in the background, or even how it does it.

## OOP Principles: Abstraction

Abstractions is about writing code in a way that will make it more generalized.

The concepts of encapsulation and abstraction are often misunderstood because their differences can feel blurry.

It helps to think of it in the following terms:

- An abstraction is about extracting the concept of what you're trying to do, rather than dealing with a specific manifestation of that concept.
- Encapsulation is about you not having access to, or not being concerned with, how some implementation works internally.

While both the encapsulation and abstraction are important concepts in OOP, it requires more experience with programming in general to really delve into this topic.

## OOP Principles: Polymorphism

Polymorphism is a word derived from the Greek language "multiple forms". An alternative translation might be: "something that can take on many shapes".

To understand what polymorphism is about, we can consider some real-life objects.

- A door has a bell. It could be said that the bell is a property of the door object. This bell can be rung. When would someone ring a bell on the door? Obviously, to get someone to show up at the door.
- Now consider a bell on a bicycle. A bicycle has a bell. It could be said that the bell is a property of the bicycle object. This bell could also be rung. However, the reason, the intention, and the result of somebody ringing the bell on aa bicycle is not the same as ringing the bell on a door.

The above concepts can be coded in JS as follows:

```
const bicycle = {
    bell: function() {
        return "Ring, ring! Watch out, please!"
    }
}

const door = {
    bell: function() {
        return "Ring, ring! Come here please!"
    }
}
```

So I can access the bell() method on the bicycle object, using the following syntax:
```
bicycle.bell(); // "Get away, please"
```

I can also access the bell() method on the door, using the syntax:

door.bell(); // "Come here, please"

At this point, one can conclude that the exact same name of the method can have the exact opposite intent, based on what object it is used for.

Now to make this code truly polymorphic, you can add another function declaration:
```
function ringTheBell(thing) {
    console.log(thing.bell())
}
```

Declare the ringBell() function. It accepts a "thing" parameter - which is expected to be an object, namely, either the bicycle object or the door object.

So now, if you call the ringTheBell() function and pass it the bicycle as its single argument, here's the output:

```
ringTheBell(bicycle); // Ring, ring! Watch out, please!
```

However, if you invoke the ringTheBell() function and pass it the door object, you get the following output:

```
ringTheBell(door); // "Ring, ring! Come here, please!"
```

Here's another example, the concatenation operator, used by calling the built-in concat() method.

If you use the concat() method on two strings, it behaves exactly the same as if I used the + operator.

```
"abc".concat("def"); // 'abcdef'
```

You can also use the concat() method on two arrays. Here's the result:

```
["abc"].concat(["def"]); // ['abc', 'def']
```

Consider using the + operator on 2 arrays with one member each:

```
["abc"].concat(["def"]); // ['abc', 'def']
```

Consider using the + operator on 2 arrays with one member each:

```
["abc"] + ["def"]; // ["abcdef"]
```

This means that the concat() method is exhibiting polymorphic behavior since it behaves different;y based on the context - in this case, based on what data types I give it.

Polymorphism is useful because it allows developers to build objects that can have the exact same functionality, namely, functions with the exact same name, which behave exactly the same. However, at the same time, you can override some parts of the shared functionality or even the complete functionality, in some other parts of the OOP structure.

Here is an example of polymorphism using classes in JavaScript

```
class Bird {
    useWings() {
        console.log("Flying!")
    }
}

class Eagle extends Bird {
    useWings() {
        super.useWings()
        console.log("Barely flapping!")
    }
}

class Penguin extends Bird {
    useWings() {
        console.log("Diving!")
    }
}
var baldEagle = new Eagle();
var kingPenguin = newPenguin();
baldEagle.useWings(); // "Flying! Barely flapping!"
kingPenguin.useWings(); // "Diving!"
```

The Penguin and Eagle sub-classes both inherit from the Bird super-class. The Eagle sub-class inherits the useWings() method from the Bird class, but extends it with an additional console.log. The Penguin sub-class doesn't inherit the useWings() class - instead, it has its own implementation, although the Penguin class itself does not extend the Bird class.