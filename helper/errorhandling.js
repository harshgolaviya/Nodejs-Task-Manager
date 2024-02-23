function errorhandler(err,req,res,next)
{
  if(err.name ===   "UnauthorizedError")
  {
      return res.status(404).json({ message: "The user is not authorized" });
  }
  if(err.name == "ValidationError")
  {
    return res.status(404).send("validation error");
  }
  return res.status(500).json(err)
}
module.exports =errorhandler