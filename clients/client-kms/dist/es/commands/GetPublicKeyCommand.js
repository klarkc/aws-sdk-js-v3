import { __extends } from "tslib";
import { GetPublicKeyRequest, GetPublicKeyResponse } from "../models/models_0";
import { deserializeAws_json1_1GetPublicKeyCommand, serializeAws_json1_1GetPublicKeyCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the public key of an asymmetric CMK. Unlike the private key of a asymmetric CMK,
 *       which never leaves AWS KMS unencrypted, callers with <code>kms:GetPublicKey</code> permission
 *       can download the public key of an asymmetric CMK. You can share the public key to allow others
 *       to encrypt messages and verify signatures outside of AWS KMS. For information about symmetric and asymmetric CMKs, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">Using Symmetric and Asymmetric CMKs</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
 *          <p>You do not need to download the public key. Instead, you can use the public key within
 *       AWS KMS by calling the <a>Encrypt</a>, <a>ReEncrypt</a>, or <a>Verify</a> operations with the identifier of an asymmetric CMK. When you use the
 *       public key within AWS KMS, you benefit from the authentication, authorization, and logging that
 *       are part of every AWS KMS operation. You also reduce of risk of encrypting data that cannot be
 *       decrypted. These features are not effective outside of AWS KMS. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/download-public-key.html#download-public-key-considerations">Special Considerations
 *         for Downloading Public Keys</a>.</p>
 *          <p>To help you use the public key safely outside of AWS KMS, <code>GetPublicKey</code> returns
 *       important information about the public key in the response, including:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_GetPublicKey.html#KMS-GetPublicKey-response-CustomerMasterKeySpec">CustomerMasterKeySpec</a>: The type of key material in the public key, such as
 *             <code>RSA_4096</code> or <code>ECC_NIST_P521</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_GetPublicKey.html#KMS-GetPublicKey-response-KeyUsage">KeyUsage</a>: Whether the key is used for encryption or signing.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_GetPublicKey.html#KMS-GetPublicKey-response-EncryptionAlgorithms">EncryptionAlgorithms</a> or <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_GetPublicKey.html#KMS-GetPublicKey-response-SigningAlgorithms">SigningAlgorithms</a>: A list of the encryption algorithms or the signing
 *           algorithms for the key.</p>
 *             </li>
 *          </ul>
 *          <p>Although AWS KMS cannot enforce these restrictions on external operations, it is crucial
 *       that you use this information to prevent the public key from being used improperly. For
 *       example, you can prevent a public signing key from being used encrypt data, or prevent a
 *       public key from being used with an encryption algorithm that is not supported by AWS KMS. You
 *       can also avoid errors, such as using the wrong signing algorithm in a verification
 *       operation.</p>
 *          <p>The CMK that you use for this operation must be in a compatible key state. For
 * details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use
 * of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
 *          <p>
 *             <b>Cross-account use</b>: Yes. To perform this operation with a CMK in a different AWS account, specify
 *   the key ARN or alias ARN in the value of the <code>KeyId</code> parameter.</p>
 *
 *          <p>
 *             <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:GetPublicKey</a> (key policy)</p>
 *          <p>
 *             <b>Related operations</b>: <a>CreateKey</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, GetPublicKeyCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, GetPublicKeyCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * const client = new KMSClient(config);
 * const command = new GetPublicKeyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetPublicKeyCommandInput} for command's `input` shape.
 * @see {@link GetPublicKeyCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetPublicKeyCommand = /** @class */ (function (_super) {
    __extends(GetPublicKeyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetPublicKeyCommand(input) {
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
    GetPublicKeyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KMSClient";
        var commandName = "GetPublicKeyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetPublicKeyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetPublicKeyResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetPublicKeyCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetPublicKeyCommand(input, context);
    };
    GetPublicKeyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetPublicKeyCommand(output, context);
    };
    return GetPublicKeyCommand;
}($Command));
export { GetPublicKeyCommand };
//# sourceMappingURL=GetPublicKeyCommand.js.map