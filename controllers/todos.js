const Todos = require("../models/todos");
const axios = require("axios");

module.exports = {
  findAll: async (req, res) => {
    try {
      const todos = await Todos.find();

      res.status(200).send({
        message: "Find all todos success",
        data: todos
      });
    } catch (error) {
      res.status(500).json({
        message: "Find all todos error"
      });
    }
  },

  // findAll: (req, res) => {
  //   Todos.find()
  //     .then(todos => {
  //       res.status(200).json({
  //         message: "Find all todos success",
  //         data: todos
  //       });
  //     })
  //     .catch(error => {
  //       res.status(500).json({
  //         message: "Find all todos error"
  //       });
  //     });
  // },

  // create: (req, res) => {
  //   Todos.create({
  //     todo: req.body.todo,
  //     done: req.body.done
  //   })
  //     .then(todo => {
  //       res.status(201).json({
  //         message: "create success",
  //         data: todos
  //       });
  //     })
  //     .catch(error => {
  //       res.status(500).json({
  //         message: "create error"
  //       });
  //     });
  // },

  create: async (req, res) => {
    try {
      const todo = await Todos.create({
        text: req.body.text,
        done: false
      });

      res.status(201).json({
        message: "create success",
        data: todo
      });
    } catch (error) {
      res.status(500).json({
        message: "create error",
        error: error
      });
    }
  },

  update: (req, res) => {
    Todos.update(
      {
        id: req.params.id
      },
      {
        $set: {
          todo: req.body.todo,
          done: req.body.done
        }
      }
    )
      .then(todo => {
        res.status(201).json({
          message: "update success",
          data: todo
        });
      })
      .catch(error => {
        res.status(500).json({
          message: "update Error"
        });
      });
  },

  delete: (req, res) => {
    Todos.deleteOne({
      id: req.params.id
    })
      .then(todo => {
        res.status(201).json({
          message: "delete succes",
          data: todo
        });
      })
      .cacth(error => {
        res.status(500).json({
          message: "Delete success"
        });
      });
  }
};
