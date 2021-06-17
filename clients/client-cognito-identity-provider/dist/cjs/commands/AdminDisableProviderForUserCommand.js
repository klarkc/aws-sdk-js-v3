"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminDisableProviderForUserCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const middleware_signing_1 = require("@aws-sdk/middleware-signing");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Disables the user from signing in with the specified external (SAML or social)
 *             identity provider. If the user to disable is a Cognito User Pools native username +
 *             password user, they are not permitted to use their password to sign-in. If the user to
 *             disable is a linked external IdP user, any link between that user and an existing user
 *             is removed. The next time the external user (no longer attached to the previously linked
 *                 <code>DestinationUser</code>) signs in, they must create a new user account. See
 *                 <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminLinkProviderForUser.html">AdminLinkProviderForUser</a>.</p>
 *         <p>This action is enabled only for admin access and requires developer
 *             credentials.</p>
 *         <p>The <code>ProviderName</code> must match the value specified when creating an IdP for
 *             the pool. </p>
 *         <p>To disable a native username + password user, the <code>ProviderName</code> value must
 *             be <code>Cognito</code> and the <code>ProviderAttributeName</code> must be
 *                 <code>Cognito_Subject</code>, with the <code>ProviderAttributeValue</code> being the
 *             name that is used in the user pool for the user.</p>
 *         <p>The <code>ProviderAttributeName</code> must always be <code>Cognito_Subject</code> for
 *             social identity providers. The <code>ProviderAttributeValue</code> must always be the
 *             exact subject that was used when the user was originally linked as a source user.</p>
 *         <p>For de-linking a SAML identity, there are two scenarios. If the linked identity has
 *             not yet been used to sign-in, the <code>ProviderAttributeName</code> and
 *                 <code>ProviderAttributeValue</code> must be the same values that were used for the
 *                 <code>SourceUser</code> when the identities were originally linked using <code>
 *                 AdminLinkProviderForUser</code> call. (If the linking was done with
 *                 <code>ProviderAttributeName</code> set to <code>Cognito_Subject</code>, the same
 *             applies here). However, if the user has already signed in, the
 *                 <code>ProviderAttributeName</code> must be <code>Cognito_Subject</code> and
 *                 <code>ProviderAttributeValue</code> must be the subject of the SAML
 *             assertion.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, AdminDisableProviderForUserCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, AdminDisableProviderForUserCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new AdminDisableProviderForUserCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AdminDisableProviderForUserCommandInput} for command's `input` shape.
 * @see {@link AdminDisableProviderForUserCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
class AdminDisableProviderForUserCommand extends smithy_client_1.Command {
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
        this.middlewareStack.use(middleware_signing_1.getAwsAuthPlugin(configuration));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "CognitoIdentityProviderClient";
        const commandName = "AdminDisableProviderForUserCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.AdminDisableProviderForUserRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.AdminDisableProviderForUserResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1AdminDisableProviderForUserCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1AdminDisableProviderForUserCommand(output, context);
    }
}
exports.AdminDisableProviderForUserCommand = AdminDisableProviderForUserCommand;
//# sourceMappingURL=AdminDisableProviderForUserCommand.js.map