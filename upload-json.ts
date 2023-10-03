
const mongoose = require('mongoose');
const fs = require('fs');

require('dotenv').config();
const databaseUrl = process.env.MONGODB_URL;


mongoose.connect(databaseUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB bağlantı başarılı!');
    const projectSchema = new mongoose.Schema({
      id: Number,
      name: String,
      imageUrl: String,
      lang: [],
      website: String,
      githubLink: String,
      description: String,
    });
    const Project = mongoose.model('Project', projectSchema);

    const projectsJsonData = fs.readFileSync('./src/lib/json/projects.data.json', 'utf8');
    const data = JSON.parse(projectsJsonData);

    data.forEach((project:any) => {
      const newProject = new Project({
        id: project.id,
        imageUrl: project.imageUrl,
        name: project.name,
        lang: project.lang,
        website: project.website,
        githubLink: project.githubLink,
        description: project.description,
      });

      newProject.save()
        .then(() => {
          console.log("Proje Sisteme kaydedildi");
        }).catch((error:Error) => {
          console.error('Proje kaydedilemedi', error);
        });
    });

  })
  .catch((error:Error) => {
    console.error('MongoDB\'ye bağlantı hatası:', error);
  });
