import { __extends } from "tslib";
import { UpdateAssumeRolePolicyRequest } from "../models/models_1";
import { deserializeAws_queryUpdateAssumeRolePolicyCommand, serializeAws_queryUpdateAssumeRolePolicyCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the policy that grants an IAM entity permission to assume a role. This is
 *             typically referred to as the "role trust policy". For more information about roles, see
 *                 <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/roles-toplevel.html">Using roles to
 *                 delegate permissions and federate identities</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, UpdateAssumeRolePolicyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, UpdateAssumeRolePolicyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new UpdateAssumeRolePolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateAssumeRolePolicyCommandInput} for command's `input` shape.
 * @see {@link UpdateAssumeRolePolicyCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateAssumeRolePolicyCommand = /** @class */ (function (_super) {
    __extends(UpdateAssumeRolePolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateAssumeRolePolicyCommand(input) {
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
    UpdateAssumeRolePolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "UpdateAssumeRolePolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateAssumeRolePolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateAssumeRolePolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryUpdateAssumeRolePolicyCommand(input, context);
    };
    UpdateAssumeRolePolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryUpdateAssumeRolePolicyCommand(output, context);
    };
    return UpdateAssumeRolePolicyCommand;
}($Command));
export { UpdateAssumeRolePolicyCommand };
//# sourceMappingURL=UpdateAssumeRolePolicyCommand.js.map