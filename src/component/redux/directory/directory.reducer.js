const INITIAL_STATE = {
    sections: [
        {
            title: 'bakery',
            imageUrl: 'https://i.ibb.co/N3WzMj9/bakery.png',
            id: 1,
            linkUrl: 'shop/bakery'
        },
        {
            title: 'dairy',
            imageUrl: 'https://i.ibb.co/QNQWgb0/dairy.jpg',
            id: 2,
            linkUrl: 'shop/dairy'
        },
        {
            title: 'meats',
            imageUrl: 'https://i.ibb.co/6ZvQMqS/meats.jpg',
            id: 3,
            linkUrl: 'shop/meats'
        },
        {
            title: 'fruits & vegetables',
            imageUrl: 'https://i.ibb.co/WzdPkgG/fruits.jpg',
            size: 'large',
            id: 4,
            linkUrl: 'shop/fruits'
        },
        {
            title: 'chocolates & nuts',
            imageUrl: 'https://i.ibb.co/zHDnLZN/nuts.jpg',
            size: 'large',
            id: 5,
            linkUrl: 'shop/nuts'
        }
    ]
}

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default directoryReducer