module.exports = {

    addTaskDb: (mysql, req, callback) => {

        console.log(req.body);

        let details = req.body.details;
        let status = req.body.status;

        if (!details) {
            return callback(null, { status: 500, message: 'Details required' });
        }

        if (!status) {
            return callback(null, { status: 500, message: 'Status required' });
        }

        if (details.length > 240) {
            return callback(null, { status: 500, message: 'Details character length should not exceed 240' });
        }

        let query = "INSERT INTO task_list (details,status) VALUES (?,?)";

        mysql.query(query, [details, status], (err, result) => {
            if (err) {
                return callback(err, null);
            }

            return callback(err, { status: 200, message: 'Task Added Successfully' });

        });

    },
    updateTaskDb: (mysql, req, callback) => {
        let details = req.body.details;
        let status = req.body.status;

        let taskId = req.params.taskId;

        if (!details) {
            return callback(null, { status: 500, message: 'Details required' });
        }

        if (!status) {
            return callback(null, { status: 500, message: 'Status required' });
        }       

        if (!taskId) {
            return callback(null, { status: 500, message: 'Task ID required' });
        }

        if (details.length > 240) {
            return callback(null, { status: 500, message: 'Details character length should not exceed 240' });
        }

        let query = "UPDATE task_list SET details=?, status=? WHERE ID=?";

        mysql.query(query, [details, status, taskId], (err, result) => {
            if (err) {
                return callback(err, null);
            }

            return callback(err, { status: 200, message: 'Task Update Successfully' });

        });

    },


    getSingleTaskDb: (mysql, req, callback) => {

        let taskId = req.params.taskId;

        let query = "SELECT * FROM task_list WHERE ID=?";

        mysql.query(query, [taskId], (err, result) => {
            if (err) {
                return callback(err, null);
            }

            if (result.length === 0) {
                return callback(err, { status: 404, message: 'not found' });
            }

            console.log(result);

            let tasks = result;

            return callback(err, tasks);

        });

    }, getTaskByStatusDb: (mysql, req, callback) => {

        let status = req.params.status;

        let query = "SELECT * FROM task_list WHERE status=?";

        mysql.query(query, [status], (err, result) => {
            if (err) {
                return callback(err, null);
            }

            if (result.length === 0) {
                return callback(err, { status: 404, message: 'not found' });
            }

            console.log(result);

            let tasks = result;

            return callback(err, tasks);

        });

    },

    deleteTaskDb: (mysql, req, callback) => {

        let taskId = req.params.taskId;

        let query = "DELETE FROM task_list WHERE ID=?";

        mysql.query(query, [taskId], (err, result) => {
            if (err) {
                return callback(err, null);
            }

            return callback(err, { status: 200, message: 'Task Deleted' });

        });

    }


}