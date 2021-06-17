"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenerateDataKeyPairWithoutPlaintextCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Generates a unique asymmetric data key pair. The
 *         <code>GenerateDataKeyPairWithoutPlaintext</code> operation returns a plaintext public key
 *       and a copy of the private key that is encrypted under the symmetric CMK you specify. Unlike
 *         <a>GenerateDataKeyPair</a>, this operation does not return a plaintext private
 *       key. </p>
 *          <p>To generate a data key pair, you must specify a symmetric customer master key (CMK) to
 *       encrypt the private key in the data key pair. You cannot use an asymmetric CMK or a CMK in a
 *       custom key store. To get the type and origin of your CMK, use the <code>KeySpec</code> field
 *       in the <a>DescribeKey</a> response.</p>
 *          <p>You can use the public key that <code>GenerateDataKeyPairWithoutPlaintext</code> returns
 *       to encrypt data or verify a signature outside of AWS KMS. Then, store the encrypted private key
 *       with the data. When you are ready to decrypt data or sign a message, you can use the <a>Decrypt</a> operation to decrypt the encrypted private key.</p>
 *          <p>
 *             <code>GenerateDataKeyPairWithoutPlaintext</code> returns a unique data key pair for each
 *       request. The bytes in the key are not related to the caller or CMK that is used to encrypt the
 *       private key.</p>
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
 *             <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:GenerateDataKeyPairWithoutPlaintext</a> (key policy)</p>
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
 *             <li>
 *                <p>
 *                   <a>GenerateDataKeyWithoutPlaintext</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, GenerateDataKeyPairWithoutPlaintextCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, GenerateDataKeyPairWithoutPlaintextCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * const client = new KMSClient(config);
 * const command = new GenerateDataKeyPairWithoutPlaintextCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GenerateDataKeyPairWithoutPlaintextCommandInput} for command's `input` shape.
 * @see {@link GenerateDataKeyPairWithoutPlaintextCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
class GenerateDataKeyPairWithoutPlaintextCommand extends smithy_client_1.Command {
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
        const commandName = "GenerateDataKeyPairWithoutPlaintextCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.GenerateDataKeyPairWithoutPlaintextRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.GenerateDataKeyPairWithoutPlaintextResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1GenerateDataKeyPairWithoutPlaintextCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1GenerateDataKeyPairWithoutPlaintextCommand(output, context);
    }
}
exports.GenerateDataKeyPairWithoutPlaintextCommand = GenerateDataKeyPairWithoutPlaintextCommand;
//# sourceMappingURL=GenerateDataKeyPairWithoutPlaintextCommand.js.map