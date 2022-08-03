export default function handler(req, res){

  const codigo = req.query.codigo

  res.status(200).json({
    id: codigo,
    nome:`Matheus`,
    idade:`24`,
    email:'matheusrj.dev@gmail.com'
  })
}