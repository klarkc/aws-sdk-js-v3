import { __extends } from "tslib";
import { CreateSAMLProviderRequest, CreateSAMLProviderResponse } from "../models/models_0";
import { deserializeAws_queryCreateSAMLProviderCommand, serializeAws_queryCreateSAMLProviderCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var CreateSAMLProviderCommand = /** @class */ (function (_super) {
    __extends(CreateSAMLProviderCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateSAMLProviderCommand(input) {
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
    CreateSAMLProviderCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "CreateSAMLProviderCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateSAMLProviderRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateSAMLProviderResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateSAMLProviderCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryCreateSAMLProviderCommand(input, context);
    };
    CreateSAMLProviderCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryCreateSAMLProviderCommand(output, context);
    };
    return CreateSAMLProviderCommand;
}($Command));
export { CreateSAMLProviderCommand };
//# sourceMappingURL=CreateSAMLProviderCommand.js.map