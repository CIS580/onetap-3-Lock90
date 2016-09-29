module.exports = exports = EntityManager;

fucnion EntityManager(width, height, cellsize)
{
this.width = width;
this.height = height;
this.widthInCells = Math.ceil(width/cellsize);
this.numberOfCells = this.widthInCells * Math.ceil(height/cellsize);
this.cells = []
for(var i = 0; i <this.numberOfCells; i++)
{
	this.cells[i] = [];
	
}
}

EntityManager.prototype.addEntity = function(entity){
	var left = Math.floor(entity.x / this.cellsize);
	var right = Math.ceil((entity.x + entity.width) / this.cellsize);
	var top = Math.floor(entity.y / this.cellsize);
	var bottom = Math.ceil((entity.y + entity.height) / this.cellsize);
}