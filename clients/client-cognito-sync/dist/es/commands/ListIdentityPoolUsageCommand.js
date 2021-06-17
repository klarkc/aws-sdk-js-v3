import { __extends } from "tslib";
import { ListIdentityPoolUsageRequest, ListIdentityPoolUsageResponse } from "../models/models_0";
import { deserializeAws_restJson1ListIdentityPoolUsageCommand, serializeAws_restJson1ListIdentityPoolUsageCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets a list of identity pools registered with Cognito.</p>
 *       <p>ListIdentityPoolUsage can only be called with developer credentials. You
 *          cannot make this API call with the temporary user credentials provided by Cognito
 *          Identity.</p>
 *       <examples>
 *          <example>
 *             <name>ListIdentityPoolUsage</name>
 *             <description>The following examples have been edited for readability.</description>
 *             <request>
 * POST / HTTP/1.1
 * CONTENT-TYPE: application/json
 * X-AMZN-REQUESTID: 9be7c425-ef05-48c0-aef3-9f0ff2fe17d3
 * X-AMZ-TARGET: com.amazonaws.cognito.sync.model.AWSCognitoSyncService.ListIdentityPoolUsage
 * HOST: cognito-sync.us-east-1.amazonaws.com:443
 * X-AMZ-DATE: 20141111T211414Z
 * AUTHORIZATION: AWS4-HMAC-SHA256 Credential=<credential>, SignedHeaders=content-type;host;x-amz-date;x-amz-target;x-amzn-requestid, Signature=<signature>
 *
 * {
 *     "Operation": "com.amazonaws.cognito.sync.model#ListIdentityPoolUsage",
 *     "Service": "com.amazonaws.cognito.sync.model#AWSCognitoSyncService",
 *     "Input":
 *     {
 *         "MaxResults": "2"
 *     }
 * }
 *                </request>
 *             <response>
 * 1.1 200 OK
 * x-amzn-requestid: 9be7c425-ef05-48c0-aef3-9f0ff2fe17d3
 * content-type: application/json
 * content-length: 519
 * date: Tue, 11 Nov 2014 21:14:14 GMT
 *
 * {
 *     "Output":
 *     {
 *         "__type": "com.amazonaws.cognito.sync.model#ListIdentityPoolUsageResponse",
 *         "Count": 2,
 *         "IdentityPoolUsages": [
 *         {
 *             "DataStorage": 0,
 *             "IdentityPoolId": "IDENTITY_POOL_ID",
 *             "LastModifiedDate": 1.413836234607E9,
 *             "SyncSessionsCount": null
 *         },
 *         {
 *             "DataStorage": 0,
 *             "IdentityPoolId": "IDENTITY_POOL_ID",
 *             "LastModifiedDate": 1.410892165601E9,
 *             "SyncSessionsCount": null
 *         }],
 *         "MaxResults": 2,
 *         "NextToken": "dXMtZWFzdC0xOjBjMWJhMDUyLWUwOTgtNDFmYS1hNzZlLWVhYTJjMTI1Zjg2MQ=="
 *     },
 *     "Version": "1.0"
 * }
 *                </response>
 *          </example>
 *       </examples>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoSyncClient, ListIdentityPoolUsageCommand } from "@aws-sdk/client-cognito-sync"; // ES Modules import
 * // const { CognitoSyncClient, ListIdentityPoolUsageCommand } = require("@aws-sdk/client-cognito-sync"); // CommonJS import
 * const client = new CognitoSyncClient(config);
 * const command = new ListIdentityPoolUsageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListIdentityPoolUsageCommandInput} for command's `input` shape.
 * @see {@link ListIdentityPoolUsageCommandOutput} for command's `response` shape.
 * @see {@link CognitoSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListIdentityPoolUsageCommand = /** @class */ (function (_super) {
    __extends(ListIdentityPoolUsageCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListIdentityPoolUsageCommand(input) {
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
    ListIdentityPoolUsageCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CognitoSyncClient";
        var commandName = "ListIdentityPoolUsageCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListIdentityPoolUsageRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListIdentityPoolUsageResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListIdentityPoolUsageCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListIdentityPoolUsageCommand(input, context);
    };
    ListIdentityPoolUsageCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListIdentityPoolUsageCommand(output, context);
    };
    return ListIdentityPoolUsageCommand;
}($Command));
export { ListIdentityPoolUsageCommand };
//# sourceMappingURL=ListIdentityPoolUsageCommand.js.map