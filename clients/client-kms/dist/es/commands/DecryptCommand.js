import { __extends } from "tslib";
import { DecryptRequest, DecryptResponse } from "../models/models_0";
import { deserializeAws_json1_1DecryptCommand, serializeAws_json1_1DecryptCommand } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Decrypts ciphertext that was encrypted by a AWS KMS customer master key (CMK) using any of
 *       the following operations:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>Encrypt</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GenerateDataKey</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GenerateDataKeyPair</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GenerateDataKeyWithoutPlaintext</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GenerateDataKeyPairWithoutPlaintext</a>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>You can use this operation to decrypt ciphertext that was encrypted under a symmetric or
 *       asymmetric CMK. When the CMK is asymmetric, you must specify the CMK and the encryption
 *       algorithm that was used to encrypt the ciphertext. For information about symmetric and asymmetric CMKs, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">Using Symmetric and Asymmetric CMKs</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
 *          <p>The Decrypt operation also decrypts ciphertext that was encrypted outside of AWS KMS by the
 *       public key in an AWS KMS asymmetric CMK. However, it cannot decrypt ciphertext produced by other
 *       libraries, such as the <a href="https://docs.aws.amazon.com/encryption-sdk/latest/developer-guide/">AWS Encryption
 *         SDK</a> or <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingClientSideEncryption.html">Amazon S3 client-side encryption</a>. These libraries return a ciphertext format that
 *       is incompatible with AWS KMS.</p>
 *          <p>If the ciphertext was encrypted under a symmetric CMK, the <code>KeyId</code> parameter is
 *       optional. AWS KMS can get this information from metadata that it adds to the symmetric
 *       ciphertext blob. This feature adds durability to your implementation by ensuring that
 *       authorized users can decrypt ciphertext decades after it was encrypted, even if they've lost
 *       track of the CMK ID. However, specifying the CMK is always recommended as a best practice.
 *       When you use the <code>KeyId</code> parameter to specify a CMK, AWS KMS only uses the CMK you
 *       specify. If the ciphertext was encrypted under a different CMK, the <code>Decrypt</code>
 *       operation fails. This practice ensures that you use the CMK that you intend.</p>
 *          <p>Whenever possible, use key policies to give users permission to call the
 *         <code>Decrypt</code> operation on a particular CMK, instead of using IAM policies.
 *       Otherwise, you might create an IAM user policy that gives the user <code>Decrypt</code>
 *       permission on all CMKs. This user could decrypt ciphertext that was encrypted by CMKs in other
 *       accounts if the key policy for the cross-account CMK permits it. If you must use an IAM policy
 *       for <code>Decrypt</code> permissions, limit the user to particular CMKs or particular trusted
 *       accounts. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/iam-policies.html#iam-policies-best-practices">Best practices for IAM policies</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
 *          <p>The CMK that you use for this operation must be in a compatible key state. For
 * details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use
 * of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
 *          <p>
 *             <b>Cross-account use</b>: Yes. You can decrypt a ciphertext
 *       using a CMK in a different AWS account.</p>
 *
 *          <p>
 *             <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:Decrypt</a> (key policy)</p>
 *          <p>
 *             <b>Related operations:</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>Encrypt</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GenerateDataKey</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GenerateDataKeyPair</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ReEncrypt</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, DecryptCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, DecryptCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * const client = new KMSClient(config);
 * const command = new DecryptCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DecryptCommandInput} for command's `input` shape.
 * @see {@link DecryptCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DecryptCommand = /** @class */ (function (_super) {
    __extends(DecryptCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DecryptCommand(input) {
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
    DecryptCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KMSClient";
        var commandName = "DecryptCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DecryptRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DecryptResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DecryptCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DecryptCommand(input, context);
    };
    DecryptCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DecryptCommand(output, context);
    };
    return DecryptCommand;
}($Command));
export { DecryptCommand };
//# sourceMappingURL=DecryptCommand.js.map