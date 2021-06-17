"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeKeyCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Provides detailed information about a customer master key (CMK). You can run
 *         <code>DescribeKey</code> on a <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#customer-cmk">customer managed CMK</a> or an <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk">AWS managed
 *         CMK</a>.</p>
 *          <p>This detailed information includes the key ARN, creation date (and deletion date, if
 *       applicable), the key state, and the origin and expiration date (if any) of the key material.
 *       For CMKs in custom key stores, it includes information about the custom key store, such as the
 *       key store ID and the AWS CloudHSM cluster ID. It includes fields, like <code>KeySpec</code>, that
 *       help you distinguish symmetric from asymmetric CMKs. It also provides information that is
 *       particularly important to asymmetric CMKs, such as the key usage (encryption or signing) and
 *       the encryption algorithms or signing algorithms that the CMK supports.</p>
 *          <p>
 *             <code>DescribeKey</code> does not return the following information:</p>
 *          <ul>
 *             <li>
 *                <p>Aliases associated with the CMK. To get this information, use <a>ListAliases</a>.</p>
 *             </li>
 *             <li>
 *                <p>Whether automatic key rotation is enabled on the CMK. To get this information, use
 *             <a>GetKeyRotationStatus</a>. Also, some key states prevent a CMK from being
 *           automatically rotated. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html#rotate-keys-how-it-works">How Automatic Key Rotation
 *             Works</a> in <i>AWS Key Management Service Developer Guide</i>.</p>
 *             </li>
 *             <li>
 *                <p>Tags on the CMK. To get this information, use <a>ListResourceTags</a>.</p>
 *             </li>
 *             <li>
 *                <p>Key policies and grants on the CMK. To get this information, use <a>GetKeyPolicy</a> and <a>ListGrants</a>.</p>
 *             </li>
 *          </ul>
 *          <p>If you call the <code>DescribeKey</code> operation on a <i>predefined AWS
 *         alias</i>, that is, an AWS alias with no key ID, AWS KMS creates an <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#master_keys">AWS managed CMK</a>.
 *       Then, it associates the alias with the new CMK, and returns the <code>KeyId</code> and
 *         <code>Arn</code> of the new CMK in the response.</p>
 *          <p>
 *             <b>Cross-account use</b>: Yes. To perform this operation with a CMK in a different AWS account, specify
 *   the key ARN or alias ARN in the value of the <code>KeyId</code> parameter.</p>
 *
 *          <p>
 *             <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:DescribeKey</a> (key policy)</p>
 *          <p>
 *             <b>Related operations:</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>GetKeyPolicy</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GetKeyRotationStatus</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListAliases</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListGrants</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListKeys</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListResourceTags</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListRetirableGrants</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, DescribeKeyCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, DescribeKeyCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * const client = new KMSClient(config);
 * const command = new DescribeKeyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeKeyCommandInput} for command's `input` shape.
 * @see {@link DescribeKeyCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DescribeKeyCommand extends smithy_client_1.Command {
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
        const commandName = "DescribeKeyCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DescribeKeyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DescribeKeyResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1DescribeKeyCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1DescribeKeyCommand(output, context);
    }
}
exports.DescribeKeyCommand = DescribeKeyCommand;
//# sourceMappingURL=DescribeKeyCommand.js.map