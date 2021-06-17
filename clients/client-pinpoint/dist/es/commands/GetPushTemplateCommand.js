import { __extends } from "tslib";
import { GetPushTemplateRequest, GetPushTemplateResponse } from "../models/models_1";
import { deserializeAws_restJson1GetPushTemplateCommand, serializeAws_restJson1GetPushTemplateCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the content and settings of a message template for messages that are sent through a push notification channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetPushTemplateCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetPushTemplateCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new GetPushTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetPushTemplateCommandInput} for command's `input` shape.
 * @see {@link GetPushTemplateCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetPushTemplateCommand = /** @class */ (function (_super) {
    __extends(GetPushTemplateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetPushTemplateCommand(input) {
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
    GetPushTemplateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointClient";
        var commandName = "GetPushTemplateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetPushTemplateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetPushTemplateResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetPushTemplateCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetPushTemplateCommand(input, context);
    };
    GetPushTemplateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetPushTemplateCommand(output, context);
    };
    return GetPushTemplateCommand;
}($Command));
export { GetPushTemplateCommand };
//# sourceMappingURL=GetPushTemplateCommand.js.map