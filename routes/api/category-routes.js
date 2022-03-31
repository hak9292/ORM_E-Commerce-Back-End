const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  Category.findAll({
    // be sure to include its associated Products
    include: [Product]
  })
    .then((category) => res.json(category))
});

router.get('/:id', (req, res) => {
  console.log(req.body);
  // find one category by its `id` value
  Category.fineOne({
    where: {
      id: req.body.id,
    },
    // be sure to include its associated Products
    include: [Product]
  })
  .then((category) => res.json(category))

});

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body)
  .then((category) => res.json(category))
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(
    {
      
    }
  )
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
