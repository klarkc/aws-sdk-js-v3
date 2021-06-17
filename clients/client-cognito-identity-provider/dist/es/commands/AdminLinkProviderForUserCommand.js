import { __extends } from "tslib";
import { AdminLinkProviderForUserRequest, AdminLinkProviderForUserResponse } from "../models/models_0";
import { deserializeAws_json1_1AdminLinkProviderForUserCommand, serializeAws_json1_1AdminLinkProviderForUserCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var AdminLinkProviderForUserCommand = /** @class */ (function (_super) {
    __extends(AdminLinkProviderForUserCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AdminLinkProviderForUserCommand(input) {
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
    AdminLinkProviderForUserCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getAwsAuthPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CognitoIdentityProviderClient";
        var commandName = "AdminLinkProviderForUserCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AdminLinkProviderForUserRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AdminLinkProviderForUserResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AdminLinkProviderForUserCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1AdminLinkProviderForUserCommand(input, context);
    };
    AdminLinkProviderForUserCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1AdminLinkProviderForUserCommand(output, context);
    };
    return AdminLinkProviderForUserCommand;
}($Command));
export { AdminLinkProviderForUserCommand };
//# sourceMappingURL=AdminLinkProviderForUserCommand.js.map