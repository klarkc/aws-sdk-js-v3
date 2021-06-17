import { __extends } from "tslib";
import { UpdateDeviceStatusRequest, UpdateDeviceStatusResponse } from "../models/models_1";
import { deserializeAws_json1_1UpdateDeviceStatusCommand, serializeAws_json1_1UpdateDeviceStatusCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the device status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, UpdateDeviceStatusCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, UpdateDeviceStatusCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new UpdateDeviceStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDeviceStatusCommandInput} for command's `input` shape.
 * @see {@link UpdateDeviceStatusCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateDeviceStatusCommand = /** @class */ (function (_super) {
    __extends(UpdateDeviceStatusCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateDeviceStatusCommand(input) {
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
    UpdateDeviceStatusCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getAwsAuthPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CognitoIdentityProviderClient";
        var commandName = "UpdateDeviceStatusCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateDeviceStatusRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateDeviceStatusResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateDeviceStatusCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateDeviceStatusCommand(input, context);
    };
    UpdateDeviceStatusCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateDeviceStatusCommand(output, context);
    };
    return UpdateDeviceStatusCommand;
}($Command));
export { UpdateDeviceStatusCommand };
//# sourceMappingURL=UpdateDeviceStatusCommand.js.map