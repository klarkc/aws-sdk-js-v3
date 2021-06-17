import { __extends } from "tslib";
import { DeleteServiceLinkedRoleRequest, DeleteServiceLinkedRoleResponse } from "../models/models_0";
import { deserializeAws_queryDeleteServiceLinkedRoleCommand, serializeAws_queryDeleteServiceLinkedRoleCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Submits a service-linked role deletion request and returns a
 *                 <code>DeletionTaskId</code>, which you can use to check the status of the deletion.
 *             Before you call this operation, confirm that the role has no active sessions and that
 *             any resources used by the role in the linked service are deleted. If you call this
 *             operation more than once for the same service-linked role and an earlier deletion task
 *             is not complete, then the <code>DeletionTaskId</code> of the earlier request is
 *             returned.</p>
 *         <p>If you submit a deletion request for a service-linked role whose linked service is
 *             still accessing a resource, then the deletion task fails. If it fails, the <a>GetServiceLinkedRoleDeletionStatus</a> operation returns the reason for the
 *             failure, usually including the resources that must be deleted. To delete the
 *             service-linked role, you must first remove those resources from the linked service and
 *             then submit the deletion request again. Resources are specific to the service that is
 *             linked to the role. For more information about removing resources from a service, see
 *             the <a href="http://docs.aws.amazon.com/">AWS documentation</a> for your
 *             service.</p>
 *         <p>For more information about service-linked roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html#iam-term-service-linked-role">Roles terms and concepts: AWS service-linked role</a> in the
 *                 <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, DeleteServiceLinkedRoleCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, DeleteServiceLinkedRoleCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new DeleteServiceLinkedRoleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteServiceLinkedRoleCommandInput} for command's `input` shape.
 * @see {@link DeleteServiceLinkedRoleCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteServiceLinkedRoleCommand = /** @class */ (function (_super) {
    __extends(DeleteServiceLinkedRoleCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteServiceLinkedRoleCommand(input) {
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
    DeleteServiceLinkedRoleCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "DeleteServiceLinkedRoleCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteServiceLinkedRoleRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteServiceLinkedRoleResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteServiceLinkedRoleCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDeleteServiceLinkedRoleCommand(input, context);
    };
    DeleteServiceLinkedRoleCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDeleteServiceLinkedRoleCommand(output, context);
    };
    return DeleteServiceLinkedRoleCommand;
}($Command));
export { DeleteServiceLinkedRoleCommand };
//# sourceMappingURL=DeleteServiceLinkedRoleCommand.js.map