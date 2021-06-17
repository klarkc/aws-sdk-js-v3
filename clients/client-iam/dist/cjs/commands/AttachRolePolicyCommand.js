"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttachRolePolicyCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Attaches the specified managed policy to the specified IAM role. When you attach a
 *             managed policy to a role, the managed policy becomes part of the role's permission
 *             (access) policy.</p>
 *         <note>
 *             <p>You cannot use a managed policy as the role's trust policy. The role's trust
 *                 policy is created at the same time as the role, using <a>CreateRole</a>.
 *                 You can update a role's trust policy using <a>UpdateAssumeRolePolicy</a>.</p>
 *         </note>
 *         <p>Use this operation to attach a <i>managed</i> policy to a role. To embed
 *             an inline policy in a role, use <a>PutRolePolicy</a>. For more information
 *             about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline
 *                 policies</a> in the <i>IAM User Guide</i>.</p>
 *         <p>As a best practice, you can validate your IAM policies.
 *      To learn more, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_policy-validator.html">Validating IAM policies</a>
 *             in the <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, AttachRolePolicyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, AttachRolePolicyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new AttachRolePolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AttachRolePolicyCommandInput} for command's `input` shape.
 * @see {@link AttachRolePolicyCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
class AttachRolePolicyCommand extends smithy_client_1.Command {
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
        const commandName = "AttachRolePolicyCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.AttachRolePolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: (output) => output,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryAttachRolePolicyCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryAttachRolePolicyCommand(output, context);
    }
}
exports.AttachRolePolicyCommand = AttachRolePolicyCommand;
//# sourceMappingURL=AttachRolePolicyCommand.js.map