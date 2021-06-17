import { __extends } from "tslib";
import { SetIdentityPoolConfigurationRequest, SetIdentityPoolConfigurationResponse } from "../models/models_0";
import { deserializeAws_restJson1SetIdentityPoolConfigurationCommand, serializeAws_restJson1SetIdentityPoolConfigurationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Sets the necessary configuration for push sync.</p><p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>
 *       <examples>
 *          <example>
 *             <name>SetIdentityPoolConfiguration</name>
 *             <description>The following examples have been edited for readability.</description>
 *             <request>
 * POST / HTTP/1.1
 * CONTENT-TYPE: application/json
 * X-AMZN-REQUESTID: a46db021-f5dd-45d6-af5b-7069fa4a211b
 * X-AMZ-TARGET: com.amazonaws.cognito.sync.model.AWSCognitoSyncService.SetIdentityPoolConfiguration
 * HOST: cognito-sync.us-east-1.amazonaws.com
 * X-AMZ-DATE: 20141004T200006Z
 * AUTHORIZATION: AWS4-HMAC-SHA256 Credential=<credential>, SignedHeaders=content-type;content-length;host;x-amz-date;x-amz-target, Signature=<signature>
 *
 * {
 *     "Operation": "com.amazonaws.cognito.sync.model#SetIdentityPoolConfiguration",
 *     "Service": "com.amazonaws.cognito.sync.model#AWSCognitoSyncService",
 *     "Input":
 *     {
 *         "IdentityPoolId": "ID_POOL_ID",
 *         "PushSync":
 *         {
 *             "ApplicationArns": ["PLATFORMARN1", "PLATFORMARN2"],
 *             "RoleArn": "ROLEARN"
 *         }
 *     }
 * }
 *             </request>
 *             <response>
 * 1.1 200 OK
 * x-amzn-requestid: a46db021-f5dd-45d6-af5b-7069fa4a211b
 * date: Sat, 04 Oct 2014 20:00:06 GMT
 * content-type: application/json
 * content-length: 332
 *
 * {
 *     "Output":
 *     {
 *         "__type": "com.amazonaws.cognito.sync.model#SetIdentityPoolConfigurationResponse",
 *         "IdentityPoolId": "ID_POOL_ID",
 *         "PushSync":
 *         {
 *             "ApplicationArns": ["PLATFORMARN1", "PLATFORMARN2"],
 *             "RoleArn": "ROLEARN"
 *         }
 *     },
 *     "Version": "1.0"
 * }
 *             </response>
 *          </example>
 *       </examples>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoSyncClient, SetIdentityPoolConfigurationCommand } from "@aws-sdk/client-cognito-sync"; // ES Modules import
 * // const { CognitoSyncClient, SetIdentityPoolConfigurationCommand } = require("@aws-sdk/client-cognito-sync"); // CommonJS import
 * const client = new CognitoSyncClient(config);
 * const command = new SetIdentityPoolConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SetIdentityPoolConfigurationCommandInput} for command's `input` shape.
 * @see {@link SetIdentityPoolConfigurationCommandOutput} for command's `response` shape.
 * @see {@link CognitoSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
var SetIdentityPoolConfigurationCommand = /** @class */ (function (_super) {
    __extends(SetIdentityPoolConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function SetIdentityPoolConfigurationCommand(input) {
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
    SetIdentityPoolConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CognitoSyncClient";
        var commandName = "SetIdentityPoolConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: SetIdentityPoolConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: SetIdentityPoolConfigurationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    SetIdentityPoolConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1SetIdentityPoolConfigurationCommand(input, context);
    };
    SetIdentityPoolConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1SetIdentityPoolConfigurationCommand(output, context);
    };
    return SetIdentityPoolConfigurationCommand;
}($Command));
export { SetIdentityPoolConfigurationCommand };
//# sourceMappingURL=SetIdentityPoolConfigurationCommand.js.map