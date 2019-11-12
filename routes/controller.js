module.exports = {
    init: (config, logger, mysql, ScriptTask) => {

        return {

            addTask: (req, res) => {

                ScriptTask.addTaskDb(mysql, req, function (err, data) {
                    if (err) {
                        res.json({ "Error": "Something went wrong" })
                    } else {
                        res.json(data);
                    }
                });
            },

            updateTask: (req, res) => {
                ScriptTask.updateTaskDb(mysql, req, function (err, data) {
                    if (err) {
                        res.json({ "Error": "Something went wrong" })
                    } else {
                        res.json(data);
                    }
                });
            },

            deleteTask: (req, res) => {
                ScriptTask.deleteTaskDb(mysql, req, function (err, data) {
                    if (err) {
                        res.json({ "Error": "Something went wrong" })
                    } else {
                        res.json(data);
                    }
                });
            },

            readSingleTask: (req, res) => {

                ScriptTask.getSingleTaskDb(mysql, req, function (err, data) {
                    if (err) {
                        res.json({ "Error": "Something went wrong" })
                    } else {
                        res.json(data);
                    }
                });

            },

            readTaskByStatus: (req, res) => {
                ScriptTask.getTaskByStatusDb(mysql, req, function (err, data) {
                    if (err) {
                        res.json({ "Error": "Something went wrong" })
                    } else {
                        res.json(data);
                    }
                });
            },


        }

    }


}