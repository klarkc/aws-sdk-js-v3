import { __extends } from "tslib";
import { SignRequest, SignResponse } from "../models/models_0";
import { deserializeAws_json1_1SignCommand, serializeAws_json1_1SignCommand } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a <a href="https://en.wikipedia.org/wiki/Digital_signature">digital
 *         signature</a> for a message or message digest by using the private key in an asymmetric
 *       CMK. To verify the signature, use the <a>Verify</a> operation, or use the public
 *       key in the same asymmetric CMK outside of AWS KMS. For information about symmetric and asymmetric CMKs, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">Using Symmetric and Asymmetric CMKs</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
 *          <p>Digital signatures are generated and verified by using asymmetric key pair, such as an RSA
 *       or ECC pair that is represented by an asymmetric customer master key (CMK). The key owner (or
 *       an authorized user) uses their private key to sign a message. Anyone with the public key can
 *       verify that the message was signed with that particular private key and that the message
 *       hasn't changed since it was signed. </p>
 *          <p>To use the <code>Sign</code> operation, provide the following information:</p>
 *          <ul>
 *             <li>
 *                <p>Use the <code>KeyId</code> parameter to identify an asymmetric CMK with a
 *             <code>KeyUsage</code> value of <code>SIGN_VERIFY</code>. To get the
 *             <code>KeyUsage</code> value of a CMK, use the <a>DescribeKey</a> operation.
 *           The caller must have <code>kms:Sign</code> permission on the CMK.</p>
 *             </li>
 *             <li>
 *                <p>Use the <code>Message</code> parameter to specify the message or message digest to
 *           sign. You can submit messages of up to 4096 bytes. To sign a larger message, generate a
 *           hash digest of the message, and then provide the hash digest in the <code>Message</code>
 *           parameter. To indicate whether the message is a full message or a digest, use the
 *             <code>MessageType</code> parameter.</p>
 *             </li>
 *             <li>
 *                <p>Choose a signing algorithm that is compatible with the CMK. </p>
 *             </li>
 *          </ul>
 *          <important>
 *             <p>When signing a message, be sure to record the CMK and the signing algorithm. This
 *         information is required to verify the signature.</p>
 *          </important>
 *          <p>To verify the signature that this operation generates, use the <a>Verify</a>
 *       operation. Or use the <a>GetPublicKey</a> operation to download the public key and
 *       then use the public key to verify the signature outside of AWS KMS. </p>
 *          <p>The CMK that you use for this operation must be in a compatible key state. For
 * details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use
 * of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
 *          <p>
 *             <b>Cross-account use</b>: Yes. To perform this operation with a CMK in a different AWS account, specify
 *   the key ARN or alias ARN in the value of the <code>KeyId</code> parameter.</p>
 *
 *          <p>
 *             <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:Sign</a> (key policy)</p>
 *          <p>
 *             <b>Related operations</b>: <a>Verify</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, SignCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, SignCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * const client = new KMSClient(config);
 * const command = new SignCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SignCommandInput} for command's `input` shape.
 * @see {@link SignCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var SignCommand = /** @class */ (function (_super) {
    __extends(SignCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function SignCommand(input) {
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
    SignCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KMSClient";
        var commandName = "SignCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: SignRequest.filterSensitiveLog,
            outputFilterSensitiveLog: SignResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    SignCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1SignCommand(input, context);
    };
    SignCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1SignCommand(output, context);
    };
    return SignCommand;
}($Command));
export { SignCommand };
//# sourceMappingURL=SignCommand.js.map