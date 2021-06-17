import { __extends } from "tslib";
import { UpdatePushTemplateRequest, UpdatePushTemplateResponse } from "../models/models_1";
import { deserializeAws_restJson1UpdatePushTemplateCommand, serializeAws_restJson1UpdatePushTemplateCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates an existing message template for messages that are sent through a push notification channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, UpdatePushTemplateCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, UpdatePushTemplateCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new UpdatePushTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdatePushTemplateCommandInput} for command's `input` shape.
 * @see {@link UpdatePushTemplateCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdatePushTemplateCommand = /** @class */ (function (_super) {
    __extends(UpdatePushTemplateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdatePushTemplateCommand(input) {
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
    UpdatePushTemplateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointClient";
        var commandName = "UpdatePushTemplateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdatePushTemplateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdatePushTemplateResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdatePushTemplateCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdatePushTemplateCommand(input, context);
    };
    UpdatePushTemplateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdatePushTemplateCommand(output, context);
    };
    return UpdatePushTemplateCommand;
}($Command));
export { UpdatePushTemplateCommand };
//# sourceMappingURL=UpdatePushTemplateCommand.js.map