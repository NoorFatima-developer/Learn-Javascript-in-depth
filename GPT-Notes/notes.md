## IMPORTANT BATAIN ##

1---Element Node & Text Node ---

Element Node: Aapka HTML tag (e.g., <li>, <p>, <div>)
Text Node: Aapka text content (e.g., "Buy Milk")

(a)---Element Node & Text Node  Create Syntax:---

const li = document.createElement("li");                        // Creating an element node (li)
const textNode = document.createTextNode("Buy Milk");           // Creating a text node ("Buy Milk")


2--- append and appendChild ---
append parent ki trhan behave krta hai..(ismai element and text nodes dono inclue hai)
appendChild child ki trhan behave krta hai...(ismai element nodes hoti hain lkin text nodes nahi hoti...)

(a)---Example append and appendChild ---

    append:(parent element)     =>better for k text-node ho...yahan list h islye appendChild e  sahi rhyga...
                                =>lkin append sy text node or node element dono hoskty hain.. lkin appendChild sy bs element node..

    const li = document.createElement("li");
    li.append(inputfield);
    ul.append(li)

    appendChild:(child element)     => node elements like "li" wagaira klye best hai...

    const li = document.createElement("li");
    li.textContent = inputfield (ye wo field hai jahan sy value ari ha)
    ul.appendChild(li)


    
