// run with :
//  npx wdio run ./wdio.conf.js

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await browser.url(`https://the-internet.herokuapp.com/login`);
        browser.eyesCheck('the-internet homepage');
        const testResults = browser.eyesGetTestResults();

        var didPass = browser.eyesGetTestResults().getStatus();

        //https://github.com/applitools/eyes.sdk.javascript1/tree/master/packages/eyes-webdriverio-5-service#browsereyesgettestresults
        // example for using the testResults -
        // fail the test if visual differences were found
        //if (testResults.getStatus() !== 'Passed') {
        //const testName = `'${testResults.getName()}' of '${testResults.getAppName()}'`
        //throw new Error(`Test ${testName} detected differences! See details at: ${testResults.getUrl()}`)
        //}
    });
});

