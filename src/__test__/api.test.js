let request = require('supertest');
request = request(`http://localhost:3001`);

describe('Testing POSTS/events endpoint', () => {
  it('does not respond with valid HTTP status code when one field is missing', (done) => {
    request
      .post('/events')
      .send({
        name: 'Karolina',
        surname: 'Debowska',
        email: 'kbd@gmail.com'
      })
      .set('Accept', 'application/json')
      .expect(500)
      .end(function (err, res) {
        if (err) return done(err);
        return done();
      });
  });
  
  /*
  it('responds with valid HTTP status code when all data is provided', (done) => {
    request
        .post('/events')
        .send({date: '2010-01-01', name: 'John', surname: 'Smith', email: 'test@gmail.com'})
        //.set('Accept', 'application/json')
        .expect(200)
        .end(function (err, res) {
          if (err) return done(err);
          return done();
        });
  });
  */
});

describe('Testing GET/ endpoint', function() {
  it('responds with json', function(done) {
    request
      .get('/')
      .set('Accept', 'application/json')
      .expect(200, done);
  });
});
