import { __extends } from "tslib";
import { GenerateDataKeyRequest, GenerateDataKeyResponse } from "../models/models_0";
import { deserializeAws_json1_1GenerateDataKeyCommand, serializeAws_json1_1GenerateDataKeyCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Generates a unique symmetric data key for client-side encryption. This operation returns a
 *       plaintext copy of the data key and a copy that is encrypted under a customer master key (CMK)
 *       that you specify. You can use the plaintext key to encrypt your data outside of AWS KMS and
 *       store the encrypted data key with the encrypted data.</p>
 *
 *          <p>
 *             <code>GenerateDataKey</code> returns a unique data key for each request. The bytes in the
 *       plaintext key are not related to the caller or the CMK.</p>
 *
 *          <p>To generate a data key, specify the symmetric CMK that will be used to encrypt the data
 *       key. You cannot use an asymmetric CMK to generate data keys. To get the type of your CMK, use
 *       the <a>DescribeKey</a> operation. You must also specify the length of the data key.
 *       Use either the <code>KeySpec</code> or <code>NumberOfBytes</code> parameters (but not both).
 *       For 128-bit and 256-bit data keys, use the <code>KeySpec</code> parameter. </p>
 *
 *          <p>To get only an encrypted copy of the data key, use <a>GenerateDataKeyWithoutPlaintext</a>. To generate an asymmetric data key pair, use
 *       the <a>GenerateDataKeyPair</a> or <a>GenerateDataKeyPairWithoutPlaintext</a> operation. To get a cryptographically secure
 *       random byte string, use <a>GenerateRandom</a>.</p>
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
 *             <b>How to use your data key</b>
 *          </p>
 *          <p>We recommend that you use the following pattern to encrypt data locally in your application.
 *       You can write your own code or use a client-side encryption library, such as the <a href="https://docs.aws.amazon.com/encryption-sdk/latest/developer-guide/">AWS Encryption SDK</a>, the <a href="https://docs.aws.amazon.com/dynamodb-encryption-client/latest/devguide/">Amazon DynamoDB Encryption Client</a>, or
 *         <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingClientSideEncryption.html">Amazon S3
 *         client-side encryption</a> to do these tasks for you.</p>
 *          <p>To encrypt data outside of AWS KMS:</p>
 *          <ol>
 *             <li>
 *                <p>Use the <code>GenerateDataKey</code> operation to get a data key.</p>
 *             </li>
 *             <li>
 *                <p>Use the plaintext data key (in the <code>Plaintext</code> field of the response) to
 *           encrypt your data outside of AWS KMS. Then erase the plaintext data key from memory.</p>
 *             </li>
 *             <li>
 *                <p>Store the encrypted data key (in the <code>CiphertextBlob</code> field of the
 *           response) with the encrypted data.</p>
 *             </li>
 *          </ol>
 *          <p>To decrypt data outside of AWS KMS:</p>
 *          <ol>
 *             <li>
 *                <p>Use the <a>Decrypt</a> operation to decrypt the encrypted data key. The
 *           operation returns a plaintext copy of the data key.</p>
 *             </li>
 *             <li>
 *                <p>Use the plaintext data key to decrypt data outside of AWS KMS, then erase the plaintext
 *           data key from memory.</p>
 *             </li>
 *          </ol>
 *          <p>
 *             <b>Cross-account use</b>: Yes. To perform this operation with a CMK in a different AWS account, specify
 *   the key ARN or alias ARN in the value of the <code>KeyId</code> parameter.</p>
 *
 *          <p>
 *             <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:GenerateDataKey</a> (key policy)</p>
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
 *                   <a>GenerateDataKeyPair</a>
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
 * import { KMSClient, GenerateDataKeyCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, GenerateDataKeyCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * const client = new KMSClient(config);
 * const command = new GenerateDataKeyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GenerateDataKeyCommandInput} for command's `input` shape.
 * @see {@link GenerateDataKeyCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GenerateDataKeyCommand = /** @class */ (function (_super) {
    __extends(GenerateDataKeyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GenerateDataKeyCommand(input) {
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
    GenerateDataKeyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KMSClient";
        var commandName = "GenerateDataKeyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GenerateDataKeyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GenerateDataKeyResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GenerateDataKeyCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GenerateDataKeyCommand(input, context);
    };
    GenerateDataKeyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GenerateDataKeyCommand(output, context);
    };
    return GenerateDataKeyCommand;
}($Command));
export { GenerateDataKeyCommand };
//# sourceMappingURL=GenerateDataKeyCommand.js.map