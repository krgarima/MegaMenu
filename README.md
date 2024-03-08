# MegaMenu

Link to the app - https://menu-v.netlify.app/

## How to run the app

1. Clone the repo
2. To intall node_modules `npm i`
3. To run the app `npm run dev`

### To add more menu items

File - menu.json [src\components\Navbar\data\menu.json]

The menu data is structured as an array of menu items. Each menu item represents a navigation item in the application's menu bar. Menu items can have categories, which further organize the content, and each category may contain subcategories.

### Menu Item Properties

1. **id**: _(number)_ - Unique identifier for the menu item.
2. **name**: _(string)_ - The display name of the menu item.
3. **url**: _(string)_ - The URL associated with the menu item.
4. **categories**: _(array)_ - Optional. An array containing category objects, if applicable.

### Category Properties

1. **id**: _(number)_ - Unique identifier for the category.
2. **name**: _(string)_ - Optional. The display name of the category (used as heading).
3. **url**: _(string)_ - The URL associated with the category.
4. **subcategories**: _(array)_ - An array containing subcategory objects, if applicable.

### Subcategory Properties

1. **id**: _(number)_ - Unique identifier for the subcategory.
2. **name**: _(string)_ - The display name of the subcategory.
3. **url**: _(string)_ - The URL associated with the subcategory.

### Example

```json
[
  {
    "id": 1,
    "name": "Home",
    "url": "/",
    "categories": [
      {
        "id": 11,
        "name": "Main Categories",
        "url": "/main-categories",
        "subcategories": [
          {
            "id": 111,
            "name": "All",
            "url": "/all"
          }
          // Other subcategories...
        ]
      }
    ]
  }
  // Other menu items...
]
```

### Usage

- Each menu item corresponds to a navigation link in the menu bar.
- Categories can be used to further organize content within menu items, and subcategories can be nested within categories.


<img width="959" alt="home" src="https://github.com/krgarima/MegaMenu/assets/90110521/872ed250-7975-49b1-be7e-99966c946b48">
<img width="770" alt="mob" src="https://github.com/krgarima/MegaMenu/assets/90110521/7927e3ce-b70d-4b4b-881b-63d61344dcc7">

