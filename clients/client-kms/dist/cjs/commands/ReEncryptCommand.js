"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReEncryptCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Decrypts ciphertext and then reencrypts it entirely within AWS KMS. You can use this
 *       operation to change the customer master key (CMK) under which data is encrypted, such as when
 *       you <a href="https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html#rotate-keys-manually">manually rotate</a> a
 *       CMK or change the CMK that protects a ciphertext. You can also use it to reencrypt ciphertext
 *       under the same CMK, such as to change the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context">encryption context</a> of a ciphertext.</p>
 *          <p>The <code>ReEncrypt</code> operation can decrypt ciphertext that was encrypted by using an
 *       AWS KMS CMK in an AWS KMS operation, such as <a>Encrypt</a> or <a>GenerateDataKey</a>. It can also decrypt ciphertext that was encrypted by using the
 *       public key of an <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symm-asymm-concepts.html#asymmetric-cmks">asymmetric CMK</a> outside of AWS KMS. However, it cannot decrypt ciphertext
 *       produced by other libraries, such as the <a href="https://docs.aws.amazon.com/encryption-sdk/latest/developer-guide/">AWS Encryption SDK</a> or <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingClientSideEncryption.html">Amazon S3 client-side encryption</a>.
 *       These libraries return a ciphertext format that is incompatible with AWS KMS.</p>
 *          <p>When you use the <code>ReEncrypt</code> operation, you need to provide information for the
 *       decrypt operation and the subsequent encrypt operation.</p>
 *          <ul>
 *             <li>
 *                <p>If your ciphertext was encrypted under an asymmetric CMK, you must use the
 *             <code>SourceKeyId</code> parameter to identify the CMK that encrypted the ciphertext.
 *           You must also supply the encryption algorithm that was used. This information is required
 *           to decrypt the data.</p>
 *             </li>
 *             <li>
 *                <p>If your ciphertext was encrypted under a symmetric CMK, the <code>SourceKeyId</code>
 *           parameter is optional. AWS KMS can get this information from metadata that it adds to the
 *           symmetric ciphertext blob. This feature adds durability to your implementation by ensuring
 *           that authorized users can decrypt ciphertext decades after it was encrypted, even if
 *           they've lost track of the CMK ID. However, specifying the source CMK is always recommended
 *           as a best practice. When you use the <code>SourceKeyId</code> parameter to specify a CMK,
 *           AWS KMS uses only the CMK you specify. If the ciphertext was encrypted under a different
 *           CMK, the <code>ReEncrypt</code> operation fails. This practice ensures that you use the
 *           CMK that you intend.</p>
 *             </li>
 *             <li>
 *                <p>To reencrypt the data, you must use the <code>DestinationKeyId</code> parameter
 *           specify the CMK that re-encrypts the data after it is decrypted. You can select a
 *           symmetric or asymmetric CMK. If the destination CMK is an asymmetric CMK, you must also
 *           provide the encryption algorithm. The algorithm that you choose must be compatible with
 *           the CMK.</p>
 *
 *                <important>
 *                   <p>When you use an asymmetric CMK to encrypt or reencrypt data, be sure to record the CMK and encryption algorithm that you choose. You will be required to provide the same CMK and encryption algorithm when you decrypt the data. If the CMK and algorithm do not match the values used to encrypt the data, the decrypt operation fails.</p>
 *                   <p>You are not required to supply the CMK ID and encryption algorithm when you decrypt with symmetric CMKs because AWS KMS stores this information in the ciphertext blob. AWS KMS cannot store metadata in ciphertext generated with asymmetric keys. The standard format for asymmetric key ciphertext does not include configurable fields.</p>
 *                </important>
 *             </li>
 *          </ul>
 *
 *
 *
 *          <p>The CMK that you use for this operation must be in a compatible key state. For
 * details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use
 * of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
 *          <p>
 *             <b>Cross-account use</b>: Yes. The source CMK and destination
 *       CMK can be in different AWS accounts. Either or both CMKs can be in a different account than
 *       the caller.</p>
 *
 *          <p>
 *             <b>Required permissions</b>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:ReEncryptFrom</a> permission on the source CMK (key policy)</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:ReEncryptTo</a> permission on the destination CMK (key policy)</p>
 *             </li>
 *          </ul>
 *          <p>To permit reencryption from or to a CMK, include the <code>"kms:ReEncrypt*"</code>
 *       permission in your <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html">key policy</a>. This permission is
 *       automatically included in the key policy when you use the console to create a CMK. But you
 *       must include it manually when you create a CMK programmatically or when you use the <a>PutKeyPolicy</a> operation to set a key policy.</p>
 *
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
 *                   <a>GenerateDataKeyPair</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, ReEncryptCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, ReEncryptCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * const client = new KMSClient(config);
 * const command = new ReEncryptCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ReEncryptCommandInput} for command's `input` shape.
 * @see {@link ReEncryptCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ReEncryptCommand extends smithy_client_1.Command {
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
        const clientName = "KMSClient";
        const commandName = "ReEncryptCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ReEncryptRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ReEncryptResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1ReEncryptCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1ReEncryptCommand(output, context);
    }
}
exports.ReEncryptCommand = ReEncryptCommand;
//# sourceMappingURL=ReEncryptCommand.js.map