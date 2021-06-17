"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeletePolicyCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Deletes the specified managed policy.</p>
 *         <p>Before you can delete a managed policy, you must first detach the policy from all
 *             users, groups, and roles that it is attached to. In addition, you must delete all the
 *             policy's versions. The following steps describe the process for deleting a managed
 *             policy:</p>
 *         <ul>
 *             <li>
 *                 <p>Detach the policy from all users, groups, and roles that the policy is
 *                     attached to, using <a>DetachUserPolicy</a>, <a>DetachGroupPolicy</a>, or <a>DetachRolePolicy</a>. To
 *                     list all the users, groups, and roles that a policy is attached to, use <a>ListEntitiesForPolicy</a>.</p>
 *             </li>
 *             <li>
 *                 <p>Delete all versions of the policy using <a>DeletePolicyVersion</a>.
 *                     To list the policy's versions, use <a>ListPolicyVersions</a>. You
 *                     cannot use <a>DeletePolicyVersion</a> to delete the version that is
 *                     marked as the default version. You delete the policy's default version in the
 *                     next step of the process.</p>
 *             </li>
 *             <li>
 *                 <p>Delete the policy (this automatically deletes the policy's default version)
 *                     using this operation.</p>
 *             </li>
 *          </ul>
 *         <p>For information about managed policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline
 *                 policies</a> in the <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, DeletePolicyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, DeletePolicyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new DeletePolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeletePolicyCommandInput} for command's `input` shape.
 * @see {@link DeletePolicyCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DeletePolicyCommand extends smithy_client_1.Command {
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
        const commandName = "DeletePolicyCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DeletePolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: (output) => output,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryDeletePolicyCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryDeletePolicyCommand(output, context);
    }
}
exports.DeletePolicyCommand = DeletePolicyCommand;
//# sourceMappingURL=DeletePolicyCommand.js.map