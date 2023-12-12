const comfirmBtn = document.getElementById('confirmBtn');
const totalDisplay = document.getElementById('total')
const cartSubtotal = document.getElementById('cartSubtotal');
const menuDivs = document.querySelectorAll('.menu-div')
const receipt = document.getElementById('receipt')

let receiptArray = []

let subtotal = 0;
let tax = 0.07;


// Grab menu types
const menuType = [
    'appetizers',
    'entrees',
    'drinks',
    'desserts'
]

// Create menu items arr of objects
let menuItems = [
    {
        id: 1,
        type: 'appetizers',
        item: 'salmon dip',
        desc: 'fresh salmon spread and toast',
        imgUrl: 'salmon-dip.jpg',
        price: 10.99,
        qty: 0
    },
    {
        id: 2,
        type: 'appetizers',
        item: 'onion rings',
        desc: 'deep fried onion rings with comeback sauce',
        imgUrl: 'onion-ring.jpg',
        price: 8.99,
        qty: 0
    },
    {
        id: 3,
        type: 'appetizers',
        item: 'guacamole dip',
        desc: 'fresh guacamole and pico de gallo made to order and served with chips',
        imgUrl: 'guacamole-dip.jpg',
        price: 7.99,
        qty: 0
    },
    {
        id: 4,
        type: 'appetizers',
        item: 'spinach & artichoke dip',
        desc: 'creamy spinach and artichoke dip served with chips',
        imgUrl: 'spinach-dip.jpg',
        price: 8.99,
        qty: 0
    }, 
    {
        id: 5,
        type: 'entrees',
        item: 'chicken sandwich',
        desc: 'breaded chicken breast on a bun with pickles and lettuce',
        imgUrl: '',
        price: 12.99,
        qty: 0
    },
    {
        id: 6,
        type: 'entrees',
        item: 'waldorf salad',
        desc: 'bean veggie patty served with fries',
        imgUrl: '',
        price: 12.99,
        qty: 0
    },
    {
        id: 7,
        type: 'entrees',
        item: 'salmon',
        desc: 'atlantic salmon surved over grits with a side os spinach',
        imgUrl: '',
        price: 15.99,
        qty: 0
    },
    {
        id: 8,
        type: 'entrees',
        item: 'pizza',
        desc: 'pepperoni and tomato pizza. 6 slices',
        imgUrl: '',
        price: 16.99,
        qty: 0
    },
    {
        id: 9,
        type: 'drinks',
        item: 'lemonade',
        desc: 'fresh squezed lemons',
        imgUrl: '',
        price: 3.99,
        qtty: 0
    },
    {
        id: 10,
        type: 'desserts',
        item: 'lousiana crunch cake',
        desc: 'a cake from a land afar with aa big crunch',
        imgUrl: '',
        price: 4.99,
        qtty: 0
    },
    {
        id: 11,
        type: 'drinks',
        item: 'wine',
        desc: 'dealcoholized wine with a fresh taste',
        imgUrl: '',
        price: 6.99,
        qtty: 0
    },
    {
        id: 12,
        type: 'drinks',
        item: 'energy drink',
        desc: 'oh no its a monster',
        imgUrl: '',
        price: 3.99,
        qtty: 0
    },
    {
        id: 13,
        type: 'drinks',
        item: 'grapes juice',
        desc: 'freshly plucked right from the source',
        imgUrl: '',
        price: 7.99,
        qtty: 0
    },
    {
        id: 14,
        type: 'drinks',
        item: 'apple juice',
        desc: 'should keep the doctors away',
        imgUrl: '',
        price: 2.99,
        qtty: 0
    },
    {
        id: 15,
        type: 'desserts',
        item: 'jelly',
        desc: 'jell-o thats absoulty bouncy for no reason',
        imgUrl: '',
        price: 3.99,
        qtty: 0
    },
    {
        id: 16,
        type: 'entrees',
        item: 'grilled teriyaki chicken',
        desc: 'fresh nice robust scrumdiddlyumptious chicken',
        imgUrl: '',
        price: 6.99,
        qtty: 0
    }
]

confirmBtn.addEventListener('click', (e)=> {
    e.preventDefault()
    const subtotal = parseFloat(cartSubtotal.innerText)
    const tipAmt = parseFloat(document.getElementById('tipAmt').value)
    const otherAmt = parseFloat(document.getElementById('otherAmt').value)
    const yourTip = document.getElementById('yourTip')
    const taxDisplay = document.getElementById('tax')

    let taxTotal = subtotal * tax;

    let receiptTip = isNaN(tipAmt) ? otherAmt : (subtotal * tipAmt)

    let total = isNaN(tipAmt) ? subtotal + otherAmt + taxTotal : (subtotal * tipAmt) + subtotal + taxTotal


    theSubtotal.innerText = subtotal
    taxDisplay.innerText = taxTotal.toFixed(2)
    yourTip.innerText = receiptTip.toFixed(2)
    totalDisplay.innerText = total.toFixed(2)
})

