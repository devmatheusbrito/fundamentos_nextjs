export default function cliente(req,res,next) {

  if(req.method === 'GET'){
    handleGet(req, res)
  }else{
    res.status(405).send()
  }

}

function handleGet(req, res){
  res.status(200).json({
    id:1,
    nome:'Matheus',
    email:'matheusrj.dev@gmail.com'
  })
}