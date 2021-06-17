import { __extends } from "tslib";
import { DeactivateUserRequest } from "../models/models_0";
import { deserializeAws_restJson1DeactivateUserCommand, serializeAws_restJson1DeactivateUserCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deactivates the specified user, which revokes the user's access to Amazon
 *             WorkDocs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, DeactivateUserCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, DeactivateUserCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * const client = new WorkDocsClient(config);
 * const command = new DeactivateUserCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeactivateUserCommandInput} for command's `input` shape.
 * @see {@link DeactivateUserCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeactivateUserCommand = /** @class */ (function (_super) {
    __extends(DeactivateUserCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeactivateUserCommand(input) {
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
    DeactivateUserCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkDocsClient";
        var commandName = "DeactivateUserCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeactivateUserRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeactivateUserCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeactivateUserCommand(input, context);
    };
    DeactivateUserCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeactivateUserCommand(output, context);
    };
    return DeactivateUserCommand;
}($Command));
export { DeactivateUserCommand };
//# sourceMappingURL=DeactivateUserCommand.js.map