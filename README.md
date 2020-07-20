# parking-lot

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Problem Statement
I own a multi-storey parking lot that can hold up to 'n' cars at any given point
in time. Each slot is given a number starting at 1 increasing with increasing
distance from the entry point in steps of one. I want to create an automated
ticketing system that allows my customers to use my parking lot without human
intervention.
When a car enters my parking lot, I want to have a ticket issued to the driver.
The ticket issuing process includes us documenting the registration number
(number plate) and the colour of the car and allocating an available parking
slot to the car before actually handing over a ticket to the driver (we assume
that our customers are nice enough to always park in the slots allocated to
them). The customer should be allocated a parking slot which is nearest to the
entry. At the exit the customer returns the ticket which then marks the slot
they were using as being available.
We interact with the system via a webapp written in JS.
This WebApp should let me:
- Create the Parking Lot based on the number of parking spaces available taken
as N in an input field. e.g. 100 Parking spaces => N = 100
- Generate initial number of car details.
e.g. Takes input m = no. of cars currently in the parking lot
and generates the car Registration numbers and color randomly but with the
following format:
e.g.  KA-01-HH-1234 White or KA-04-TY-3469 Blue
Please follow the above Registration number format and use 4 colors (Black,
White, Blue, Red)
Also alots them slots (ranging from 1-N)
- Shows the list of cars along with their details in a Table.
e.g. Registration No. | Color | Slot No.
- Allows me to select a car from the table and remove it from parking the slot
making that slot no. available for the next car to enter the parking the slot.
e.g. This could be done using a button adjacent to the Car row in the Table.
- Allows me to enter the car details of the incoming car manually but in the
format mentioned above and the system automatically alots them the nearest empty
slot. (nearest being slot 1 in slots 1-N)
e.g. if slots 4 and 19 are available, the system alots the car slot 4.
- Due to government regulation, the system should provide me with the ability to
find out:
a) Registration numbers of all cars of a particular colour.
b) Slot number in which a car with a given registration number is parked.
c) Slot numbers of all slots where a car of a particular colour is parked.
