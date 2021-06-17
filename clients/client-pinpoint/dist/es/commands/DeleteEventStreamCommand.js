import { __extends } from "tslib";
import { DeleteEventStreamRequest, DeleteEventStreamResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteEventStreamCommand, serializeAws_restJson1DeleteEventStreamCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the event stream for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, DeleteEventStreamCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, DeleteEventStreamCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new DeleteEventStreamCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteEventStreamCommandInput} for command's `input` shape.
 * @see {@link DeleteEventStreamCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteEventStreamCommand = /** @class */ (function (_super) {
    __extends(DeleteEventStreamCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteEventStreamCommand(input) {
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
    DeleteEventStreamCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointClient";
        var commandName = "DeleteEventStreamCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteEventStreamRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteEventStreamResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteEventStreamCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteEventStreamCommand(input, context);
    };
    DeleteEventStreamCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteEventStreamCommand(output, context);
    };
    return DeleteEventStreamCommand;
}($Command));
export { DeleteEventStreamCommand };
//# sourceMappingURL=DeleteEventStreamCommand.js.map