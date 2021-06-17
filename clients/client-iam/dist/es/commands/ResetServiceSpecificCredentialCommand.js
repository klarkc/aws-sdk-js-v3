import { __extends } from "tslib";
import { ResetServiceSpecificCredentialRequest, ResetServiceSpecificCredentialResponse } from "../models/models_0";
import { deserializeAws_queryResetServiceSpecificCredentialCommand, serializeAws_queryResetServiceSpecificCredentialCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Resets the password for a service-specific credential. The new password is AWS
 *             generated and cryptographically strong. It cannot be configured by the user. Resetting
 *             the password immediately invalidates the previous password associated with this
 *             user.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ResetServiceSpecificCredentialCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ResetServiceSpecificCredentialCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new ResetServiceSpecificCredentialCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ResetServiceSpecificCredentialCommandInput} for command's `input` shape.
 * @see {@link ResetServiceSpecificCredentialCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ResetServiceSpecificCredentialCommand = /** @class */ (function (_super) {
    __extends(ResetServiceSpecificCredentialCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ResetServiceSpecificCredentialCommand(input) {
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
    ResetServiceSpecificCredentialCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "ResetServiceSpecificCredentialCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ResetServiceSpecificCredentialRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ResetServiceSpecificCredentialResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ResetServiceSpecificCredentialCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryResetServiceSpecificCredentialCommand(input, context);
    };
    ResetServiceSpecificCredentialCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryResetServiceSpecificCredentialCommand(output, context);
    };
    return ResetServiceSpecificCredentialCommand;
}($Command));
export { ResetServiceSpecificCredentialCommand };
//# sourceMappingURL=ResetServiceSpecificCredentialCommand.js.map