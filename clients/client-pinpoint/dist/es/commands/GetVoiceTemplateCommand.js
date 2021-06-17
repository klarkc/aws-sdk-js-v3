import { __extends } from "tslib";
import { GetVoiceTemplateRequest, GetVoiceTemplateResponse } from "../models/models_1";
import { deserializeAws_restJson1GetVoiceTemplateCommand, serializeAws_restJson1GetVoiceTemplateCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the content and settings of a message template for messages that are sent through the voice channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetVoiceTemplateCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetVoiceTemplateCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new GetVoiceTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetVoiceTemplateCommandInput} for command's `input` shape.
 * @see {@link GetVoiceTemplateCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetVoiceTemplateCommand = /** @class */ (function (_super) {
    __extends(GetVoiceTemplateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetVoiceTemplateCommand(input) {
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
    GetVoiceTemplateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointClient";
        var commandName = "GetVoiceTemplateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetVoiceTemplateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetVoiceTemplateResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetVoiceTemplateCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetVoiceTemplateCommand(input, context);
    };
    GetVoiceTemplateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetVoiceTemplateCommand(output, context);
    };
    return GetVoiceTemplateCommand;
}($Command));
export { GetVoiceTemplateCommand };
//# sourceMappingURL=GetVoiceTemplateCommand.js.map