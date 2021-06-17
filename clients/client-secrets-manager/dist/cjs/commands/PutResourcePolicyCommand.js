"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PutResourcePolicyCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Attaches the contents of the specified resource-based permission policy to a secret. A
 *       resource-based policy is optional. Alternatively, you can use IAM identity-based policies
 *       that specify the secret's Amazon Resource Name (ARN) in the policy statement's
 *         <code>Resources</code> element. You can also use a combination of both identity-based and
 *       resource-based policies. The affected users and roles receive the permissions that are
 *       permitted by all of the relevant policies. For more information, see <a href="http://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access_resource-based-policies.html">Using Resource-Based
 *         Policies for AWS Secrets Manager</a>. For the complete description of the AWS policy syntax and
 *       grammar, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies.html">IAM JSON
 *         Policy Reference</a> in the <i>IAM User Guide</i>.</p>
 *          <p>
 *             <b>Minimum permissions</b>
 *          </p>
 *          <p>To run this command, you must have the following permissions:</p>
 *          <ul>
 *             <li>
 *                <p>secretsmanager:PutResourcePolicy</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Related operations</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>To retrieve the resource policy attached to a secret, use <a>GetResourcePolicy</a>.</p>
 *             </li>
 *             <li>
 *                <p>To delete the resource-based policy attached to a secret, use <a>DeleteResourcePolicy</a>.</p>
 *             </li>
 *             <li>
 *                <p>To list all of the currently available secrets, use <a>ListSecrets</a>.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecretsManagerClient, PutResourcePolicyCommand } from "@aws-sdk/client-secrets-manager"; // ES Modules import
 * // const { SecretsManagerClient, PutResourcePolicyCommand } = require("@aws-sdk/client-secrets-manager"); // CommonJS import
 * const client = new SecretsManagerClient(config);
 * const command = new PutResourcePolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutResourcePolicyCommandInput} for command's `input` shape.
 * @see {@link PutResourcePolicyCommandOutput} for command's `response` shape.
 * @see {@link SecretsManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
class PutResourcePolicyCommand extends smithy_client_1.Command {
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
        const clientName = "SecretsManagerClient";
        const commandName = "PutResourcePolicyCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.PutResourcePolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.PutResourcePolicyResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1PutResourcePolicyCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1PutResourcePolicyCommand(output, context);
    }
}
exports.PutResourcePolicyCommand = PutResourcePolicyCommand;
//# sourceMappingURL=PutResourcePolicyCommand.js.map