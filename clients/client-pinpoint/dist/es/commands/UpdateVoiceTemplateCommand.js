import { __extends } from "tslib";
import { UpdateVoiceTemplateRequest, UpdateVoiceTemplateResponse } from "../models/models_1";
import { deserializeAws_restJson1UpdateVoiceTemplateCommand, serializeAws_restJson1UpdateVoiceTemplateCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates an existing message template for messages that are sent through the voice channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, UpdateVoiceTemplateCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, UpdateVoiceTemplateCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new UpdateVoiceTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateVoiceTemplateCommandInput} for command's `input` shape.
 * @see {@link UpdateVoiceTemplateCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateVoiceTemplateCommand = /** @class */ (function (_super) {
    __extends(UpdateVoiceTemplateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateVoiceTemplateCommand(input) {
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
    UpdateVoiceTemplateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointClient";
        var commandName = "UpdateVoiceTemplateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateVoiceTemplateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateVoiceTemplateResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateVoiceTemplateCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateVoiceTemplateCommand(input, context);
    };
    UpdateVoiceTemplateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateVoiceTemplateCommand(output, context);
    };
    return UpdateVoiceTemplateCommand;
}($Command));
export { UpdateVoiceTemplateCommand };
//# sourceMappingURL=UpdateVoiceTemplateCommand.js.map