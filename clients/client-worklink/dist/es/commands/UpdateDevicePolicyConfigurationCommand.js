import { __extends } from "tslib";
import { UpdateDevicePolicyConfigurationRequest, UpdateDevicePolicyConfigurationResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdateDevicePolicyConfigurationCommand, serializeAws_restJson1UpdateDevicePolicyConfigurationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the device policy configuration for the fleet.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkLinkClient, UpdateDevicePolicyConfigurationCommand } from "@aws-sdk/client-worklink"; // ES Modules import
 * // const { WorkLinkClient, UpdateDevicePolicyConfigurationCommand } = require("@aws-sdk/client-worklink"); // CommonJS import
 * const client = new WorkLinkClient(config);
 * const command = new UpdateDevicePolicyConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDevicePolicyConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateDevicePolicyConfigurationCommandOutput} for command's `response` shape.
 * @see {@link WorkLinkClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateDevicePolicyConfigurationCommand = /** @class */ (function (_super) {
    __extends(UpdateDevicePolicyConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateDevicePolicyConfigurationCommand(input) {
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
    UpdateDevicePolicyConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkLinkClient";
        var commandName = "UpdateDevicePolicyConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateDevicePolicyConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateDevicePolicyConfigurationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateDevicePolicyConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateDevicePolicyConfigurationCommand(input, context);
    };
    UpdateDevicePolicyConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateDevicePolicyConfigurationCommand(output, context);
    };
    return UpdateDevicePolicyConfigurationCommand;
}($Command));
export { UpdateDevicePolicyConfigurationCommand };
//# sourceMappingURL=UpdateDevicePolicyConfigurationCommand.js.map