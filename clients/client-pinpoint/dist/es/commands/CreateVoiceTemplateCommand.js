import { __extends } from "tslib";
import { CreateVoiceTemplateRequest, CreateVoiceTemplateResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateVoiceTemplateCommand, serializeAws_restJson1CreateVoiceTemplateCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a message template for messages that are sent through the voice channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, CreateVoiceTemplateCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, CreateVoiceTemplateCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new CreateVoiceTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateVoiceTemplateCommandInput} for command's `input` shape.
 * @see {@link CreateVoiceTemplateCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateVoiceTemplateCommand = /** @class */ (function (_super) {
    __extends(CreateVoiceTemplateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateVoiceTemplateCommand(input) {
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
    CreateVoiceTemplateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointClient";
        var commandName = "CreateVoiceTemplateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateVoiceTemplateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateVoiceTemplateResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateVoiceTemplateCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateVoiceTemplateCommand(input, context);
    };
    CreateVoiceTemplateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateVoiceTemplateCommand(output, context);
    };
    return CreateVoiceTemplateCommand;
}($Command));
export { CreateVoiceTemplateCommand };
//# sourceMappingURL=CreateVoiceTemplateCommand.js.map