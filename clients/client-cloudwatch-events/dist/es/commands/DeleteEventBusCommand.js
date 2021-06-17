import { __extends } from "tslib";
import { DeleteEventBusRequest } from "../models/models_0";
import { deserializeAws_json1_1DeleteEventBusCommand, serializeAws_json1_1DeleteEventBusCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified custom event bus or partner event bus. All rules associated with
 *       this event bus need to be deleted. You can't delete your account's default event bus.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchEventsClient, DeleteEventBusCommand } from "@aws-sdk/client-cloudwatch-events"; // ES Modules import
 * // const { CloudWatchEventsClient, DeleteEventBusCommand } = require("@aws-sdk/client-cloudwatch-events"); // CommonJS import
 * const client = new CloudWatchEventsClient(config);
 * const command = new DeleteEventBusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteEventBusCommandInput} for command's `input` shape.
 * @see {@link DeleteEventBusCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchEventsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteEventBusCommand = /** @class */ (function (_super) {
    __extends(DeleteEventBusCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteEventBusCommand(input) {
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
    DeleteEventBusCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CloudWatchEventsClient";
        var commandName = "DeleteEventBusCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteEventBusRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteEventBusCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteEventBusCommand(input, context);
    };
    DeleteEventBusCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteEventBusCommand(output, context);
    };
    return DeleteEventBusCommand;
}($Command));
export { DeleteEventBusCommand };
//# sourceMappingURL=DeleteEventBusCommand.js.map