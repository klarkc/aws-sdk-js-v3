import { __extends } from "tslib";
import { PutUserPermissionsBoundaryRequest } from "../models/models_0";
import { deserializeAws_queryPutUserPermissionsBoundaryCommand, serializeAws_queryPutUserPermissionsBoundaryCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Adds or updates the policy that is specified as the IAM user's permissions boundary.
 *             You can use an AWS managed policy or a customer managed policy to set the boundary for
 *             a user. Use the boundary to control the maximum permissions that the user can have.
 *             Setting a permissions boundary is an advanced feature that can affect the permissions
 *             for the user.</p>
 *         <important>
 *             <p>Policies that are used as permissions boundaries do not provide permissions. You
 *                 must also attach a permissions policy to the user. To learn how the effective
 *                 permissions for a user are evaluated, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html">IAM JSON policy
 *                     evaluation logic</a> in the IAM User Guide. </p>
 *         </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, PutUserPermissionsBoundaryCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, PutUserPermissionsBoundaryCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new PutUserPermissionsBoundaryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutUserPermissionsBoundaryCommandInput} for command's `input` shape.
 * @see {@link PutUserPermissionsBoundaryCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutUserPermissionsBoundaryCommand = /** @class */ (function (_super) {
    __extends(PutUserPermissionsBoundaryCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutUserPermissionsBoundaryCommand(input) {
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
    PutUserPermissionsBoundaryCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "PutUserPermissionsBoundaryCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutUserPermissionsBoundaryRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutUserPermissionsBoundaryCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryPutUserPermissionsBoundaryCommand(input, context);
    };
    PutUserPermissionsBoundaryCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryPutUserPermissionsBoundaryCommand(output, context);
    };
    return PutUserPermissionsBoundaryCommand;
}($Command));
export { PutUserPermissionsBoundaryCommand };
//# sourceMappingURL=PutUserPermissionsBoundaryCommand.js.map