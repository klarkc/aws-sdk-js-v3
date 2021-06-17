import { __extends } from "tslib";
import { UpdateMaintenanceStartTimeInput, UpdateMaintenanceStartTimeOutput } from "../models/models_0";
import { deserializeAws_json1_1UpdateMaintenanceStartTimeCommand, serializeAws_json1_1UpdateMaintenanceStartTimeCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates a gateway's weekly maintenance start time information, including day and
 *          time of the week. The maintenance time is the time in your gateway's time zone.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, UpdateMaintenanceStartTimeCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, UpdateMaintenanceStartTimeCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new UpdateMaintenanceStartTimeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateMaintenanceStartTimeCommandInput} for command's `input` shape.
 * @see {@link UpdateMaintenanceStartTimeCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateMaintenanceStartTimeCommand = /** @class */ (function (_super) {
    __extends(UpdateMaintenanceStartTimeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateMaintenanceStartTimeCommand(input) {
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
    UpdateMaintenanceStartTimeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "StorageGatewayClient";
        var commandName = "UpdateMaintenanceStartTimeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateMaintenanceStartTimeInput.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateMaintenanceStartTimeOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateMaintenanceStartTimeCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateMaintenanceStartTimeCommand(input, context);
    };
    UpdateMaintenanceStartTimeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateMaintenanceStartTimeCommand(output, context);
    };
    return UpdateMaintenanceStartTimeCommand;
}($Command));
export { UpdateMaintenanceStartTimeCommand };
//# sourceMappingURL=UpdateMaintenanceStartTimeCommand.js.map