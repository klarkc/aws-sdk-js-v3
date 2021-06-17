import { __extends } from "tslib";
import { GenerateDataKeyPairRequest, GenerateDataKeyPairResponse } from "../models/models_0";
import { deserializeAws_json1_1GenerateDataKeyPairCommand, serializeAws_json1_1GenerateDataKeyPairCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Generates a unique asymmetric data key pair. The <code>GenerateDataKeyPair</code>
 *       operation returns a plaintext public key, a plaintext private key, and a copy of the private
 *       key that is encrypted under the symmetric CMK you specify. You can use the data key pair to
 *       perform asymmetric cryptography outside of AWS KMS.</p>
 *
 *          <p>
 *             <code>GenerateDataKeyPair</code> returns a unique data key pair for each request. The
 *       bytes in the keys are not related to the caller or the CMK that is used to encrypt the private
 *       key.</p>
 *
 *          <p>You can use the public key that <code>GenerateDataKeyPair</code> returns to encrypt data
 *       or verify a signature outside of AWS KMS. Then, store the encrypted private key with the data.
 *       When you are ready to decrypt data or sign a message, you can use the <a>Decrypt</a> operation to decrypt the encrypted private key.</p>
 *
 *          <p>To generate a data key pair, you must specify a symmetric customer master key (CMK) to
 *       encrypt the private key in a data key pair. You cannot use an asymmetric CMK or a CMK in a
 *       custom key store. To get the type and origin of your CMK, use the <a>DescribeKey</a> operation. </p>
 *
 *          <p>If you are using the data key pair to encrypt data, or for any operation where you don't
 *       immediately need a private key, consider using the <a>GenerateDataKeyPairWithoutPlaintext</a> operation.
 *         <code>GenerateDataKeyPairWithoutPlaintext</code> returns a plaintext public key and an
 *       encrypted private key, but omits the plaintext private key that you need only to decrypt
 *       ciphertext or sign a message. Later, when you need to decrypt the data or sign a message, use
 *       the <a>Decrypt</a> operation to decrypt the encrypted private key in the data key
 *       pair.</p>
 *
 *          <p>You can use the optional encryption context to add additional security to the encryption
 *       operation. If you specify an <code>EncryptionContext</code>, you must specify the same
 *       encryption context (a case-sensitive exact match) when decrypting the encrypted data key.
 *       Otherwise, the request to decrypt fails with an <code>InvalidCiphertextException</code>. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context">Encryption Context</a> in the
 *       <i>AWS Key Management Service Developer Guide</i>.</p>
 *          <p>The CMK that you use for this operation must be in a compatible key state. For
 * details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use
 * of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
 *          <p>
 *             <b>Cross-account use</b>: Yes. To perform this operation with a CMK in a different AWS account, specify
 *   the key ARN or alias ARN in the value of the <code>KeyId</code> parameter.</p>
 *
 *          <p>
 *             <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:GenerateDataKeyPair</a> (key policy)</p>
 *          <p>
 *             <b>Related operations:</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>Decrypt</a>
 *                </p>
 *             </li>
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
 *                   <a>GenerateDataKeyPairWithoutPlaintext</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GenerateDataKeyWithoutPlaintext</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, GenerateDataKeyPairCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, GenerateDataKeyPairCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * const client = new KMSClient(config);
 * const command = new GenerateDataKeyPairCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GenerateDataKeyPairCommandInput} for command's `input` shape.
 * @see {@link GenerateDataKeyPairCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GenerateDataKeyPairCommand = /** @class */ (function (_super) {
    __extends(GenerateDataKeyPairCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GenerateDataKeyPairCommand(input) {
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
    GenerateDataKeyPairCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KMSClient";
        var commandName = "GenerateDataKeyPairCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GenerateDataKeyPairRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GenerateDataKeyPairResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GenerateDataKeyPairCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GenerateDataKeyPairCommand(input, context);
    };
    GenerateDataKeyPairCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GenerateDataKeyPairCommand(output, context);
    };
    return GenerateDataKeyPairCommand;
}($Command));
export { GenerateDataKeyPairCommand };
//# sourceMappingURL=GenerateDataKeyPairCommand.js.map