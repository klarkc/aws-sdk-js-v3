import { __extends } from "tslib";
import { UpdateSmsTemplateRequest, UpdateSmsTemplateResponse } from "../models/models_1";
import { deserializeAws_restJson1UpdateSmsTemplateCommand, serializeAws_restJson1UpdateSmsTemplateCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates an existing message template for messages that are sent through the SMS channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, UpdateSmsTemplateCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, UpdateSmsTemplateCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new UpdateSmsTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateSmsTemplateCommandInput} for command's `input` shape.
 * @see {@link UpdateSmsTemplateCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateSmsTemplateCommand = /** @class */ (function (_super) {
    __extends(UpdateSmsTemplateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateSmsTemplateCommand(input) {
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
    UpdateSmsTemplateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointClient";
        var commandName = "UpdateSmsTemplateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateSmsTemplateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateSmsTemplateResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateSmsTemplateCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateSmsTemplateCommand(input, context);
    };
    UpdateSmsTemplateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateSmsTemplateCommand(output, context);
    };
    return UpdateSmsTemplateCommand;
}($Command));
export { UpdateSmsTemplateCommand };
//# sourceMappingURL=UpdateSmsTemplateCommand.js.map