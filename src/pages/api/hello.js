import {NextApiRequest, NextApiResponse} from 'next';

const helloHandler = (req, res)=>{
  res.status(400).send({num: 'free'});
  console.log(req.query)
}

export default helloHandler;