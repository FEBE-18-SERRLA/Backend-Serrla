// CREATE
const { ___ } = req.body;
const { id } = req.params;
const lorems = await Lorem.create({ _____ });

res.status(200).json({
  code: 200,
  status: "Success Add A Lorem",
  data: lorems,
});

// UPDATE
const {} = req.body;
const { id } = req.params;

await Lorem.update(
  { _______ },
  {
    where: {
      id,
    },
  }
);

const lorems = await Lorem.findByPk(id);

res.status(200).json({
  code: 200,
  status: "Success Update A Lorem",
  data: lorems,
});

// DELETE
const { id } = req.params;

await Lorem.destroy({
  where: {
    id,
  },
});

res.status(200).json({
  code: 200,
  status: "Success Delete A Lorem",
});
