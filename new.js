const express = require('express');
const {Client} = require('pg');
//const chalk = require('chalk');

const app = express();
app.use(express.json());
const client = new Client({
    user: "postgres",
    password: "root",
    host: "localhost",
    port: 5432,
    database : "postgres"
});
//ALL JOBS
app.get('/jobListing', async (req,res) => {
    try{
        
        const jobs = await findJobs();
        res.send(JSON.stringify(jobs));
        res.statusCode=200;
    }
    catch(e){
        res.send('error');
        res.statusCode=404;
        // console.log(`Error occoured : ${e}`);
    }
});
//JOB ACC. SKILL
app.get('/jobskill', async (req,res) => {
    try{
        const skill = req.params.reqskill;
        const jobs = await findJobsBySkill(skill);
        res.send(JSON.stringify(jobs));
        res.statusCode=200;
    }
    catch(e){
        res.send('error');
        res.statusCode=404;
        
    }
});
//CANDIDATE ACC. REQ.SKILL
app.get('/jobcan/:reqskill', async (req,res) => {
    try{
        const skill = req.params.reqskill;
        console.log(skill);
        const jobs = await jobcan(skill);
        res.send(JSON.stringify(jobs));
    }
    catch(e){
        res.send('error');
        
    }
});
//API ADD JOB
app.post('/addJob', async (req,res) => {
    let result = {};
    try{
        console.log("Request to add a job posting received!");
        const reqJSON = req.body;
        await createJob(reqJSON);
        result.success = true;
    }
    catch(e){
        result.success = false;
        console.log(e);
    }
    finally{
        res.setHeader("content-type", "application/json");
        res.send(JSON.stringify(result));
    }
    if(result.success) console.log('Job Posted Successfully');
    else console.log('Job posting not successfull!!');
    console.log(res.statusCode);
});
//add candidate
app.put('/enter', async (req,res) => {
    let result = {};
    try{
        console.log("Request to add a candidate received!");
        const reqJSON = req.body;
        await login(reqJSON);
        result.success = true;
    }
    catch(e){
        result.success = false;
        console.log(e);
    }
    finally{
        res.setHeader("content-type", "application/json");
        res.send(JSON.stringify(result));
    }
    if(result.success) console.log('candidate created Successfully');
    else console.log('candidate not successfull!!');
    res.statusCode=200;
    console.log(res.statusCode);
});

start();
//Functions
async function start(){
    await connect();
}
async function connect() {
    try {
        await client.connect();
    }
    catch(e) {
        console.error(`Failed to connect ${e}`)
    }
}
async function createJob(jobJSON){
    try {
        await client.query("insert into api1.job (JP,Sal,location,rid,reqskill) values ($1,$2,$3,$4,$5);", [jobJSON.JP, jobJSON.Sal, jobJSON.location, jobJSON.rid, jobJSON.reqskill]);
        return true;
        }
        catch(e){
            return false;
        }
}

async function findJobs(){
    try{
        const results = await client.query("select * from api1.job;");
        return results.rows;
    }
    catch(e){
        return [];
    }
}
async function findJobsBySkill(skill){
    try{
        const results = await client.query("select * from api1.job where reqskill = $1;", [skill]);
        return results.rows;
    }
    catch(e){
        return [];
    }
}
async function jobcan(skill){
    try {
        const result =await client.query("select * from api1.candidate inner join api1.job on api1.candidate.skill=api1.job.reqskill where job.reqskill=$1",[skill]);
        return result.rows;
        }
        catch(e){
            return [];
        }
}
async function login(inp,user){
    async function createJob(jobJSON){
        try {
            await client.query("insert into api1.personal (name,pass,ccid) values ($1,$2,$3);", [jobJSON.name, jobJSON.pass,jobJSON.ccid]);
            //await client.query("insert into api1.candidate (name,email,skill) values ($4,$5,$6);"[jobJSON.name,jobJSON.email,jobJSON.skill]);
            return true;
            }
            catch(e){
                return false;
            }
    }
}


app.listen(4000, () => console.log('Server startted on localhost:4000'));