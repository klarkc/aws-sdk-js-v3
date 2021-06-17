import { __extends } from "tslib";
import { RegisterDeviceRequest, RegisterDeviceResponse } from "../models/models_0";
import { deserializeAws_restJson1RegisterDeviceCommand, serializeAws_restJson1RegisterDeviceCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Registers a device to receive push sync notifications.</p><p>This API can only be called with temporary credentials provided by Cognito Identity. You cannot call this API with developer credentials.</p>
 *       <examples>
 *          <example>
 *             <name>RegisterDevice</name>
 *             <description>The following examples have been edited for readability.</description>
 *             <request>
 * POST / HTTP/1.1
 * CONTENT-TYPE: application/json
 * X-AMZN-REQUESTID: 368f9200-3eca-449e-93b3-7b9c08d8e185
 * X-AMZ-TARGET: com.amazonaws.cognito.sync.model.AWSCognitoSyncService.RegisterDevice
 * HOST: cognito-sync.us-east-1.amazonaws.com
 * X-AMZ-DATE: 20141004T194643Z
 * X-AMZ-SECURITY-TOKEN: <securitytoken>
 * AUTHORIZATION: AWS4-HMAC-SHA256 Credential=<credential>, SignedHeaders=content-type;content-length;host;x-amz-date;x-amz-target, Signature=<signature>
 *
 * {
 *     "Operation": "com.amazonaws.cognito.sync.model#RegisterDevice",
 *     "Service": "com.amazonaws.cognito.sync.model#AWSCognitoSyncService",
 *     "Input":
 *     {
 *         "IdentityPoolId": "ID_POOL_ID",
 *         "IdentityId": "IDENTITY_ID",
 *         "Platform": "GCM",
 *         "Token": "PUSH_TOKEN"
 *     }
 * }
 *                </request>
 *             <response>
 * 1.1 200 OK
 * x-amzn-requestid: 368f9200-3eca-449e-93b3-7b9c08d8e185
 * date: Sat, 04 Oct 2014 19:46:44 GMT
 * content-type: application/json
 * content-length: 145
 *
 * {
 *     "Output":
 *     {
 *         "__type": "com.amazonaws.cognito.sync.model#RegisterDeviceResponse",
 *         "DeviceId": "5cd28fbe-dd83-47ab-9f83-19093a5fb014"
 *     },
 *     "Version": "1.0"
 * }
 *                </response>
 *          </example>
 *       </examples>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoSyncClient, RegisterDeviceCommand } from "@aws-sdk/client-cognito-sync"; // ES Modules import
 * // const { CognitoSyncClient, RegisterDeviceCommand } = require("@aws-sdk/client-cognito-sync"); // CommonJS import
 * const client = new CognitoSyncClient(config);
 * const command = new RegisterDeviceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegisterDeviceCommandInput} for command's `input` shape.
 * @see {@link RegisterDeviceCommandOutput} for command's `response` shape.
 * @see {@link CognitoSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RegisterDeviceCommand = /** @class */ (function (_super) {
    __extends(RegisterDeviceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RegisterDeviceCommand(input) {
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
    RegisterDeviceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CognitoSyncClient";
        var commandName = "RegisterDeviceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RegisterDeviceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: RegisterDeviceResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RegisterDeviceCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1RegisterDeviceCommand(input, context);
    };
    RegisterDeviceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1RegisterDeviceCommand(output, context);
    };
    return RegisterDeviceCommand;
}($Command));
export { RegisterDeviceCommand };
//# sourceMappingURL=RegisterDeviceCommand.js.map