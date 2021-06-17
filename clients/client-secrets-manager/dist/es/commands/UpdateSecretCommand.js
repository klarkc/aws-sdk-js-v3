import { __extends } from "tslib";
import { UpdateSecretRequest, UpdateSecretResponse } from "../models/models_0";
import { deserializeAws_json1_1UpdateSecretCommand, serializeAws_json1_1UpdateSecretCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Modifies many of the details of the specified secret. If you include a
 *         <code>ClientRequestToken</code> and <i>either</i>
 *             <code>SecretString</code> or <code>SecretBinary</code> then it also creates a new version
 *       attached to the secret.</p>
 *          <p>To modify the rotation configuration of a secret, use <a>RotateSecret</a>
 *       instead.</p>
 *          <note>
 *             <p>The Secrets Manager console uses only the <code>SecretString</code> parameter and therefore limits
 *         you to encrypting and storing only a text string. To encrypt and store binary data as part
 *         of the version of a secret, you must use either the AWS CLI or one of the AWS
 *         SDKs.</p>
 *          </note>
 *          <ul>
 *             <li>
 *                <p>If a version with a <code>VersionId</code> with the same value as the
 *             <code>ClientRequestToken</code> parameter already exists, the operation results in an
 *           error. You cannot modify an existing version, you can only create a new version.</p>
 *             </li>
 *             <li>
 *                <p>If you include <code>SecretString</code> or <code>SecretBinary</code> to create a new
 *           secret version, Secrets Manager automatically attaches the staging label <code>AWSCURRENT</code> to the new
 *           version. </p>
 *             </li>
 *          </ul>
 *          <note>
 *             <ul>
 *                <li>
 *                   <p>If you call an operation to encrypt or decrypt the <code>SecretString</code>
 *           or <code>SecretBinary</code> for a secret in the same account as the calling user and that
 *           secret doesn't specify a AWS KMS encryption key, Secrets Manager uses the account's default
 *           AWS managed customer master key (CMK) with the alias <code>aws/secretsmanager</code>. If this key
 *           doesn't already exist in your account then Secrets Manager creates it for you automatically. All
 *           users and roles in the same AWS account automatically have access to use the default CMK.
 *           Note that if an Secrets Manager API call results in AWS creating the account's
 *           AWS-managed CMK, it can result in a one-time significant delay in returning the
 *           result.</p>
 *                </li>
 *                <li>
 *                   <p>If the secret resides in a different AWS account from the credentials calling an API that
 *           requires encryption or decryption of the secret value then you must create and use a custom
 *           AWS KMS CMK because you can't access the default CMK for the account using credentials
 *           from a different AWS account. Store the ARN of the CMK in the secret when you create the
 *           secret or when you update it by including it in the <code>KMSKeyId</code>. If you call an
 *           API that must encrypt or decrypt <code>SecretString</code> or <code>SecretBinary</code>
 *           using credentials from a different account then the AWS KMS key policy must grant cross-account
 *           access to that other account's user or role for both the kms:GenerateDataKey and
 *           kms:Decrypt operations.</p>
 *                </li>
 *             </ul>
 *          </note>
 *          <p>
 *             <b>Minimum permissions</b>
 *          </p>
 *          <p>To run this command, you must have the following permissions:</p>
 *          <ul>
 *             <li>
 *                <p>secretsmanager:UpdateSecret</p>
 *             </li>
 *             <li>
 *                <p>kms:GenerateDataKey - needed only if you use a custom AWS KMS key to encrypt the secret.
 *           You do not need this permission to use the account's AWS managed CMK for
 *           Secrets Manager.</p>
 *             </li>
 *             <li>
 *                <p>kms:Decrypt - needed only if you use a custom AWS KMS key to encrypt the secret. You do
 *           not need this permission to use the account's AWS managed CMK for Secrets Manager.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Related operations</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>To create a new secret, use <a>CreateSecret</a>.</p>
 *             </li>
 *             <li>
 *                <p>To add only a new version to an existing secret, use <a>PutSecretValue</a>.</p>
 *             </li>
 *             <li>
 *                <p>To get the details for a secret, use <a>DescribeSecret</a>.</p>
 *             </li>
 *             <li>
 *                <p>To list the versions contained in a secret, use <a>ListSecretVersionIds</a>.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecretsManagerClient, UpdateSecretCommand } from "@aws-sdk/client-secrets-manager"; // ES Modules import
 * // const { SecretsManagerClient, UpdateSecretCommand } = require("@aws-sdk/client-secrets-manager"); // CommonJS import
 * const client = new SecretsManagerClient(config);
 * const command = new UpdateSecretCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateSecretCommandInput} for command's `input` shape.
 * @see {@link UpdateSecretCommandOutput} for command's `response` shape.
 * @see {@link SecretsManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateSecretCommand = /** @class */ (function (_super) {
    __extends(UpdateSecretCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateSecretCommand(input) {
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
    UpdateSecretCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SecretsManagerClient";
        var commandName = "UpdateSecretCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateSecretRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateSecretResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateSecretCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateSecretCommand(input, context);
    };
    UpdateSecretCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateSecretCommand(output, context);
    };
    return UpdateSecretCommand;
}($Command));
export { UpdateSecretCommand };
//# sourceMappingURL=UpdateSecretCommand.js.map