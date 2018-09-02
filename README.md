![Vuetronex](https://raw.githubusercontent.com/vuetronex/core/master/logo.png "Vuetronex")

# Vuetronex

Build beatiful Electron application with Vue JS, Vue Router, Knex JS, Bookshelf JS & Tailwind CSS. Run database queries right from the Vue Application.

## Getting Started

You need to have `git`, `node` & `npm` installed in your machine.

[**Use Vuetronex CLI**](https://github.com/vuetronex/cli)

## Installation

```bash
$ npm i -g @vuetronex/cli
$ vex new my-project
$ cd my-project
$ npm install

# One terminal
$ npm run watch
# Other terminal
$ npm start
```

## Usage

Basically it is just a Vue application. With some Electron and Database built into it. There are a lot of functionality built in with this application.

The main focus is to develop seamlessly with electon and have all the electron APIs in the Vue instance.

## Prototypes

Inside Vue you can find all the electron prototyping. So that you can access the Electron APIs seamlessly. Also there are other bindings that will leverage the workflow.

Example:

```js
this.$electron.ipcRenderer
// It is the ipcRenderer

this.$db.User
// It is the refrence to the User Model.

this.$http
// It is the axios
```

## Vex

There is a command line utility offered with this application `vex`

Run: `vex --help` to get all the command offered with this package.

Read more about `vex` in the [official documentation](https://github.com/vuetronex/cli).

## Testing

Not done yet. Plans for future.

## Contributing

Please feel free to contribute to this project to better improve this as a community. And also feel free to suggest any features.

## Security

If you discover any security related issues, please email mailtokmahmed@gmail.com instead of using the issue tracker.

## Credits

- [Kazi Mainuddin Ahmed](https://github.com/tzsk)
- [All Contributors](../../contributors)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.