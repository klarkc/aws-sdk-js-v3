"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOpenIDConnectProviderCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Creates an IAM entity to describe an identity provider (IdP) that supports <a href="http://openid.net/connect/">OpenID Connect (OIDC)</a>.</p>
 *         <p>The OIDC provider that you create with this operation can be used as a principal in a
 *             role's trust policy. Such a policy establishes a trust relationship between AWS and
 *             the OIDC provider.</p>
 *         <p>If you are using an OIDC identity provider from Google, Facebook, or Amazon Cognito,
 *             you don't need to create a separate IAM identity provider. These OIDC identity
 *             providers are already built-in to AWS and are available for your use. Instead, you can
 *             move directly to creating new roles using your identity provider. To learn more, see
 *                 <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-idp_oidc.html">Creating a role for web identity or OpenID connect federation</a> in the
 *                 <i>IAM User Guide</i>.</p>
 *         <p>When you create the IAM OIDC provider, you specify the following:</p>
 *         <ul>
 *             <li>
 *                 <p>The URL of the OIDC identity provider (IdP) to trust</p>
 *             </li>
 *             <li>
 *                 <p>A list of client IDs (also known as audiences) that identify the application
 *                     or applications that are allowed to authenticate using the OIDC provider</p>
 *             </li>
 *             <li>
 *                 <p>A list of thumbprints of one or more server certificates that the IdP
 *                     uses</p>
 *             </li>
 *          </ul>
 *         <p>You get all of this information from the OIDC IdP that you want to use to access
 *             AWS.</p>
 *         <note>
 *             <p>The trust for the OIDC provider is derived from the IAM provider that this
 *                 operation creates. Therefore, it is best to limit access to the <a>CreateOpenIDConnectProvider</a> operation to highly privileged
 *                 users.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, CreateOpenIDConnectProviderCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, CreateOpenIDConnectProviderCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new CreateOpenIDConnectProviderCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateOpenIDConnectProviderCommandInput} for command's `input` shape.
 * @see {@link CreateOpenIDConnectProviderCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CreateOpenIDConnectProviderCommand extends smithy_client_1.Command {
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
        const commandName = "CreateOpenIDConnectProviderCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CreateOpenIDConnectProviderRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CreateOpenIDConnectProviderResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryCreateOpenIDConnectProviderCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryCreateOpenIDConnectProviderCommand(output, context);
    }
}
exports.CreateOpenIDConnectProviderCommand = CreateOpenIDConnectProviderCommand;
//# sourceMappingURL=CreateOpenIDConnectProviderCommand.js.map