import { __extends } from "tslib";
import { CreateEmailTemplateRequest, CreateEmailTemplateResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateEmailTemplateCommand, serializeAws_restJson1CreateEmailTemplateCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a message template for messages that are sent through the email channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, CreateEmailTemplateCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, CreateEmailTemplateCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new CreateEmailTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateEmailTemplateCommandInput} for command's `input` shape.
 * @see {@link CreateEmailTemplateCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateEmailTemplateCommand = /** @class */ (function (_super) {
    __extends(CreateEmailTemplateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateEmailTemplateCommand(input) {
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
    CreateEmailTemplateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointClient";
        var commandName = "CreateEmailTemplateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateEmailTemplateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateEmailTemplateResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateEmailTemplateCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateEmailTemplateCommand(input, context);
    };
    CreateEmailTemplateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateEmailTemplateCommand(output, context);
    };
    return CreateEmailTemplateCommand;
}($Command));
export { CreateEmailTemplateCommand };
//# sourceMappingURL=CreateEmailTemplateCommand.js.map