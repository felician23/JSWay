// The JS Way 

// Musketeers



// Write a program that:

// 1. Creates an array named musketeers containing values "Athos", "Porthos" and "Aramis".

        let musketeers = ["Athos", "Porthos", "Aramis"]


// 2. Shows each array element using a for loop.

                for(let i = 0; i < musketeers.length; i++) {
                        console.log(musketeers[i])
                    }

// 3. Adds the "D'Artagnan" value to the array.
            
            musketeers.push("D'Artagnan")
            console.log(musketeers[3]);


// 4. Shows each array element using the forEach() method.

            musketeers.forEach(greek => {
                console.log(greek);
            });


// 5. Remove poor Aramis.

         musketeers.splice(2,1);   

// 6.Shows each array element using a for-of loop.

        for(const greek of musketeers) {
            console.log(greek);
        }

