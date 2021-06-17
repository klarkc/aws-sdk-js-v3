"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EncryptCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Encrypts plaintext into ciphertext by using a customer master key (CMK). The
 *         <code>Encrypt</code> operation has two primary use cases:</p>
 *          <ul>
 *             <li>
 *                <p>You can encrypt small amounts of arbitrary data, such as a personal identifier or
 *           database password, or other sensitive information. </p>
 *             </li>
 *             <li>
 *                <p>You can use the <code>Encrypt</code> operation to move encrypted data from one AWS
 *           Region to another. For example, in Region A, generate a data key and use the plaintext key to encrypt
 *           your data. Then, in Region A, use the <code>Encrypt</code> operation to encrypt the
 *           plaintext data key under a CMK in Region B. Now, you can move the encrypted data and the
 *           encrypted data key to Region B. When necessary, you can decrypt the encrypted data key and
 *           the encrypted data entirely within in Region B.</p>
 *             </li>
 *          </ul>
 *
 *          <p>You don't need to use the <code>Encrypt</code> operation to encrypt a data key. The <a>GenerateDataKey</a> and <a>GenerateDataKeyPair</a> operations return a
 *       plaintext data key and an encrypted copy of that data key.</p>
 *
 *          <p>When you encrypt data, you must specify a symmetric or asymmetric CMK to use in the
 *       encryption operation. The CMK must have a <code>KeyUsage</code> value of
 *         <code>ENCRYPT_DECRYPT.</code> To find the <code>KeyUsage</code> of a CMK, use the <a>DescribeKey</a> operation. </p>
 *
 *          <p>If you use a symmetric CMK, you can use an encryption context to add additional security
 *       to your encryption operation. If you specify an <code>EncryptionContext</code> when encrypting
 *       data, you must specify the same encryption context (a case-sensitive exact match) when
 *       decrypting the data. Otherwise, the request to decrypt fails with an
 *         <code>InvalidCiphertextException</code>. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context">Encryption
 *         Context</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
 *          <p>If you specify an asymmetric CMK, you must also specify the encryption algorithm. The
 *       algorithm must be compatible with the CMK type.</p>
 *          <important>
 *             <p>When you use an asymmetric CMK to encrypt or reencrypt data, be sure to record the CMK and encryption algorithm that you choose. You will be required to provide the same CMK and encryption algorithm when you decrypt the data. If the CMK and algorithm do not match the values used to encrypt the data, the decrypt operation fails.</p>
 *             <p>You are not required to supply the CMK ID and encryption algorithm when you decrypt with symmetric CMKs because AWS KMS stores this information in the ciphertext blob. AWS KMS cannot store metadata in ciphertext generated with asymmetric keys. The standard format for asymmetric key ciphertext does not include configurable fields.</p>
 *          </important>
 *
 *
 *          <p>The maximum size of the data that you can encrypt varies with the type of CMK and the
 *       encryption algorithm that you choose.</p>
 *          <ul>
 *             <li>
 *                <p>Symmetric CMKs</p>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <code>SYMMETRIC_DEFAULT</code>: 4096 bytes</p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>RSA_2048</code>
 *                </p>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <code>RSAES_OAEP_SHA_1</code>: 214 bytes</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>RSAES_OAEP_SHA_256</code>: 190 bytes</p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>RSA_3072</code>
 *                </p>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <code>RSAES_OAEP_SHA_1</code>: 342 bytes</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>RSAES_OAEP_SHA_256</code>: 318 bytes</p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>RSA_4096</code>
 *                </p>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <code>RSAES_OAEP_SHA_1</code>: 470 bytes</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>RSAES_OAEP_SHA_256</code>: 446 bytes</p>
 *                   </li>
 *                </ul>
 *             </li>
 *          </ul>
 *          <p>The CMK that you use for this operation must be in a compatible key state. For
 * details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use
 * of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
 *          <p>
 *             <b>Cross-account use</b>: Yes. To perform this operation with a CMK in a different AWS account, specify
 *   the key ARN or alias ARN in the value of the <code>KeyId</code> parameter.</p>
 *
 *          <p>
 *             <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:Encrypt</a> (key policy)</p>
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
 * import { KMSClient, EncryptCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, EncryptCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * const client = new KMSClient(config);
 * const command = new EncryptCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EncryptCommandInput} for command's `input` shape.
 * @see {@link EncryptCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
class EncryptCommand extends smithy_client_1.Command {
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
        const commandName = "EncryptCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.EncryptRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.EncryptResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1EncryptCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1EncryptCommand(output, context);
    }
}
exports.EncryptCommand = EncryptCommand;
//# sourceMappingURL=EncryptCommand.js.map