// make receipt
const makeReceipt =(obj, el)=> {
    const listItem = document.createElement('li')
    listItem.classList.add('receipt-item', 'd-flex', 'justify-content-between')

    const receiptChoice = document.createElement('span')
    receiptChoice.classList.add('receipt-choice')
    receiptChoice.innerText = obj.item

    const receiptQty = document.createElement('span')
    receiptQty.classList.add('receipt-qty')
    receiptQty.setAttribute('id', `qty${obj.id}`)
    receiptQty.innerText = obj.qty
    
    const receiptPrice = document.createElement('span')
    receiptPrice.classList.add('receipt-price')
    receiptPrice.innerText = obj.price

    const itemSubtotal = document.createElement('span')
    itemSubtotal.classList.add('item-subtotal')
    itemSubtotal.setAttribute('id', `subTotal${obj.id}`)
    itemSubtotal.innerText = obj.itemTotal

    

    
    listItem.appendChild(receiptChoice)
    listItem.appendChild(receiptQty)
    listItem.appendChild(receiptPrice)
    listItem.appendChild(itemSubtotal)
    

    el.appendChild(listItem)

    console.log(listItem)

}

const updateReceipt =(obj, qty, itemTotal)=> {
    const receiptQty = document.getElementById(`qty${obj.id}`)
    console.log(receiptQty);
    
    receiptQty.innerText = qty

    const itemSubtotal = document.getElementById(`subTotal${obj.id}`)
    itemSubtotal.innerText = itemTotal.toFixed(2)

    console.log(receiptArray)
}

menuDivs.forEach(div => {
    const menuSubheading = document.createElement('h3')
    menuSubheading.classList.add('menu-subheading', 'text-capitalize');

    const row = document.createElement('div')
    row.classList.add('row')
    
    div.appendChild(menuSubheading)
    div.appendChild(row)
})

for(let i = 0; i < menuType.length; i++) {
    menuDivs[i].children[0].innerText = menuType[i]
    menuDivs[i].children[1].setAttribute("id", `${menuType[i]}Row`)
}


// load the menu items
// grab the appRow
const appRow = document.getElementById("appetizersRow")
const entreesRow = document.getElementById("entreesRow")
const drinksRow = document.getElementById("drinksRow")
const dessertsRow = document.getElementById("dessertsRow")


menuItems.forEach(item => {
    const column = document.createElement('div')
    column.classList.add("col-md-3")
    const card = document.createElement('div')
    card.classList.add("card", "h-100")
    card.innerHTML = `
    <img src="images/${item.imgUrl}" class="img-fluid menu-image card-img-top" alt="${item.desc}">
        <div class="card-body">
            <h4 class="card-title">${item.item}</h4>
            <p class="card-text">${item.desc}</p>
        </div>
        <footer class="card-footer">
        <p class"card-text item-price">${item.price}</p>
            <button class="btn btn-danger cart-btn" id="Btn${item.id}" data-id="${item.id}" data-price="${item.price}" data-qty="${item.qty}" data-item="${item.item}">add to cart</button>
        </footer>
    `

    column.appendChild(card);

    switch(item.type) {
        case 'appetizers':
            appRow.appendChild(column)
            break;
        case 'entrees':
            entreesRow.appendChild(column)
            break;
        case 'drinks':
            drinksRow.appendChild(column)
            break;
        case 'desserts':
            dessertsRow.appendChild(column)
            break;
        default:
            console.log('Error: menu type not listed')
            break;
    }
})

const cartButtons = document.querySelectorAll('.cart-btn');

// add items to cart
cartButtons.forEach(button => {

    const price = parseFloat(button.getAttribute('data-price'))
    let qty = parseFloat(button.getAttribute('data-qty'))
    const item = button.getAttribute('data-item')
    const id = parseFloat(button.getAttribute('data-id'))
    button.addEventListener('click', ()=> {
        qty+=1
        let itemObj = {
            id: id,
            item: item,
            qty: qty,
            price: price,
            itemTotal: qty * price
        }

        if (itemObj.qty == 1) {
            receiptArray = [...receiptArray, itemObj]
            makeReceipt(itemObj, receipt)

        } else {
            for (let i = 0; i < receiptArray.length; i++) {
                if (receiptArray[i].id == id) {
                    receiptArray[i].qty = itemObj.qty++
                    receiptArray[i].itemTotal = receiptArray[i].qty * price
                    updateReceipt( receiptArray[i], receiptArray[i].qty, receiptArray[i].itemTotal)
                }
            }
        }

        subtotal+=price
        cartSubtotal.innerText = subtotal.toFixed(2)
    })
})