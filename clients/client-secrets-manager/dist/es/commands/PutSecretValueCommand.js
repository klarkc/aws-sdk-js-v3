import { __extends } from "tslib";
import { PutSecretValueRequest, PutSecretValueResponse } from "../models/models_0";
import { deserializeAws_json1_1PutSecretValueCommand, serializeAws_json1_1PutSecretValueCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Stores a new encrypted secret value in the specified secret. To do this, the operation
 *       creates a new version and attaches it to the secret. The version can contain a new
 *         <code>SecretString</code> value or a new <code>SecretBinary</code> value. You can also
 *       specify the staging labels that are initially attached to the new version.</p>
 *          <note>
 *             <p>The Secrets Manager console uses only the <code>SecretString</code> field. To add binary data to a
 *         secret with the <code>SecretBinary</code> field you must use the AWS CLI or one of the
 *         AWS SDKs.</p>
 *          </note>
 *          <ul>
 *             <li>
 *                <p>If this operation creates the first version for the secret then Secrets Manager
 *           automatically attaches the staging label <code>AWSCURRENT</code> to the new version.</p>
 *             </li>
 *             <li>
 *                <p>If you do not specify a value for VersionStages then Secrets Manager automatically
 *           moves the staging label <code>AWSCURRENT</code> to this new version.</p>
 *             </li>
 *             <li>
 *                <p>If this operation moves the staging label <code>AWSCURRENT</code> from another version to this
 *           version, then Secrets Manager also automatically moves the staging label <code>AWSPREVIOUS</code> to
 *           the version that <code>AWSCURRENT</code> was removed from.</p>
 *             </li>
 *             <li>
 *                <p>This operation is idempotent. If a version with a <code>VersionId</code> with the same
 *           value as the <code>ClientRequestToken</code> parameter already exists and you specify the
 *           same secret data, the operation succeeds but does nothing. However, if the secret data is
 *           different, then the operation fails because you cannot modify an existing version; you can
 *           only create new ones.</p>
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
 *                <p>secretsmanager:PutSecretValue</p>
 *             </li>
 *             <li>
 *                <p>kms:GenerateDataKey - needed only if you use a customer-managed AWS KMS key to encrypt
 *           the secret. You do not need this permission to use the account's default AWS managed CMK
 *           for Secrets Manager.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Related operations</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>To retrieve the encrypted value you store in the version of a secret, use <a>GetSecretValue</a>.</p>
 *             </li>
 *             <li>
 *                <p>To create a secret, use <a>CreateSecret</a>.</p>
 *             </li>
 *             <li>
 *                <p>To get the details for a secret, use <a>DescribeSecret</a>.</p>
 *             </li>
 *             <li>
 *                <p>To list the versions attached to a secret, use <a>ListSecretVersionIds</a>.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecretsManagerClient, PutSecretValueCommand } from "@aws-sdk/client-secrets-manager"; // ES Modules import
 * // const { SecretsManagerClient, PutSecretValueCommand } = require("@aws-sdk/client-secrets-manager"); // CommonJS import
 * const client = new SecretsManagerClient(config);
 * const command = new PutSecretValueCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutSecretValueCommandInput} for command's `input` shape.
 * @see {@link PutSecretValueCommandOutput} for command's `response` shape.
 * @see {@link SecretsManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutSecretValueCommand = /** @class */ (function (_super) {
    __extends(PutSecretValueCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutSecretValueCommand(input) {
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
    PutSecretValueCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SecretsManagerClient";
        var commandName = "PutSecretValueCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutSecretValueRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PutSecretValueResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutSecretValueCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1PutSecretValueCommand(input, context);
    };
    PutSecretValueCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1PutSecretValueCommand(output, context);
    };
    return PutSecretValueCommand;
}($Command));
export { PutSecretValueCommand };
//# sourceMappingURL=PutSecretValueCommand.js.map