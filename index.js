const core = require('@actions/core');
const github = require('@actions/github');

try {
	  // `message` input defined in action metadata file
	  //const nameToGreet = core.getInput('message');
	  //console.log(`Hello ${nameToGreet}!`);
	  //const time = (new Date()).toTimeString();
	  //core.setOutput("time", time);
	  // Get the JSON webhook payload for the event that triggered the workflow
	  const payload = JSON.stringify(github.context.payload, undefined, 2)
	  //console.log(`The event payload: ${payload}`);
	  console.log(`Test1: ${github.context.payload.head_commit.message}`)
	  console.log(`Test2: ${process.env.GITHUB_REPOSITORY}`)
	  jsondata = new Object()
	  jsondata.text = '_Jekyll (release) CI_ :- New build run from push event by'
	  jsondata.title = 'New build run triggered from chrisyates-sage/Arcana-Jekyll-Theme'

	  var action1 = {
		'@context': 'http://schema.org',
		'target': ["https://github.com/chrisyates-sage/Arcana-Jekyll-Theme/compare/b4e2f0adb692...43cbd03d5abb"],
		'@type': 'ViewAction',
		'name': 'Go to repo'	
	  }
	  var fact1 = {
		'name': 'Repository',
		'value': 'chrisyates-sage/Arcana-Jekyll-Theme'
	  }
	  var fact2 = {
		'name': 'Commit SHA',
		'value': 'c14fdae25f224c1d7a154b6f9759b5ae87de0b62'
	  }
	  jsondata['potentialAction'] = []
	  jsondata['potentialAction'].push(action1)
	  jsondata['sections'] = []
	  
	  var section1 = new Object()
	  section1['facts'] = []
	  section1['facts'].push(fact1)
	  section1['facts'].push(fact2)
	  section1['activityImage'] = 'https://github.com/chrisyates-sage.png?size=48'
	  section1['activityText'] = github.context.payload.head_commit.message
	  section1['activityTitle'] = 'chrisyates-sage'
	  jsondata['sections'].push(section1)
	  
	  const jsonout = JSON.stringify(jsondata, undefined, 2)
	  console.log(jsonout)

	var url = "https://outlook.office.com/webhook/4debbfbb-c394-4de0-a0eb-3cd444c9554e@3e32dd7c-41f6-492d-a1a3-c58eb02cf4f8/IncomingWebhook/2aac373336894c12b3db5d43c350af17/2b82dd20-1338-4397-807d-e05538020cef";

	const https = require('https');
    var options = {
	   hostname: 'outlook.office.com',
	   path: '/webhook/4debbfbb-c394-4de0-a0eb-3cd444c9554e@3e32dd7c-41f6-492d-a1a3-c58eb02cf4f8/IncomingWebhook/2aac373336894c12b3db5d43c350af17/2b82dd20-1338-4397-807d-e05538020cef',
	   method: 'POST',
	   headers: { 'Content-Type': 'application/json', "Content-Length": jsonout.length }
	};
	var req = https.request(options, (res) => {
		console.log('statusCode:', res.statusCode);
		console.log('headers:', res.headers);
	  
		res.on('data', (d) => {
		  process.stdout.write(d);
		});
	});
	  
	req.on('error', (e) => {
		console.error(e);
	});
	  
	req.write(jsonout);
	req.end();

} catch (error) {
	  core.setFailed(error.message);
}
