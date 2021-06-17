import { __extends } from "tslib";
import { CreatePushTemplateRequest, CreatePushTemplateResponse } from "../models/models_0";
import { deserializeAws_restJson1CreatePushTemplateCommand, serializeAws_restJson1CreatePushTemplateCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a message template for messages that are sent through a push notification channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, CreatePushTemplateCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, CreatePushTemplateCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new CreatePushTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreatePushTemplateCommandInput} for command's `input` shape.
 * @see {@link CreatePushTemplateCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreatePushTemplateCommand = /** @class */ (function (_super) {
    __extends(CreatePushTemplateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreatePushTemplateCommand(input) {
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
    CreatePushTemplateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointClient";
        var commandName = "CreatePushTemplateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreatePushTemplateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreatePushTemplateResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreatePushTemplateCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreatePushTemplateCommand(input, context);
    };
    CreatePushTemplateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreatePushTemplateCommand(output, context);
    };
    return CreatePushTemplateCommand;
}($Command));
export { CreatePushTemplateCommand };
//# sourceMappingURL=CreatePushTemplateCommand.js.map