"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminLinkProviderForUserCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const middleware_signing_1 = require("@aws-sdk/middleware-signing");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Links an existing user account in a user pool (<code>DestinationUser</code>) to an
 *             identity from an external identity provider (<code>SourceUser</code>) based on a
 *             specified attribute name and value from the external identity provider. This allows you
 *             to create a link from the existing user account to an external federated user identity
 *             that has not yet been used to sign in, so that the federated user identity can be used
 *             to sign in as the existing user account. </p>
 *         <p> For example, if there is an existing user with a username and password, this API
 *             links that user to a federated user identity, so that when the federated user identity
 *             is used, the user signs in as the existing user account. </p>
 *         <note>
 *             <p>The maximum number of federated identities linked to a user is 5.</p>
 *         </note>
 *         <important>
 *             <p>Because this API allows a user with an external federated identity to sign in as
 *                 an existing user in the user pool, it is critical that it only be used with external
 *                 identity providers and provider attributes that have been trusted by the application
 *                 owner.</p>
 *         </important>
 *
 *         <p>This action is enabled only for admin access and requires developer
 *             credentials.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, AdminLinkProviderForUserCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, AdminLinkProviderForUserCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new AdminLinkProviderForUserCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AdminLinkProviderForUserCommandInput} for command's `input` shape.
 * @see {@link AdminLinkProviderForUserCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
class AdminLinkProviderForUserCommand extends smithy_client_1.Command {
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
        const commandName = "AdminLinkProviderForUserCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.AdminLinkProviderForUserRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.AdminLinkProviderForUserResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1AdminLinkProviderForUserCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1AdminLinkProviderForUserCommand(output, context);
    }
}
exports.AdminLinkProviderForUserCommand = AdminLinkProviderForUserCommand;
//# sourceMappingURL=AdminLinkProviderForUserCommand.js.map