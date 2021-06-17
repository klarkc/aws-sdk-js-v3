import { __extends } from "tslib";
import { DisableKeyRequest } from "../models/models_0";
import { deserializeAws_json1_1DisableKeyCommand, serializeAws_json1_1DisableKeyCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Sets the state of a customer master key (CMK) to disabled. This change temporarily
 *       prevents use of the CMK for <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#cryptographic-operations">cryptographic operations</a>. </p>
 *          <p>For more information about how key state affects the use of a CMK, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects the Use of a
 *         Customer Master Key</a> in the <i>
 *                <i>AWS Key Management Service Developer Guide</i>
 *             </i>.</p>
 *          <p>The CMK that you use for this operation must be in a compatible key state. For
 * details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use
 * of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
 *          <p>
 *             <b>Cross-account use</b>: No. You cannot perform this operation on a CMK in a different AWS account.</p>
 *
 *          <p>
 *             <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:DisableKey</a> (key policy)</p>
 *          <p>
 *             <b>Related operations</b>: <a>EnableKey</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, DisableKeyCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, DisableKeyCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * const client = new KMSClient(config);
 * const command = new DisableKeyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisableKeyCommandInput} for command's `input` shape.
 * @see {@link DisableKeyCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisableKeyCommand = /** @class */ (function (_super) {
    __extends(DisableKeyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisableKeyCommand(input) {
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
    DisableKeyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KMSClient";
        var commandName = "DisableKeyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisableKeyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisableKeyCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DisableKeyCommand(input, context);
    };
    DisableKeyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DisableKeyCommand(output, context);
    };
    return DisableKeyCommand;
}($Command));
export { DisableKeyCommand };
//# sourceMappingURL=DisableKeyCommand.js.map