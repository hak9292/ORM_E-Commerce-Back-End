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
  // console.log(req.body);
  // find one category by its `id` value
  Category.findOne(
    {
    where: {
      id: req.params.id
    },
    // be sure to include its associated Products
    include: [Product]
  })
  .then((category) => res.json(category));
});

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body)
  .then((category) => res.json(`Created Category ${req.body}`))
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  .then((category) => res.json(`Updated Category ${req.params.id} to Category ${category}`));
});
// 
router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
  .then((category) => res.json(`Deleted Category ${req.params.id}`));
});

module.exports = router;
