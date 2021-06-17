import { __extends } from "tslib";
import { DeletePushTemplateRequest, DeletePushTemplateResponse } from "../models/models_0";
import { deserializeAws_restJson1DeletePushTemplateCommand, serializeAws_restJson1DeletePushTemplateCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a message template for messages that were sent through a push notification channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, DeletePushTemplateCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, DeletePushTemplateCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new DeletePushTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeletePushTemplateCommandInput} for command's `input` shape.
 * @see {@link DeletePushTemplateCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeletePushTemplateCommand = /** @class */ (function (_super) {
    __extends(DeletePushTemplateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeletePushTemplateCommand(input) {
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
    DeletePushTemplateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointClient";
        var commandName = "DeletePushTemplateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeletePushTemplateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeletePushTemplateResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeletePushTemplateCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeletePushTemplateCommand(input, context);
    };
    DeletePushTemplateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeletePushTemplateCommand(output, context);
    };
    return DeletePushTemplateCommand;
}($Command));
export { DeletePushTemplateCommand };
//# sourceMappingURL=DeletePushTemplateCommand.js.map