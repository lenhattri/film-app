function modelToObjects(models){
    return models.map(model => model.toObject());
}

module.exports = modelToObjects;