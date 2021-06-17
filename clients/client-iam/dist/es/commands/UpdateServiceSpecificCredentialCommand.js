import { __extends } from "tslib";
import { UpdateServiceSpecificCredentialRequest } from "../models/models_1";
import { deserializeAws_queryUpdateServiceSpecificCredentialCommand, serializeAws_queryUpdateServiceSpecificCredentialCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Sets the status of a service-specific credential to <code>Active</code> or
 *                 <code>Inactive</code>. Service-specific credentials that are inactive cannot be used
 *             for authentication to the service. This operation can be used to disable a user's
 *             service-specific credential as part of a credential rotation work flow.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, UpdateServiceSpecificCredentialCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, UpdateServiceSpecificCredentialCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new UpdateServiceSpecificCredentialCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateServiceSpecificCredentialCommandInput} for command's `input` shape.
 * @see {@link UpdateServiceSpecificCredentialCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateServiceSpecificCredentialCommand = /** @class */ (function (_super) {
    __extends(UpdateServiceSpecificCredentialCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateServiceSpecificCredentialCommand(input) {
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
    UpdateServiceSpecificCredentialCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "UpdateServiceSpecificCredentialCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateServiceSpecificCredentialRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateServiceSpecificCredentialCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryUpdateServiceSpecificCredentialCommand(input, context);
    };
    UpdateServiceSpecificCredentialCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryUpdateServiceSpecificCredentialCommand(output, context);
    };
    return UpdateServiceSpecificCredentialCommand;
}($Command));
export { UpdateServiceSpecificCredentialCommand };
//# sourceMappingURL=UpdateServiceSpecificCredentialCommand.js.map