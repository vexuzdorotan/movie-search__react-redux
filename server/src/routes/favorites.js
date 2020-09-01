const express = require('express');
const router = express.Router();

const Favorite = require('../models/Favorite');

router
  .route('/')
  .post(async (req, res, next) => {
    // @desc    createMovies
    // @route   POST /favorites

    try {
      const favorite = new Favorite(req.body);
      await favorite.save();
      res.status(201).send(favorite);
    } catch (err) {
      res.status(500).send(err);
    }
  })
  .get(async (req, res, next) => {
    // @desc    readMovies
    // @route   GET /favorites

    try {
      const favorite = await Favorite.find({ userId: req.query.userId });
      res.status(200).send(favorite);
    } catch (err) {
      res.status(404).send(err);
    }
  });

router
  .route('/:id')
  .get(async (req, res, next) => {
    // @desc    readMovie
    // @route   GET /favorites/:id

    try {
      const favorite = await Favorite.findById(req.params.id);
      res.status(200).send(favorite);
    } catch (err) {
      res.status(404).send(err);
    }
  })
  .patch(async (req, res, next) => {
    // @desc    updateMovie
    // @route   PATCH /favorites/:id

    const requiredKeys = ['reaction'];
    const isMatchedKeys = Object.keys(req.body).every((key) =>
      requiredKeys.includes(key)
    );

    if (!isMatchedKeys)
      return res.status(400).send({ error: 'Unknown Query Keys.' });

    try {
      const favorite = await Favorite.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );

      res.status(200).send(favorite);
    } catch (err) {
      res.status(404).send(err);
    }
  })
  .delete(async (req, res, next) => {
    // @desc    deleteMovie
    // @route   DELETE /favorites/:id

    try {
      const favorite = await Favorite.findByIdAndRemove(req.params.id);

      if (!favorite) throw new Error({ error: 'Movie not found.' });

      res.status(200).send(favorite);
    } catch (err) {
      res.status(404).send(err);
    }
  });

module.exports = router;
