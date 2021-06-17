import { __extends } from "tslib";
import { DeleteEmailIdentityRequest, DeleteEmailIdentityResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteEmailIdentityCommand, serializeAws_restJson1DeleteEmailIdentityCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes an email identity. An identity can be either an email address or a domain
 *             name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, DeleteEmailIdentityCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, DeleteEmailIdentityCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const command = new DeleteEmailIdentityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteEmailIdentityCommandInput} for command's `input` shape.
 * @see {@link DeleteEmailIdentityCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteEmailIdentityCommand = /** @class */ (function (_super) {
    __extends(DeleteEmailIdentityCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteEmailIdentityCommand(input) {
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
    DeleteEmailIdentityCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SESv2Client";
        var commandName = "DeleteEmailIdentityCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteEmailIdentityRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteEmailIdentityResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteEmailIdentityCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteEmailIdentityCommand(input, context);
    };
    DeleteEmailIdentityCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteEmailIdentityCommand(output, context);
    };
    return DeleteEmailIdentityCommand;
}($Command));
export { DeleteEmailIdentityCommand };
//# sourceMappingURL=DeleteEmailIdentityCommand.js.map