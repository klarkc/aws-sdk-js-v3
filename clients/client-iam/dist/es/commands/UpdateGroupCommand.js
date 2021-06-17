import { __extends } from "tslib";
import { UpdateGroupRequest } from "../models/models_1";
import { deserializeAws_queryUpdateGroupCommand, serializeAws_queryUpdateGroupCommand } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the name and/or the path of the specified IAM group.</p>
 *         <important>
 *             <p> You should understand the implications of changing a group's path or name. For
 *                 more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_WorkingWithGroupsAndUsers.html">Renaming users and
 *                     groups</a> in the <i>IAM User Guide</i>.</p>
 *         </important>
 *         <note>
 *             <p>The person making the request (the principal), must have permission to change the
 *                 role group with the old name and the new name. For example, to change the group
 *                 named <code>Managers</code> to <code>MGRs</code>, the principal must have a policy
 *                 that allows them to update both groups. If the principal has permission to update
 *                 the <code>Managers</code> group, but not the <code>MGRs</code> group, then the
 *                 update fails. For more information about permissions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html">Access management</a>.
 *             </p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, UpdateGroupCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, UpdateGroupCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new UpdateGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateGroupCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateGroupCommand = /** @class */ (function (_super) {
    __extends(UpdateGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateGroupCommand(input) {
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
    UpdateGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "UpdateGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryUpdateGroupCommand(input, context);
    };
    UpdateGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryUpdateGroupCommand(output, context);
    };
    return UpdateGroupCommand;
}($Command));
export { UpdateGroupCommand };
//# sourceMappingURL=UpdateGroupCommand.js.map