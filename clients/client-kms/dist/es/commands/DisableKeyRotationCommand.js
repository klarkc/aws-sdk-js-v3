import { __extends } from "tslib";
import { DisableKeyRotationRequest } from "../models/models_0";
import { deserializeAws_json1_1DisableKeyRotationCommand, serializeAws_json1_1DisableKeyRotationCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Disables <a href="https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html">automatic
 *         rotation of the key material</a> for the specified symmetric customer master key
 *       (CMK).</p>
 *          <p> You cannot enable automatic rotation of asymmetric CMKs, CMKs with imported key material, or CMKs in a <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">custom key store</a>. </p>
 *          <p>The CMK that you use for this operation must be in a compatible key state. For
 * details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use
 * of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
 *          <p>
 *             <b>Cross-account use</b>: No. You cannot perform this operation on a CMK in a different AWS account.</p>
 *
 *          <p>
 *             <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:DisableKeyRotation</a> (key policy)</p>
 *          <p>
 *             <b>Related operations:</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>EnableKeyRotation</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GetKeyRotationStatus</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, DisableKeyRotationCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, DisableKeyRotationCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * const client = new KMSClient(config);
 * const command = new DisableKeyRotationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisableKeyRotationCommandInput} for command's `input` shape.
 * @see {@link DisableKeyRotationCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisableKeyRotationCommand = /** @class */ (function (_super) {
    __extends(DisableKeyRotationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisableKeyRotationCommand(input) {
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
    DisableKeyRotationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KMSClient";
        var commandName = "DisableKeyRotationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisableKeyRotationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisableKeyRotationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DisableKeyRotationCommand(input, context);
    };
    DisableKeyRotationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DisableKeyRotationCommand(output, context);
    };
    return DisableKeyRotationCommand;
}($Command));
export { DisableKeyRotationCommand };
//# sourceMappingURL=DisableKeyRotationCommand.js.map