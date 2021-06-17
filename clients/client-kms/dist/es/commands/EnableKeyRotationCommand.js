import { __extends } from "tslib";
import { EnableKeyRotationRequest } from "../models/models_0";
import { deserializeAws_json1_1EnableKeyRotationCommand, serializeAws_json1_1EnableKeyRotationCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Enables <a href="https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html">automatic rotation
 *         of the key material</a> for the specified symmetric customer master key (CMK).</p>
 *          <p>You cannot enable automatic rotation of asymmetric CMKs, CMKs with imported key material, or CMKs in a <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">custom key store</a>.</p>
 *          <p>The CMK that you use for this operation must be in a compatible key state. For
 * details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use
 * of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
 *          <p>
 *             <b>Cross-account use</b>: No. You cannot perform this operation on a CMK in a different AWS account.</p>
 *
 *          <p>
 *             <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:EnableKeyRotation</a> (key policy)</p>
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
 *                   <a>GetKeyRotationStatus</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, EnableKeyRotationCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, EnableKeyRotationCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * const client = new KMSClient(config);
 * const command = new EnableKeyRotationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EnableKeyRotationCommandInput} for command's `input` shape.
 * @see {@link EnableKeyRotationCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var EnableKeyRotationCommand = /** @class */ (function (_super) {
    __extends(EnableKeyRotationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function EnableKeyRotationCommand(input) {
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
    EnableKeyRotationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KMSClient";
        var commandName = "EnableKeyRotationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: EnableKeyRotationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    EnableKeyRotationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1EnableKeyRotationCommand(input, context);
    };
    EnableKeyRotationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1EnableKeyRotationCommand(output, context);
    };
    return EnableKeyRotationCommand;
}($Command));
export { EnableKeyRotationCommand };
//# sourceMappingURL=EnableKeyRotationCommand.js.map