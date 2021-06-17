import { __extends } from "tslib";
import { ListDatasetsRequest, ListDatasetsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListDatasetsCommand, serializeAws_restJson1ListDatasetsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var ListDatasetsCommand = /** @class */ (function (_super) {
    __extends(ListDatasetsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListDatasetsCommand(input) {
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
    ListDatasetsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CognitoSyncClient";
        var commandName = "ListDatasetsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListDatasetsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListDatasetsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListDatasetsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListDatasetsCommand(input, context);
    };
    ListDatasetsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListDatasetsCommand(output, context);
    };
    return ListDatasetsCommand;
}($Command));
export { ListDatasetsCommand };
//# sourceMappingURL=ListDatasetsCommand.js.map