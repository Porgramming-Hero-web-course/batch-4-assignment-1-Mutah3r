# The significance of union and intersection types in Typescript.

![](https://www.orientsoftware.com/Themes/Content/Images/blog/2023-11-13/typescript-introduction.jpg)

> Learning TypeScript is just JavaScript with 10% more stress and 90% less regret

## Introduction

TypeScript is an effective tool that introduces types to JavaScript. Union types and intersection types are two of its most practical characteristics. These enable programmers to specify more exact yet adaptable type structures.Today we will explore these types with real-life examples.

## The Union Type

A union type in TypeScript allows a variable to be one of several types. It is defined using the | symbol (pipe), which means "or." Let's say you have a form that has the option to charge payment using PayPal or SSLCOMMERZ. These payment methods can be handled by defining a union type.

```TypeScript
type SSLCommerzePayment = {
  type: "sslcommerze";
  transactionId: string;
};

type PayPalPayment = {
  type: "paypal";
  email: string;
};

type Payment = SSLCommerzePayment | PayPalPayment;
```

By using this union type, you can make sure the form accepts both kinds of payment methods correctly.

## The Intersection Type

An intersection type in TypeScript combines multiple types into a single type. It is defined using the & symbol (ampersand), which means "and." Imagine a situation in which employees in a company are also granted administrative privileges. The admin-specific properties and the general employee properties can be combined using an intersection type. In this case, the employee properties and the admin properties can be combined using an intersection type.

```TypeScript
type Employee = {
  name: string;
  department: string;
};

type Admin = {
  adminAccess: boolean;
  level: number;
};

type AdminEmployee = Employee & Admin;
```

This type guarantees that AdminEmployee objects includes all the attributes of both Employee and Admin.

## Conclusion

TypeScript's union and intersection types make managing complicated situations easier. You may manage many possibilities with union types, like in the payment example, and combine properties with intersection types, like AdminEmployee. These types make it easier to manage and validate data efficiently.

> With TypeScript, you don't just write code, you write resilient code
