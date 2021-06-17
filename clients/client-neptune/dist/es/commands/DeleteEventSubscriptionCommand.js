import { __extends } from "tslib";
import { DeleteEventSubscriptionMessage, DeleteEventSubscriptionResult } from "../models/models_0";
import { deserializeAws_queryDeleteEventSubscriptionCommand, serializeAws_queryDeleteEventSubscriptionCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes an event notification subscription.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, DeleteEventSubscriptionCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, DeleteEventSubscriptionCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * const client = new NeptuneClient(config);
 * const command = new DeleteEventSubscriptionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteEventSubscriptionCommandInput} for command's `input` shape.
 * @see {@link DeleteEventSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link NeptuneClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteEventSubscriptionCommand = /** @class */ (function (_super) {
    __extends(DeleteEventSubscriptionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteEventSubscriptionCommand(input) {
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
    DeleteEventSubscriptionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "NeptuneClient";
        var commandName = "DeleteEventSubscriptionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteEventSubscriptionMessage.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteEventSubscriptionResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteEventSubscriptionCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDeleteEventSubscriptionCommand(input, context);
    };
    DeleteEventSubscriptionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDeleteEventSubscriptionCommand(output, context);
    };
    return DeleteEventSubscriptionCommand;
}($Command));
export { DeleteEventSubscriptionCommand };
//# sourceMappingURL=DeleteEventSubscriptionCommand.js.map