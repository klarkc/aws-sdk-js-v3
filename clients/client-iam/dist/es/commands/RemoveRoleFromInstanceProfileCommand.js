import { __extends } from "tslib";
import { RemoveRoleFromInstanceProfileRequest } from "../models/models_0";
import { deserializeAws_queryRemoveRoleFromInstanceProfileCommand, serializeAws_queryRemoveRoleFromInstanceProfileCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes the specified IAM role from the specified EC2 instance profile.</p>
 *         <important>
 *             <p>Make sure that you do not have any Amazon EC2 instances running with the role you
 *                 are about to remove from the instance profile. Removing a role from an instance
 *                 profile that is associated with a running instance might break any applications
 *                 running on the instance.</p>
 *         </important>
 *         <p> For more information about IAM roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/WorkingWithRoles.html">Working with roles</a>. For more
 *             information about instance profiles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AboutInstanceProfiles.html">About instance
 *             profiles</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, RemoveRoleFromInstanceProfileCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, RemoveRoleFromInstanceProfileCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new RemoveRoleFromInstanceProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RemoveRoleFromInstanceProfileCommandInput} for command's `input` shape.
 * @see {@link RemoveRoleFromInstanceProfileCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RemoveRoleFromInstanceProfileCommand = /** @class */ (function (_super) {
    __extends(RemoveRoleFromInstanceProfileCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RemoveRoleFromInstanceProfileCommand(input) {
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
    RemoveRoleFromInstanceProfileCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "RemoveRoleFromInstanceProfileCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RemoveRoleFromInstanceProfileRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RemoveRoleFromInstanceProfileCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryRemoveRoleFromInstanceProfileCommand(input, context);
    };
    RemoveRoleFromInstanceProfileCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryRemoveRoleFromInstanceProfileCommand(output, context);
    };
    return RemoveRoleFromInstanceProfileCommand;
}($Command));
export { RemoveRoleFromInstanceProfileCommand };
//# sourceMappingURL=RemoveRoleFromInstanceProfileCommand.js.map