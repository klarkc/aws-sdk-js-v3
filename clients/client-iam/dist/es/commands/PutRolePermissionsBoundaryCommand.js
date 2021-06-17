import { __extends } from "tslib";
import { PutRolePermissionsBoundaryRequest } from "../models/models_0";
import { deserializeAws_queryPutRolePermissionsBoundaryCommand, serializeAws_queryPutRolePermissionsBoundaryCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Adds or updates the policy that is specified as the IAM role's permissions boundary.
 *             You can use an AWS managed policy or a customer managed policy to set the boundary for
 *             a role. Use the boundary to control the maximum permissions that the role can have.
 *             Setting a permissions boundary is an advanced feature that can affect the permissions
 *             for the role.</p>
 *         <p>You cannot set the boundary for a service-linked role. </p>
 *         <important>
 *             <p>Policies used as permissions boundaries do not provide permissions. You must also
 *                 attach a permissions policy to the role. To learn how the effective permissions for
 *                 a role are evaluated, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html">IAM JSON policy
 *                     evaluation logic</a> in the IAM User Guide. </p>
 *         </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, PutRolePermissionsBoundaryCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, PutRolePermissionsBoundaryCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new PutRolePermissionsBoundaryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutRolePermissionsBoundaryCommandInput} for command's `input` shape.
 * @see {@link PutRolePermissionsBoundaryCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutRolePermissionsBoundaryCommand = /** @class */ (function (_super) {
    __extends(PutRolePermissionsBoundaryCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutRolePermissionsBoundaryCommand(input) {
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
    PutRolePermissionsBoundaryCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "PutRolePermissionsBoundaryCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutRolePermissionsBoundaryRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutRolePermissionsBoundaryCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryPutRolePermissionsBoundaryCommand(input, context);
    };
    PutRolePermissionsBoundaryCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryPutRolePermissionsBoundaryCommand(output, context);
    };
    return PutRolePermissionsBoundaryCommand;
}($Command));
export { PutRolePermissionsBoundaryCommand };
//# sourceMappingURL=PutRolePermissionsBoundaryCommand.js.map