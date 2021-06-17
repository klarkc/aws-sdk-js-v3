import { __extends } from "tslib";
import { DeleteCustomDataIdentifierRequest, DeleteCustomDataIdentifierResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteCustomDataIdentifierCommand, serializeAws_restJson1DeleteCustomDataIdentifierCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Soft deletes a custom data identifier.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, DeleteCustomDataIdentifierCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, DeleteCustomDataIdentifierCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const command = new DeleteCustomDataIdentifierCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteCustomDataIdentifierCommandInput} for command's `input` shape.
 * @see {@link DeleteCustomDataIdentifierCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteCustomDataIdentifierCommand = /** @class */ (function (_super) {
    __extends(DeleteCustomDataIdentifierCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteCustomDataIdentifierCommand(input) {
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
    DeleteCustomDataIdentifierCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Macie2Client";
        var commandName = "DeleteCustomDataIdentifierCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteCustomDataIdentifierRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteCustomDataIdentifierResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteCustomDataIdentifierCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteCustomDataIdentifierCommand(input, context);
    };
    DeleteCustomDataIdentifierCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteCustomDataIdentifierCommand(output, context);
    };
    return DeleteCustomDataIdentifierCommand;
}($Command));
export { DeleteCustomDataIdentifierCommand };
//# sourceMappingURL=DeleteCustomDataIdentifierCommand.js.map