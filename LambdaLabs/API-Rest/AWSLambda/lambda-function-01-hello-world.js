export const handler = async (event) => {
    let statusCode = 200;
    
    let todo = {
      "id": 100,
      "description": "Become AWS Certified v8",
      "isDone": false
    };
    
    let headers = {
        "Content-Type" : "application/json"
    }
    
    let body = JSON.stringify(todo);
    
    const response = {
        statusCode,
        body,
        headers
    };
    
    return response;
};
