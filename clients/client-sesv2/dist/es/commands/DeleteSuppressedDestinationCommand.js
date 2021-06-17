import { __extends } from "tslib";
import { DeleteSuppressedDestinationRequest, DeleteSuppressedDestinationResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteSuppressedDestinationCommand, serializeAws_restJson1DeleteSuppressedDestinationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes an email address from the suppression list for your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, DeleteSuppressedDestinationCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, DeleteSuppressedDestinationCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const command = new DeleteSuppressedDestinationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteSuppressedDestinationCommandInput} for command's `input` shape.
 * @see {@link DeleteSuppressedDestinationCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteSuppressedDestinationCommand = /** @class */ (function (_super) {
    __extends(DeleteSuppressedDestinationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteSuppressedDestinationCommand(input) {
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
    DeleteSuppressedDestinationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SESv2Client";
        var commandName = "DeleteSuppressedDestinationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteSuppressedDestinationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteSuppressedDestinationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteSuppressedDestinationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteSuppressedDestinationCommand(input, context);
    };
    DeleteSuppressedDestinationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteSuppressedDestinationCommand(output, context);
    };
    return DeleteSuppressedDestinationCommand;
}($Command));
export { DeleteSuppressedDestinationCommand };
//# sourceMappingURL=DeleteSuppressedDestinationCommand.js.map