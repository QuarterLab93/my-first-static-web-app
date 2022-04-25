import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async (context: Context, req: HttpRequest): Promise<void> => {
    context.log('HTTP trigger function processed a request.');
    const header = req.headers['x-ms-client-principal'];
    const encoded = Buffer.from(header, 'base64');
    const decoded = encoded.toString('ascii');

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: {
            apiClientPrincipal: JSON.parse(decoded),
        }
    };

};

export default httpTrigger;