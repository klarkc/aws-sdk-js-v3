import { __extends } from "tslib";
import { ListRecordsRequest, ListRecordsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListRecordsCommand, serializeAws_restJson1ListRecordsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var ListRecordsCommand = /** @class */ (function (_super) {
    __extends(ListRecordsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListRecordsCommand(input) {
        var _this = 
        // Start section: command_constructor
        _super.call(this) || this;
        _this.input = input;
        return _this;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    ListRecordsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CognitoSyncClient";
        var commandName = "ListRecordsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListRecordsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListRecordsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListRecordsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListRecordsCommand(input, context);
    };
    ListRecordsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListRecordsCommand(output, context);
    };
    return ListRecordsCommand;
}($Command));
export { ListRecordsCommand };
//# sourceMappingURL=ListRecordsCommand.js.map