const User = require("../models/users");

module.exports = {
  index: async (req, res) => {
    try {
      const users = await User.find();
      if (users.length > 0) {
        res.status(200).json({
          status: true,
          data: users,
          method: req.method,
          url: req.url,
        });
      } else {
        res.status(200).json({
          status: false,
          message: "Data masih kosong",
        });
      }
    } catch (error) {
      res.status(400).json({ sucess: false });
    }
  },
  show: async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      res.status(200).json({
        status: true,
        data: user,
        method: req.method,
        url: req.url,
        message: "Data berhasil didapat",
      });
    } catch (error) {
      res.status(400).json({ sucess: false, message: error });
    }
  },
  store: async (req, res) => {
    try {
      const user = await User.create(req.body);
      res.status(201).json({
        status: true,
        data: user,
        method: req.method,
        url: req.url,
        message: "Data berhasill ditambahkan",
      });
    } catch (error) {
      res.status(400).json({ sucess: false, message: error });
    }
    // users.push(req.body);
  },
  update: async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });
      res.status(200).json({
        status: true,
        data: user,
        method: req.method,
        url: req.url,
        message: "Data berhasill diubah",
      });
    } catch (error) {
      res.status(400).json({ sucess: false, message: error });
    }
  },
  delete: async (req, res) => {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      res.status(200).json({
        status: true,
        data: user,
        method: req.method,
        url: req.url,
        message: "Data berhasill dihapus",
      });
    } catch (error) {
      res.status(400).json({ sucess: false, message: error });
    }
  },
};
