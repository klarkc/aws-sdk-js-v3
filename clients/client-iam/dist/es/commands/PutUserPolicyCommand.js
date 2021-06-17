import { __extends } from "tslib";
import { PutUserPolicyRequest } from "../models/models_0";
import { deserializeAws_queryPutUserPolicyCommand, serializeAws_queryPutUserPolicyCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Adds or updates an inline policy document that is embedded in the specified IAM
 *             user.</p>
 *         <p>An IAM user can also have a managed policy attached to it. To attach a managed
 *             policy to a user, use <a>AttachUserPolicy</a>. To create a new managed
 *             policy, use <a>CreatePolicy</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed
 *                 policies and inline policies</a> in the
 *             <i>IAM User Guide</i>.</p>
 *         <p>For information about the maximum number of inline policies that you can embed in a
 *             user, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS quotas</a> in the <i>IAM User Guide</i>.</p>
 *         <note>
 *             <p>Because policy documents can be large, you should use POST rather than GET when
 *                 calling <code>PutUserPolicy</code>. For general information about using the Query
 *                 API with IAM, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/IAM_UsingQueryAPI.html">Making query requests</a> in the
 *                     <i>IAM User Guide</i>.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, PutUserPolicyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, PutUserPolicyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new PutUserPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutUserPolicyCommandInput} for command's `input` shape.
 * @see {@link PutUserPolicyCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutUserPolicyCommand = /** @class */ (function (_super) {
    __extends(PutUserPolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutUserPolicyCommand(input) {
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
    PutUserPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "PutUserPolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutUserPolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutUserPolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryPutUserPolicyCommand(input, context);
    };
    PutUserPolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryPutUserPolicyCommand(output, context);
    };
    return PutUserPolicyCommand;
}($Command));
export { PutUserPolicyCommand };
//# sourceMappingURL=PutUserPolicyCommand.js.map