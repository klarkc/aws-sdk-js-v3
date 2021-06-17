"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateIdentityPoolCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const middleware_signing_1 = require("@aws-sdk/middleware-signing");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Creates a new identity pool. The identity pool is a store of user identity
 *          information that is specific to your AWS account. The keys for <code>SupportedLoginProviders</code> are as follows:</p>
 *
 *          <ul>
 *             <li>
 *                <p>Facebook: <code>graph.facebook.com</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>Google: <code>accounts.google.com</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>Amazon: <code>www.amazon.com</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>Twitter: <code>api.twitter.com</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>Digits: <code>www.digits.com</code>
 *                </p>
 *             </li>
 *          </ul>
 *
 *          <p>You must use AWS Developer credentials to call this API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityClient, CreateIdentityPoolCommand } from "@aws-sdk/client-cognito-identity"; // ES Modules import
 * // const { CognitoIdentityClient, CreateIdentityPoolCommand } = require("@aws-sdk/client-cognito-identity"); // CommonJS import
 * const client = new CognitoIdentityClient(config);
 * const command = new CreateIdentityPoolCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateIdentityPoolCommandInput} for command's `input` shape.
 * @see {@link CreateIdentityPoolCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CreateIdentityPoolCommand extends smithy_client_1.Command {
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
        const clientName = "CognitoIdentityClient";
        const commandName = "CreateIdentityPoolCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CreateIdentityPoolInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.IdentityPool.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1CreateIdentityPoolCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1CreateIdentityPoolCommand(output, context);
    }
}
exports.CreateIdentityPoolCommand = CreateIdentityPoolCommand;
//# sourceMappingURL=CreateIdentityPoolCommand.js.map