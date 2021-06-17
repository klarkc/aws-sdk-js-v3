import { __extends } from "tslib";
import { GetSmsTemplateRequest, GetSmsTemplateResponse } from "../models/models_1";
import { deserializeAws_restJson1GetSmsTemplateCommand, serializeAws_restJson1GetSmsTemplateCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the content and settings of a message template for messages that are sent through the SMS channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetSmsTemplateCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetSmsTemplateCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new GetSmsTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSmsTemplateCommandInput} for command's `input` shape.
 * @see {@link GetSmsTemplateCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetSmsTemplateCommand = /** @class */ (function (_super) {
    __extends(GetSmsTemplateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetSmsTemplateCommand(input) {
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
    GetSmsTemplateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointClient";
        var commandName = "GetSmsTemplateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetSmsTemplateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetSmsTemplateResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetSmsTemplateCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetSmsTemplateCommand(input, context);
    };
    GetSmsTemplateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetSmsTemplateCommand(output, context);
    };
    return GetSmsTemplateCommand;
}($Command));
export { GetSmsTemplateCommand };
//# sourceMappingURL=GetSmsTemplateCommand.js.map