"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteServiceLinkedRoleCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
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
class DeleteServiceLinkedRoleCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "IAMClient";
        const commandName = "DeleteServiceLinkedRoleCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DeleteServiceLinkedRoleRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DeleteServiceLinkedRoleResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryDeleteServiceLinkedRoleCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryDeleteServiceLinkedRoleCommand(output, context);
    }
}
exports.DeleteServiceLinkedRoleCommand = DeleteServiceLinkedRoleCommand;
//# sourceMappingURL=DeleteServiceLinkedRoleCommand.js.map