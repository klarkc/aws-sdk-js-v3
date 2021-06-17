import { __extends } from "tslib";
import { UpdateQueueStatusRequest } from "../models/models_0";
import { deserializeAws_restJson1UpdateQueueStatusCommand, serializeAws_restJson1UpdateQueueStatusCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Updates the status of the queue.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateQueueStatusCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateQueueStatusCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new UpdateQueueStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateQueueStatusCommandInput} for command's `input` shape.
 * @see {@link UpdateQueueStatusCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateQueueStatusCommand = /** @class */ (function (_super) {
    __extends(UpdateQueueStatusCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateQueueStatusCommand(input) {
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
    UpdateQueueStatusCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConnectClient";
        var commandName = "UpdateQueueStatusCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateQueueStatusRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateQueueStatusCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateQueueStatusCommand(input, context);
    };
    UpdateQueueStatusCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateQueueStatusCommand(output, context);
    };
    return UpdateQueueStatusCommand;
}($Command));
export { UpdateQueueStatusCommand };
//# sourceMappingURL=UpdateQueueStatusCommand.js.map