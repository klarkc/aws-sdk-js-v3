import { __extends } from "tslib";
import { DeleteSmsTemplateRequest, DeleteSmsTemplateResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteSmsTemplateCommand, serializeAws_restJson1DeleteSmsTemplateCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a message template for messages that were sent through the SMS channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, DeleteSmsTemplateCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, DeleteSmsTemplateCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new DeleteSmsTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteSmsTemplateCommandInput} for command's `input` shape.
 * @see {@link DeleteSmsTemplateCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteSmsTemplateCommand = /** @class */ (function (_super) {
    __extends(DeleteSmsTemplateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteSmsTemplateCommand(input) {
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
    DeleteSmsTemplateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointClient";
        var commandName = "DeleteSmsTemplateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteSmsTemplateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteSmsTemplateResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteSmsTemplateCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteSmsTemplateCommand(input, context);
    };
    DeleteSmsTemplateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteSmsTemplateCommand(output, context);
    };
    return DeleteSmsTemplateCommand;
}($Command));
export { DeleteSmsTemplateCommand };
//# sourceMappingURL=DeleteSmsTemplateCommand.js.map