let handler = (err, data) => {
    if (err) {
        return {
            statusCode: 404,
            responseMessage: 'Error calculating last commit SHA, sending 404 status code'
        };
    } 

    let responseObj;
    if (data && data.lastCommitSha) {
        responseObj = {
            myapplication: {
                version: '1.0',
                description: 'pre-interview technical test',
                lastCommitSha: data.lastCommitSha
            }
        };
    } else {
        responseObj = {
            myapplication: {
                version: '1.0',
                description: 'pre-interview technical test',
                lastCommitSha: 'NULL'
            }
        };
    }
    return {
        statusCode: 200,
        responseMessage: responseObj
    };
};

module.exports = handler;
