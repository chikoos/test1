const handler = require('../../lib/handler');

it('checks equality', () => {
    const data = {
        lastCommitSha: '3cc3643ed07d313f329cf3f35e0e5a455dff13c4'
    };
    const expectedResponse = {
        statusCode: 200,
        responseMessage: {
            myapplication: {
                version: '1.0',
                description: 'test1',
                lastCommitSha: '3cc3643ed07d313f329cf3f35e0e5a455dff13c4'
            }
        }
    };
    const actualResponse = handler(null, data);
    expect(actualResponse).toEqual(expectedResponse);
});

it('checks for NULL latestCommitsha when data is an empty object', () => {
    const data = {};
    const actualResponse = handler(null, data);
    const expectedResponse = {
        statusCode: 200,
        responseMessage: {
            myapplication: {
                version: '1.0',
                description: 'test1',
                lastCommitSha: 'NULL'
            }
        }
    }
    expect(actualResponse).toEqual(expectedResponse);
});

it('checks for NULL latestCommitsha when data is a string', () => {
    const actualResponse = handler(null, '');
    const expectedResponse = {
        statusCode: 200,
        responseMessage: {
            myapplication: {
                version: '1.0',
                description: 'test1',
                lastCommitSha: 'NULL'
            }
        }
    }
    expect(actualResponse).toEqual(expectedResponse);
});

it('callback error test', () => {
    const actualResponse = handler('callbackerror', null);
    const expectedResponse = {
        statusCode: 404,
        responseMessage: 'Error calculating last commit SHA, sending NULL'
    }
    expect(actualResponse).toEqual(expectedResponse);
});
