import { __extends } from "tslib";
import { CreateKeyRequest, CreateKeyResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateKeyCommand, serializeAws_json1_1CreateKeyCommand } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a unique customer managed <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#master-keys">customer master key</a> (CMK) in your AWS
 *       account and Region.</p>
 *
 *          <p>You can use the <code>CreateKey</code> operation to create symmetric or asymmetric
 *       CMKs.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Symmetric CMKs</b> contain a 256-bit symmetric key that
 *           never leaves AWS KMS unencrypted. To use the CMK, you must call AWS KMS. You can use a
 *           symmetric CMK to encrypt and decrypt small amounts of data, but they are typically used to
 *           generate <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#data-keys">data
 *             keys</a> and <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#data-key-pairs">data
 *               keys pairs</a>. For details, see <a>GenerateDataKey</a> and
 *             <a>GenerateDataKeyPair</a>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Asymmetric CMKs</b> can contain an RSA key pair or an
 *           Elliptic Curve (ECC) key pair. The private key in an asymmetric CMK never leaves AWS KMS
 *           unencrypted. However, you can use the <a>GetPublicKey</a> operation to download
 *           the public key so it can be used outside of AWS KMS. CMKs with RSA key pairs can be used to
 *           encrypt or decrypt data or sign and verify messages (but not both). CMKs with ECC key
 *           pairs can be used only to sign and verify messages.</p>
 *             </li>
 *          </ul>
 *          <p>For information about symmetric and asymmetric CMKs, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">Using Symmetric and Asymmetric CMKs</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
 *
 *
 *          <p>To create different types of CMKs, use the following guidance:</p>
 *
 *          <dl>
 *             <dt>Asymmetric CMKs</dt>
 *             <dd>
 *                <p>To create an asymmetric CMK, use the <code>CustomerMasterKeySpec</code> parameter to
 *             specify the type of key material in the CMK. Then, use the <code>KeyUsage</code>
 *             parameter to determine whether the CMK will be used to encrypt and decrypt or sign and
 *             verify. You can't change these properties after the CMK is created.</p>
 *                <p> </p>
 *             </dd>
 *             <dt>Symmetric CMKs</dt>
 *             <dd>
 *                <p>When creating a symmetric CMK, you don't need to specify the
 *               <code>CustomerMasterKeySpec</code> or <code>KeyUsage</code> parameters. The default
 *             value for <code>CustomerMasterKeySpec</code>, <code>SYMMETRIC_DEFAULT</code>, and the
 *             default value for <code>KeyUsage</code>, <code>ENCRYPT_DECRYPT</code>, are the only
 *             valid values for symmetric CMKs. </p>
 *                <p> </p>
 *             </dd>
 *             <dt>Imported Key Material</dt>
 *             <dd>
 *                <p>To import your own key material, begin by creating a symmetric CMK with no key
 *             material. To do this, use the <code>Origin</code> parameter of <code>CreateKey</code>
 *             with a value of <code>EXTERNAL</code>. Next, use <a>GetParametersForImport</a> operation to get a public key and import token, and use the public key to encrypt
 *             your key material. Then, use <a>ImportKeyMaterial</a> with your import token
 *             to import the key material. For step-by-step instructions, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys.html">Importing Key Material</a> in the <i>
 *                      <i>AWS Key Management Service Developer Guide</i>
 *                   </i>. You
 *             cannot import the key material into an asymmetric CMK.</p>
 *                <p> </p>
 *             </dd>
 *             <dt>Custom Key Stores</dt>
 *             <dd>
 *                <p>To create a symmetric CMK in a <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">custom key store</a>, use the
 *               <code>CustomKeyStoreId</code> parameter to specify the custom key store. You must also
 *             use the <code>Origin</code> parameter with a value of <code>AWS_CLOUDHSM</code>. The
 *             AWS CloudHSM cluster that is associated with the custom key store must have at least two active
 *             HSMs in different Availability Zones in the AWS Region. </p>
 *                <p>You cannot create an asymmetric CMK in a custom key store. For information about
 *             custom key stores in AWS KMS see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">Using Custom Key Stores</a> in
 *             the <i>
 *                      <i>AWS Key Management Service Developer Guide</i>
 *                   </i>.</p>
 *             </dd>
 *          </dl>
 *          <p>
 *             <b>Cross-account use</b>:  No. You cannot use this operation to
 *       create a CMK in a different AWS account.</p>
 *
 *          <p>
 *             <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:CreateKey</a> (IAM policy). To use the
 *         <code>Tags</code> parameter, <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:TagResource</a> (IAM policy). For examples and information about related
 *       permissions, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/iam-policies.html#iam-policy-example-create-key">Allow a user to create
 *         CMKs</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
 *          <p>
 *             <b>Related operations:</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>DescribeKey</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListKeys</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ScheduleKeyDeletion</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, CreateKeyCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, CreateKeyCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * const client = new KMSClient(config);
 * const command = new CreateKeyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateKeyCommandInput} for command's `input` shape.
 * @see {@link CreateKeyCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateKeyCommand = /** @class */ (function (_super) {
    __extends(CreateKeyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateKeyCommand(input) {
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
    CreateKeyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KMSClient";
        var commandName = "CreateKeyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateKeyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateKeyResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateKeyCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateKeyCommand(input, context);
    };
    CreateKeyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateKeyCommand(output, context);
    };
    return CreateKeyCommand;
}($Command));
export { CreateKeyCommand };
//# sourceMappingURL=CreateKeyCommand.js.map