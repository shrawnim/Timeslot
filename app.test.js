const app = require("../6tab");
const chai = require("chai");
const chaiHttp=require("chai-http");

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