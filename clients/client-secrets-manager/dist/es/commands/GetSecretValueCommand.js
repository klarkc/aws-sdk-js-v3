import { __extends } from "tslib";
import { GetSecretValueRequest, GetSecretValueResponse } from "../models/models_0";
import { deserializeAws_json1_1GetSecretValueCommand, serializeAws_json1_1GetSecretValueCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var GetSecretValueCommand = /** @class */ (function (_super) {
    __extends(GetSecretValueCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetSecretValueCommand(input) {
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
    GetSecretValueCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SecretsManagerClient";
        var commandName = "GetSecretValueCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetSecretValueRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetSecretValueResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetSecretValueCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetSecretValueCommand(input, context);
    };
    GetSecretValueCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetSecretValueCommand(output, context);
    };
    return GetSecretValueCommand;
}($Command));
export { GetSecretValueCommand };
//# sourceMappingURL=GetSecretValueCommand.js.map