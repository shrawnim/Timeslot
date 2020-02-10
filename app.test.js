const app = require("../new");
const chai = require("chai");
const chaiHttp=require("chai-http");
let should = chai.should();

const{expect}=chai;
chai.use(chaiHTTP);
describe("Server!",()=>{
    it ("shows all jobs",done =>{
        chai
        .request(app)
        .post("/joblisting")
        //.send({string:any})
        .end((err,res)=>{
            expect(res).to.have.status(200);
            expect(res.body.status).to.equals("success");
            done();
        });
    });
});
describe('ADM', () => {
    before((done) => { 
        chai.request(server)
              .get('/joblisting')
              .end((req,res)=>{
                res.should.have.status(200)  
                console.log(res.status)
                done();
            });
        });
  
   describe('/GET admin id', () => {
        it('candidate with sk', (done) => {
          chai.request(server)
              .get('/jobskill')
              .end((err, res) => {
                    res.should.have.status(200);
                          console.log(res.text)
                    res.text.should.be.a('string');
                    
                done();
              });
        });
    });
   /* describe('/GET jobs', () => {
        it('jobs with no filter', (done) => {
          chai.request(server)
              .get('/candidate/44/jobs')
              .end((err, res) => {
                    res.should.have.status(200);
                          console.log(res.text)
                    JSON.parse(res.text).should.be.a('array');
                    
                done();
              });
        });
    });
    describe('logout', () => {
        it('logout', (done) => {
          chai.request(server)
              .get('/toogleadm')
              .end((err, res) => {
                    res.should.have.status(200);
                done();
              });
        });
    });
})
​
describe('login candidate', () => {
before("login with id and password of user 2",(done) => { 
    chai.request(server)
          .post('/candidate')
          .type('JSON')
          .send({
              'username':'btuckey1',
              "password":"QdQKDtEeFo"
          })
          .end((req,res)=>{
            res.should.have.status(200)
            res.text.should.be.a('string')  
            done();
        });
    });
​
describe('/GET details of user', () => {
    it('user id', (done) => {
      chai.request(server)
          .get('/candidate/2')
          .end((err, res) => {
                res.should.have.status(200);
                      console.log(res.text)
                res.text.should.be.equal('Welcome user {"id":2,"name":"Bartolemo"}');
                
            done();
          });
    });
    it('wrong user id', (done) => {
        chai.request(server)
            .get('/candidate/5')
            .end((err, res) => {
                  res.should.have.status(401);
                        console.log(res.text)
                  res.text.should.be.a('string');
                  
              done();
            });
      });
    
});})*/


