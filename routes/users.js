import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

let users = [
]

router.get('/',(req,res) => {

    res.send(users);
});

router.post('/', (req, res) => {

    const user = req.body;

    users.push({ ...user, id: uuidv4() });


    res.send(`the hospital ${user.hospital} added to the database`);
});

router.get('/:id',(req,res) => {
    const { id } = req.params;

   const foundUser = users.find((user) => user.id === id);

    res.send(foundUser);

});

router.delete('/:id', (req,res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id !== id);

    res.send(`hospital with the  ${id} deleted from the database`);

});

router.patch('/:id', (req,res) => {
    const { id } = req.params;
    const { hospital, patients, location } = req.body;
    const user = users.find((user) => user.id === id);
    if(hospital) {
        user.hospital = hospital;

    }
    if(patients) {
        user.patients = patients;

    }
    if(location) {
        user.location = location;

    }
    res.send(`hospital with the id ${id} has been updated`);
  

})



export default router;