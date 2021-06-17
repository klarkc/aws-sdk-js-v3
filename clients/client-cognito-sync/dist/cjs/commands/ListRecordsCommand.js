"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListRecordsCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Gets paginated records, optionally changed after a particular sync count for a dataset and
 *          identity. With Amazon Cognito Sync, each identity has access only to its own data. Thus,
 *          the credentials used to make this API call need to have access to the identity data.</p>
 *       <p>ListRecords can be called with temporary user credentials provided by Cognito
 *          Identity or with developer credentials. You should use Cognito Identity credentials to make
 *          this API call.</p>
 *       <examples>
 *          <example>
 *             <name>ListRecords</name>
 *             <description>The following examples have been edited for readability.</description>
 *             <request>
 * POST / HTTP/1.1
 * CONTENT-TYPE: application/json
 * X-AMZN-REQUESTID: b3d2e31e-d6b7-4612-8e84-c9ba288dab5d
 * X-AMZ-TARGET: com.amazonaws.cognito.sync.model.AWSCognitoSyncService.ListRecords
 * HOST: cognito-sync.us-east-1.amazonaws.com:443
 * X-AMZ-DATE: 20141111T183230Z
 * AUTHORIZATION: AWS4-HMAC-SHA256 Credential=<credential>, SignedHeaders=content-type;host;x-amz-date;x-amz-target;x-amzn-requestid, Signature=<signature>
 *
 * {
 *     "Operation": "com.amazonaws.cognito.sync.model#ListRecords",
 *     "Service": "com.amazonaws.cognito.sync.model#AWSCognitoSyncService",
 *     "Input":
 *     {
 *         "IdentityPoolId": "IDENTITY_POOL_ID",
 *         "IdentityId": "IDENTITY_ID",
 *         "DatasetName": "newDataSet"
 *     }
 * }
 *                </request>
 *             <response>
 * 1.1 200 OK
 * x-amzn-requestid: b3d2e31e-d6b7-4612-8e84-c9ba288dab5d
 * content-type: application/json
 * content-length: 623
 * date: Tue, 11 Nov 2014 18:32:30 GMT
 *
 * {
 *     "Output":
 *     {
 *         "__type": "com.amazonaws.cognito.sync.model#ListRecordsResponse",
 *         "Count": 0,
 *         "DatasetDeletedAfterRequestedSyncCount": false,
 *         "DatasetExists": false,
 *         "DatasetSyncCount": 0,
 *         "LastModifiedBy": null,
 *         "MergedDatasetNames": null,
 *         "NextToken": null,
 *         "Records": [],
 *         "SyncSessionToken": "SYNC_SESSION_TOKEN"
 *     },
 *     "Version": "1.0"
 * }
 *                </response>
 *          </example>
 *       </examples>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoSyncClient, ListRecordsCommand } from "@aws-sdk/client-cognito-sync"; // ES Modules import
 * // const { CognitoSyncClient, ListRecordsCommand } = require("@aws-sdk/client-cognito-sync"); // CommonJS import
 * const client = new CognitoSyncClient(config);
 * const command = new ListRecordsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListRecordsCommandInput} for command's `input` shape.
 * @see {@link ListRecordsCommandOutput} for command's `response` shape.
 * @see {@link CognitoSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ListRecordsCommand extends smithy_client_1.Command {
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
        const commandName = "ListRecordsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ListRecordsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ListRecordsResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1ListRecordsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1ListRecordsCommand(output, context);
    }
}
exports.ListRecordsCommand = ListRecordsCommand;
//# sourceMappingURL=ListRecordsCommand.js.map