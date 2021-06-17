"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListDatasetsCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Lists datasets for an identity. With Amazon Cognito Sync, each identity has access only to
 *          its own data. Thus, the credentials used to make this API call need to have access to the
 *          identity data.</p>
 *       <p>ListDatasets can be called with temporary user credentials provided by Cognito
 *          Identity or with developer credentials. You should use the Cognito Identity credentials to
 *          make this API call.</p>
 *       <examples>
 *          <example>
 *             <name>ListDatasets</name>
 *             <description>The following examples have been edited for readability.</description>
 *             <request>
 * POST / HTTP/1.1
 * CONTENT-TYPE: application/json
 * X-AMZN-REQUESTID: 15225768-209f-4078-aaed-7494ace9f2db
 * X-AMZ-TARGET: com.amazonaws.cognito.sync.model.AWSCognitoSyncService.ListDatasets
 * HOST: cognito-sync.us-east-1.amazonaws.com:443
 * X-AMZ-DATE: 20141111T215640Z
 * AUTHORIZATION: AWS4-HMAC-SHA256 Credential=<credential>, SignedHeaders=content-type;host;x-amz-date;x-amz-target;x-amzn-requestid, Signature=<signature>
 *
 * {
 *     "Operation": "com.amazonaws.cognito.sync.model#ListDatasets",
 *     "Service": "com.amazonaws.cognito.sync.model#AWSCognitoSyncService",
 *     "Input":
 *     {
 *         "IdentityPoolId": "IDENTITY_POOL_ID",
 *         "IdentityId": "IDENTITY_ID",
 *         "MaxResults": "3"
 *     }
 * }
 *                </request>
 *             <response>
 * 1.1 200 OK
 * x-amzn-requestid: 15225768-209f-4078-aaed-7494ace9f2db, 15225768-209f-4078-aaed-7494ace9f2db
 * content-type: application/json
 * content-length: 355
 * date: Tue, 11 Nov 2014 21:56:40 GMT
 *
 * {
 *     "Output":
 *     {
 *         "__type": "com.amazonaws.cognito.sync.model#ListDatasetsResponse",
 *         "Count": 1,
 *         "Datasets": [
 *         {
 *             "CreationDate": 1.412974057151E9,
 *             "DataStorage": 16,
 *             "DatasetName": "my_list",
 *             "IdentityId": "IDENTITY_ID",
 *             "LastModifiedBy": "123456789012",
 *             "LastModifiedDate": 1.412974057244E9,
 *             "NumRecords": 1
 *         }],
 *         "NextToken": null
 *     },
 *     "Version": "1.0"
 * }
 *                </response>
 *          </example>
 *       </examples>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoSyncClient, ListDatasetsCommand } from "@aws-sdk/client-cognito-sync"; // ES Modules import
 * // const { CognitoSyncClient, ListDatasetsCommand } = require("@aws-sdk/client-cognito-sync"); // CommonJS import
 * const client = new CognitoSyncClient(config);
 * const command = new ListDatasetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDatasetsCommandInput} for command's `input` shape.
 * @see {@link ListDatasetsCommandOutput} for command's `response` shape.
 * @see {@link CognitoSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ListDatasetsCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "CognitoSyncClient";
        const commandName = "ListDatasetsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ListDatasetsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ListDatasetsResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1ListDatasetsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1ListDatasetsCommand(output, context);
    }
}
exports.ListDatasetsCommand = ListDatasetsCommand;
//# sourceMappingURL=ListDatasetsCommand.js.map