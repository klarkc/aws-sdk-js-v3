import { __extends } from "tslib";
import { PutKeyPolicyRequest } from "../models/models_0";
import { deserializeAws_json1_1PutKeyPolicyCommand, serializeAws_json1_1PutKeyPolicyCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Attaches a key policy to the specified customer master key (CMK). </p>
 *          <p>For more information about key policies, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html">Key Policies</a> in the <i>AWS Key Management Service Developer Guide</i>.
 *       For help writing and formatting a JSON policy document, see the <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies.html">IAM JSON Policy Reference</a> in the <i>
 *                <i>IAM User Guide</i>
 *             </i>. For examples of adding a key policy in multiple programming languages,
 *       see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/programming-key-policies.html#put-policy">Setting a key policy</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
 *          <p>
 *             <b>Cross-account use</b>: No. You cannot perform this operation on a CMK in a different AWS account.</p>
 *
 *          <p>
 *             <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:PutKeyPolicy</a> (key policy)</p>
 *          <p>
 *             <b>Related operations</b>: <a>GetKeyPolicy</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, PutKeyPolicyCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, PutKeyPolicyCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * const client = new KMSClient(config);
 * const command = new PutKeyPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutKeyPolicyCommandInput} for command's `input` shape.
 * @see {@link PutKeyPolicyCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutKeyPolicyCommand = /** @class */ (function (_super) {
    __extends(PutKeyPolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutKeyPolicyCommand(input) {
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
    PutKeyPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KMSClient";
        var commandName = "PutKeyPolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutKeyPolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutKeyPolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1PutKeyPolicyCommand(input, context);
    };
    PutKeyPolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1PutKeyPolicyCommand(output, context);
    };
    return PutKeyPolicyCommand;
}($Command));
export { PutKeyPolicyCommand };
//# sourceMappingURL=PutKeyPolicyCommand.js.map