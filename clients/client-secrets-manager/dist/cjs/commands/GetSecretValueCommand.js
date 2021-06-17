"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetSecretValueCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Retrieves the contents of the encrypted fields <code>SecretString</code> or
 *         <code>SecretBinary</code> from the specified version of a secret, whichever contains
 *       content.</p>
 *          <p>
 *             <b>Minimum permissions</b>
 *          </p>
 *          <p>To run this command, you must have the following permissions:</p>
 *          <ul>
 *             <li>
 *                <p>secretsmanager:GetSecretValue</p>
 *             </li>
 *             <li>
 *                <p>kms:Decrypt - required only if you use a customer-managed AWS KMS key to encrypt the
 *           secret. You do not need this permission to use the account's default AWS managed CMK for
 *           Secrets Manager.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Related operations</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>To create a new version of the secret with different encrypted information, use <a>PutSecretValue</a>.</p>
 *             </li>
 *             <li>
 *                <p>To retrieve the non-encrypted details for the secret, use <a>DescribeSecret</a>.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecretsManagerClient, GetSecretValueCommand } from "@aws-sdk/client-secrets-manager"; // ES Modules import
 * // const { SecretsManagerClient, GetSecretValueCommand } = require("@aws-sdk/client-secrets-manager"); // CommonJS import
 * const client = new SecretsManagerClient(config);
 * const command = new GetSecretValueCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSecretValueCommandInput} for command's `input` shape.
 * @see {@link GetSecretValueCommandOutput} for command's `response` shape.
 * @see {@link SecretsManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
class GetSecretValueCommand extends smithy_client_1.Command {
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
        const commandName = "GetSecretValueCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.GetSecretValueRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.GetSecretValueResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1GetSecretValueCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1GetSecretValueCommand(output, context);
    }
}
exports.GetSecretValueCommand = GetSecretValueCommand;
//# sourceMappingURL=GetSecretValueCommand.js.map