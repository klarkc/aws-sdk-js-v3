import { __extends } from "tslib";
import { UpdateVTLDeviceTypeInput, UpdateVTLDeviceTypeOutput } from "../models/models_0";
import { deserializeAws_json1_1UpdateVTLDeviceTypeCommand, serializeAws_json1_1UpdateVTLDeviceTypeCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the type of medium changer in a tape gateway. When you activate a tape gateway,
 *          you select a medium changer type for the tape gateway. This operation enables you to select
 *          a different type of medium changer after a tape gateway is activated. This operation is
 *          only supported in the tape gateway type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, UpdateVTLDeviceTypeCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, UpdateVTLDeviceTypeCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new UpdateVTLDeviceTypeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateVTLDeviceTypeCommandInput} for command's `input` shape.
 * @see {@link UpdateVTLDeviceTypeCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateVTLDeviceTypeCommand = /** @class */ (function (_super) {
    __extends(UpdateVTLDeviceTypeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateVTLDeviceTypeCommand(input) {
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
    UpdateVTLDeviceTypeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "StorageGatewayClient";
        var commandName = "UpdateVTLDeviceTypeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateVTLDeviceTypeInput.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateVTLDeviceTypeOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateVTLDeviceTypeCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateVTLDeviceTypeCommand(input, context);
    };
    UpdateVTLDeviceTypeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateVTLDeviceTypeCommand(output, context);
    };
    return UpdateVTLDeviceTypeCommand;
}($Command));
export { UpdateVTLDeviceTypeCommand };
//# sourceMappingURL=UpdateVTLDeviceTypeCommand.js.map