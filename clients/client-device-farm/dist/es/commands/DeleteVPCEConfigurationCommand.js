import { __extends } from "tslib";
import { DeleteVPCEConfigurationRequest, DeleteVPCEConfigurationResult } from "../models/models_0";
import { deserializeAws_json1_1DeleteVPCEConfigurationCommand, serializeAws_json1_1DeleteVPCEConfigurationCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a configuration for your Amazon Virtual Private Cloud (VPC) endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, DeleteVPCEConfigurationCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, DeleteVPCEConfigurationCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new DeleteVPCEConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteVPCEConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteVPCEConfigurationCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteVPCEConfigurationCommand = /** @class */ (function (_super) {
    __extends(DeleteVPCEConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteVPCEConfigurationCommand(input) {
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
    DeleteVPCEConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DeviceFarmClient";
        var commandName = "DeleteVPCEConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteVPCEConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteVPCEConfigurationResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteVPCEConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteVPCEConfigurationCommand(input, context);
    };
    DeleteVPCEConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteVPCEConfigurationCommand(output, context);
    };
    return DeleteVPCEConfigurationCommand;
}($Command));
export { DeleteVPCEConfigurationCommand };
//# sourceMappingURL=DeleteVPCEConfigurationCommand.js.map