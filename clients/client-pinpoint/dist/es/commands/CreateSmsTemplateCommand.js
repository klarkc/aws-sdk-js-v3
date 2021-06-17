import { __extends } from "tslib";
import { CreateSmsTemplateRequest, CreateSmsTemplateResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateSmsTemplateCommand, serializeAws_restJson1CreateSmsTemplateCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a message template for messages that are sent through the SMS channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, CreateSmsTemplateCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, CreateSmsTemplateCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new CreateSmsTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateSmsTemplateCommandInput} for command's `input` shape.
 * @see {@link CreateSmsTemplateCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateSmsTemplateCommand = /** @class */ (function (_super) {
    __extends(CreateSmsTemplateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateSmsTemplateCommand(input) {
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
    CreateSmsTemplateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointClient";
        var commandName = "CreateSmsTemplateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateSmsTemplateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateSmsTemplateResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateSmsTemplateCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateSmsTemplateCommand(input, context);
    };
    CreateSmsTemplateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateSmsTemplateCommand(output, context);
    };
    return CreateSmsTemplateCommand;
}($Command));
export { CreateSmsTemplateCommand };
//# sourceMappingURL=CreateSmsTemplateCommand.js.map