import { __extends } from "tslib";
import { DeleteDeliveryChannelRequest } from "../models/models_0";
import { deserializeAws_json1_1DeleteDeliveryChannelCommand, serializeAws_json1_1DeleteDeliveryChannelCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the delivery channel.</p>
 * 		       <p>Before you can delete the delivery channel, you must stop the
 * 			configuration recorder by using the <a>StopConfigurationRecorder</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DeleteDeliveryChannelCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DeleteDeliveryChannelCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new DeleteDeliveryChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDeliveryChannelCommandInput} for command's `input` shape.
 * @see {@link DeleteDeliveryChannelCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteDeliveryChannelCommand = /** @class */ (function (_super) {
    __extends(DeleteDeliveryChannelCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteDeliveryChannelCommand(input) {
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
    DeleteDeliveryChannelCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConfigServiceClient";
        var commandName = "DeleteDeliveryChannelCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteDeliveryChannelRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteDeliveryChannelCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteDeliveryChannelCommand(input, context);
    };
    DeleteDeliveryChannelCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteDeliveryChannelCommand(output, context);
    };
    return DeleteDeliveryChannelCommand;
}($Command));
export { DeleteDeliveryChannelCommand };
//# sourceMappingURL=DeleteDeliveryChannelCommand.js.map