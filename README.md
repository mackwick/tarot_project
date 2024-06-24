# Unnamed Tarot Project

### Description: An API containing all 78 tarot cards, with keywords for upright and reversed positions. As the dev, I will have CRUD capabilities. Users will be able to look up or pull random cards from the API. (I may add functionality for other devs to use the API and/or for users to create accounts.)

**Will be Deployed on Render**

### Trello Board: [Tarot Project | Trello](https://trello.com/b/ixUv6oL7/tarot-project)

## List of Dependencies

- dotenv
- express
- mongoose
- morgan
- cors

## Card Model

{
name: { type: String, required: true },
number: {type: Number, rquired: true},
upright: { type: Boolean, required: true },
keywords: {type: String, required: true}
}

## Route Map

| Route Name | Endpoint | Method | Description                          |
| ---------- | -------- | ------ | ------------------------------------ |
| Index      | /        | GET    | Displays all cards as JSON           |
| Destroy    | /id      | DELETE | Delete a card                        |
| Update     | /id      | PUT    | Update a card bookmark               |
| Create     | /        | POST   | Add a card to the database           |
| Seed       | /        | POST   | Add a bunch of cards to the database |
