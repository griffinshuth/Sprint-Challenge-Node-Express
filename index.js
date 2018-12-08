const express = require('express');

const actionModel = require('./data/helpers/actionModel');
const projectModel = require('./data/helpers/projectModel');

const server = express();

const PORT = 4000;


server.get('/action', (req, res) => {
    actionModel.get()
    .then(action => {
        res.status(200).json(action)
    })
    .catch(err => {
        res.status(500).json({error: "cant get id" })
    });
    });


server.get('/project', (req, res) => {
    projectModel.get()
    .then(action => {
        res.status(200).json(action)
    })
    .catch(err => {
        res.status(500).json({error: "cant get id" })
    });
    });

    server.get('/action/:id', (req, res) => {
        const id = req.params.id;
        actionModel.get(id)
              .then (post => {
                res.status(200).json(post)
              })
              .catch(err => {
                  res.status(500).json({error: "Can't recieve the action with id."})
              });
    
    });
    
    
    server.post ('/action', (req, res) => {
        const {description, notes, project_id} = req.body;
        actionModel.insert({description, notes, project_id})
              .then (insert => {
                res.status(200).json(insert)
              })
              .catch(err => {
                  res.status(500).json({error: "Can't post it!"})
              });
    });
    
    
    server.put('/action/:id',(req, res) => {
        const id = req.params.id;
        const post = req.body;
        actionModel.update(id, post)
              .then (update => {
                res.json(update)
              })
              .catch(err => {
                  res.status(500).json({error: "Can't be modified."})
              });
    
    });
    
    
    server.delete('/action/:id', (req, res) => {
        const id = req.params.id;
    
        actionModel.remove(id)
              .then (remove => {
                res.status(200).json(remove)
              })
              .catch(err => {
                  res.status(500).json({error: "Can't remove the action."})
              });
    
    });
    
    server.get('/project/:id', (req, res) => {
        const id = req.params.id;
        projectModel.get(id)
              .then (post => {
                res.status(200).json(post)
              })
              .catch(err => {
                  res.status(500).json({error: "Can't recieve the project with id."})
              });
    
    });
    
    server.post ('/project', (req, res) => {
        const {name, description} = req.body;
        projectModel.insert({name, description})
              .then (post => {
                res.status(200).json(post)
              })
              .catch(err => {
                  res.status(500).json({error: "Can't post the project."})
              });
    
    
    });
    
    
    server.put('/project/:id', (req, res) => {
        const id = req.params.id;
        const changes = req.body;
        projectModel.update(id, changes)
              .then (update => {
                res.json(update)
              })
              .catch(err => {
                  res.status(500).json({error: "Can't be modified."})
              });
    
    });
    
    
    server.delete('/project/:id', (req, res) => {
        const id = req.params.id;
    
        projectModel.remove(id)
              .then (remove => {
                res.status(200).json(remove)
              })
              .catch(err => {
                  res.status(500).json({error: "Can't remove the project."})
              });
    
    });
    
    server.get('/project/action/:id', (req, res) => {
        const id = req.params.id;
        projectModel.getProjectActions(id)
              .then (post => {
                res.status(200).json(post)
              })
              .catch(err => {
                  res.status(500).json({error: "Can't recieve the project with id."})
              })
    
    });
    

server.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})