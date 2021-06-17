"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminCreateUserCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const middleware_signing_1 = require("@aws-sdk/middleware-signing");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Creates a new user in the specified user pool.</p>
 *         <p>If <code>MessageAction</code> is not set, the default is to send a welcome message via
 *             email or phone (SMS).</p>
 *         <p>This message is based on a template that you configured in your call to create or
 *             update a user pool. This template includes your custom sign-up instructions and
 *             placeholders for user name and temporary password.</p>
 *         <p>Alternatively, you can call <code>AdminCreateUser</code> with “SUPPRESS” for the
 *                 <code>MessageAction</code> parameter, and Amazon Cognito will not send any email. </p>
 *         <p>In either case, the user will be in the <code>FORCE_CHANGE_PASSWORD</code> state until
 *             they sign in and change their password.</p>
 *         <p>
 *             <code>AdminCreateUser</code> requires developer credentials.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, AdminCreateUserCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, AdminCreateUserCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new AdminCreateUserCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AdminCreateUserCommandInput} for command's `input` shape.
 * @see {@link AdminCreateUserCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
class AdminCreateUserCommand extends smithy_client_1.Command {
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
        const commandName = "AdminCreateUserCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.AdminCreateUserRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.AdminCreateUserResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1AdminCreateUserCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1AdminCreateUserCommand(output, context);
    }
}
exports.AdminCreateUserCommand = AdminCreateUserCommand;
//# sourceMappingURL=AdminCreateUserCommand.js.map