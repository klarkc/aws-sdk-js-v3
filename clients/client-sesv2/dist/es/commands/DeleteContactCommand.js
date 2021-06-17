import { __extends } from "tslib";
import { DeleteContactRequest, DeleteContactResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteContactCommand, serializeAws_restJson1DeleteContactCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes a contact from a contact list.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, DeleteContactCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, DeleteContactCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const command = new DeleteContactCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteContactCommandInput} for command's `input` shape.
 * @see {@link DeleteContactCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteContactCommand = /** @class */ (function (_super) {
    __extends(DeleteContactCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteContactCommand(input) {
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
    DeleteContactCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SESv2Client";
        var commandName = "DeleteContactCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteContactRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteContactResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteContactCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteContactCommand(input, context);
    };
    DeleteContactCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteContactCommand(output, context);
    };
    return DeleteContactCommand;
}($Command));
export { DeleteContactCommand };
//# sourceMappingURL=DeleteContactCommand.js.map