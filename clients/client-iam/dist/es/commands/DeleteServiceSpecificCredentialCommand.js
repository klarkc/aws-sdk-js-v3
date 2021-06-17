import { __extends } from "tslib";
import { DeleteServiceSpecificCredentialRequest } from "../models/models_0";
import { deserializeAws_queryDeleteServiceSpecificCredentialCommand, serializeAws_queryDeleteServiceSpecificCredentialCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified service-specific credential.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, DeleteServiceSpecificCredentialCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, DeleteServiceSpecificCredentialCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new DeleteServiceSpecificCredentialCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteServiceSpecificCredentialCommandInput} for command's `input` shape.
 * @see {@link DeleteServiceSpecificCredentialCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteServiceSpecificCredentialCommand = /** @class */ (function (_super) {
    __extends(DeleteServiceSpecificCredentialCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteServiceSpecificCredentialCommand(input) {
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
    DeleteServiceSpecificCredentialCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "DeleteServiceSpecificCredentialCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteServiceSpecificCredentialRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteServiceSpecificCredentialCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDeleteServiceSpecificCredentialCommand(input, context);
    };
    DeleteServiceSpecificCredentialCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDeleteServiceSpecificCredentialCommand(output, context);
    };
    return DeleteServiceSpecificCredentialCommand;
}($Command));
export { DeleteServiceSpecificCredentialCommand };
//# sourceMappingURL=DeleteServiceSpecificCredentialCommand.js.map