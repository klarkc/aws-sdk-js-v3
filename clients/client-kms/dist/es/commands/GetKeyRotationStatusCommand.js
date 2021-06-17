import { __extends } from "tslib";
import { GetKeyRotationStatusRequest, GetKeyRotationStatusResponse } from "../models/models_0";
import { deserializeAws_json1_1GetKeyRotationStatusCommand, serializeAws_json1_1GetKeyRotationStatusCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets a Boolean value that indicates whether <a href="https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html">automatic rotation of the key material</a> is
 *       enabled for the specified customer master key (CMK).</p>
 *          <p>You cannot enable automatic rotation of asymmetric CMKs, CMKs with imported key material, or CMKs in a <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">custom key store</a>. The key rotation status for these CMKs is always <code>false</code>.</p>
 *          <p>The CMK that you use for this operation must be in a compatible key state. For
 * details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use
 * of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
 *          <ul>
 *             <li>
 *                <p>Disabled: The key rotation status does not change when you disable a CMK. However,
 *           while the CMK is disabled, AWS KMS does not rotate the backing key.</p>
 *             </li>
 *             <li>
 *                <p>Pending deletion: While a CMK is pending deletion, its key rotation status is
 *             <code>false</code> and AWS KMS does not rotate the backing key. If you cancel the
 *           deletion, the original key rotation status is restored.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Cross-account use</b>: Yes. To perform this operation on a CMK in a different AWS account, specify the key
 *   ARN in the value of the <code>KeyId</code> parameter.</p>
 *
 *          <p>
 *             <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:GetKeyRotationStatus</a> (key policy)</p>
 *          <p>
 *             <b>Related operations:</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>DisableKeyRotation</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>EnableKeyRotation</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, GetKeyRotationStatusCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, GetKeyRotationStatusCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * const client = new KMSClient(config);
 * const command = new GetKeyRotationStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetKeyRotationStatusCommandInput} for command's `input` shape.
 * @see {@link GetKeyRotationStatusCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetKeyRotationStatusCommand = /** @class */ (function (_super) {
    __extends(GetKeyRotationStatusCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetKeyRotationStatusCommand(input) {
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
    GetKeyRotationStatusCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KMSClient";
        var commandName = "GetKeyRotationStatusCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetKeyRotationStatusRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetKeyRotationStatusResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetKeyRotationStatusCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetKeyRotationStatusCommand(input, context);
    };
    GetKeyRotationStatusCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetKeyRotationStatusCommand(output, context);
    };
    return GetKeyRotationStatusCommand;
}($Command));
export { GetKeyRotationStatusCommand };
//# sourceMappingURL=GetKeyRotationStatusCommand.js.map