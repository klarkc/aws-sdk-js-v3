import { __extends } from "tslib";
import { SendMessagesRequest, SendMessagesResponse } from "../models/models_1";
import { deserializeAws_restJson1SendMessagesCommand, serializeAws_restJson1SendMessagesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates and sends a direct message.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, SendMessagesCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, SendMessagesCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new SendMessagesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SendMessagesCommandInput} for command's `input` shape.
 * @see {@link SendMessagesCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
var SendMessagesCommand = /** @class */ (function (_super) {
    __extends(SendMessagesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function SendMessagesCommand(input) {
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
    SendMessagesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointClient";
        var commandName = "SendMessagesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: SendMessagesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: SendMessagesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    SendMessagesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1SendMessagesCommand(input, context);
    };
    SendMessagesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1SendMessagesCommand(output, context);
    };
    return SendMessagesCommand;
}($Command));
export { SendMessagesCommand };
//# sourceMappingURL=SendMessagesCommand.js.map