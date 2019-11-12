function TaskModel(details, status) {
    this.details = details;
    this.status = status;
}

TaskModel.prototype.setDetails = function (details) {
    this.details = details;
};

TaskModel.prototype.isValidTask = function () {
    return this.details.length <= 240 ? true : false;
};

module.exports = TaskModel;