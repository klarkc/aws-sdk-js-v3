import { __extends } from "tslib";
import { UpdateJobShipmentStateRequest, UpdateJobShipmentStateResult } from "../models/models_0";
import { deserializeAws_json1_1UpdateJobShipmentStateCommand, serializeAws_json1_1UpdateJobShipmentStateCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the state when a the shipment states changes to a different state.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowballClient, UpdateJobShipmentStateCommand } from "@aws-sdk/client-snowball"; // ES Modules import
 * // const { SnowballClient, UpdateJobShipmentStateCommand } = require("@aws-sdk/client-snowball"); // CommonJS import
 * const client = new SnowballClient(config);
 * const command = new UpdateJobShipmentStateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateJobShipmentStateCommandInput} for command's `input` shape.
 * @see {@link UpdateJobShipmentStateCommandOutput} for command's `response` shape.
 * @see {@link SnowballClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateJobShipmentStateCommand = /** @class */ (function (_super) {
    __extends(UpdateJobShipmentStateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateJobShipmentStateCommand(input) {
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
    UpdateJobShipmentStateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SnowballClient";
        var commandName = "UpdateJobShipmentStateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateJobShipmentStateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateJobShipmentStateResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateJobShipmentStateCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateJobShipmentStateCommand(input, context);
    };
    UpdateJobShipmentStateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateJobShipmentStateCommand(output, context);
    };
    return UpdateJobShipmentStateCommand;
}($Command));
export { UpdateJobShipmentStateCommand };
//# sourceMappingURL=UpdateJobShipmentStateCommand.js.map