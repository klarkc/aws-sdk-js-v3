"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSAMLProviderCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Creates an IAM resource that describes an identity provider (IdP) that supports SAML
 *             2.0.</p>
 *         <p>The SAML provider resource that you create with this operation can be used as a
 *             principal in an IAM role's trust policy. Such a policy can enable federated users who
 *             sign in using the SAML IdP to assume the role. You can create an IAM role that
 *             supports Web-based single sign-on (SSO) to the AWS Management Console or one that supports API access
 *             to AWS.</p>
 *         <p>When you create the SAML provider resource, you upload a SAML metadata document that
 *             you get from your IdP. That document includes the issuer's name, expiration information,
 *             and keys that can be used to validate the SAML authentication response (assertions) that
 *             the IdP sends. You must generate the metadata document using the identity management
 *             software that is used as your organization's IdP.</p>
 *         <note>
 *             <p> This operation requires <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4</a>.</p>
 *         </note>
 *         <p> For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_enable-console-saml.html">Enabling SAML 2.0
 *                 federated users to access the AWS Management Console</a> and <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_saml.html">About SAML 2.0-based
 *                 federation</a> in the <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, CreateSAMLProviderCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, CreateSAMLProviderCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new CreateSAMLProviderCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateSAMLProviderCommandInput} for command's `input` shape.
 * @see {@link CreateSAMLProviderCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CreateSAMLProviderCommand extends smithy_client_1.Command {
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
        const commandName = "CreateSAMLProviderCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CreateSAMLProviderRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CreateSAMLProviderResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryCreateSAMLProviderCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryCreateSAMLProviderCommand(output, context);
    }
}
exports.CreateSAMLProviderCommand = CreateSAMLProviderCommand;
//# sourceMappingURL=CreateSAMLProviderCommand.js.map