# Currency Converter Exercise

## Overview

This repository contains three different implementations of a currency converter that converts between GBP and USD. Each approach demonstrates different programming patterns and design principles.

## The Three Approaches

1. **Simple/Monolithic** (`1-two-unit-conv-simple.js`)
   - Single function with if/else statements
   - All logic in one place

2. **Helper Functions** (`2-two-unit-conv-helper.js`)
   - Separated validation and conversion logic
   - Uses helper functions for organization

3. **Map-Based/Data-Driven** (`3-two-unit-conv-map.js`)
   - Uses a conversion map object
   - Declarative and scalable approach

## Your Task

**Work in pairs or groups of three.**

1. Review all three implementations and understand how each works
2. Choose ONE approach (or work on all three if time permits)
3. Add support for a third currency: **EUR (Euro)**
   - Use these exchange rates:
     - GBP → EUR: multiply by 1.15
     - USD → EUR: divide by 1.17
     - EUR → GBP: divide by 1.15
     - EUR → USD: multiply by 1.17

## Discussion Questions

When you return, be prepared to discuss:

1. **Extensibility**: Which version was easiest to extend with the new currency? Why?

2. **Readability**: Which version is clearest to understand and maintain?

3. **Testing**: Which version would be easiest to write unit tests for?

4. **Scalability**: If you needed to add 10 more currencies, which approach would you prefer?

5. **Single Responsibility Principle**: Which version best separates concerns?

6. **Trade-offs**: What are the advantages and disadvantages of each approach?

## Running the Code

```bash
node 1-two-unit-conv-simple.js
node 2-two-unit-conv-helper.js
node 3-two-unit-conv-map.js
```
