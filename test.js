const {assert} = require ('chai');
const http = require ('http');
const _ = require ('underscore');
const options = {port: 5000};


describe ('Task-API service (unit test)', () => {

    it ('toDoList', function (done) {
        http.request (_.extend (options, {path: '/toDoList'}), (res) => {
          let body = '';
          res.on ('data', (chunk) => {
            body += chunk;
          });
          res.on ('end', () => {
            assert.equal (res.statusCode, 200, `${body}`);
            const result = JSON.parse (body);
            assert.equal (result.length, 6);
            done ();
          });
        }).end ();
      });

});