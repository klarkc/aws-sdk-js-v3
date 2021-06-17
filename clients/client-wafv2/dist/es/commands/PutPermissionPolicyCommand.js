import { __extends } from "tslib";
import { PutPermissionPolicyRequest, PutPermissionPolicyResponse } from "../models/models_0";
import { deserializeAws_json1_1PutPermissionPolicyCommand, serializeAws_json1_1PutPermissionPolicyCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Attaches an IAM policy to the specified resource. Use this to share a rule group across accounts.</p>
 *         <p>You must be the owner of the rule group to perform this operation.</p>
 *          <p>This action is subject to the following restrictions:</p>
 *          <ul>
 *             <li>
 *                <p>You can attach only one policy with each <code>PutPermissionPolicy</code> request.</p>
 *             </li>
 *             <li>
 *                <p>The ARN in the request must be a valid WAF <a>RuleGroup</a> ARN and the rule group must exist in the same region.</p>
 *             </li>
 *             <li>
 *                <p>The user making the request must be the owner of the rule group.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, PutPermissionPolicyCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, PutPermissionPolicyCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * const client = new WAFV2Client(config);
 * const command = new PutPermissionPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutPermissionPolicyCommandInput} for command's `input` shape.
 * @see {@link PutPermissionPolicyCommandOutput} for command's `response` shape.
 * @see {@link WAFV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutPermissionPolicyCommand = /** @class */ (function (_super) {
    __extends(PutPermissionPolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutPermissionPolicyCommand(input) {
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
    PutPermissionPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WAFV2Client";
        var commandName = "PutPermissionPolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutPermissionPolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PutPermissionPolicyResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutPermissionPolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1PutPermissionPolicyCommand(input, context);
    };
    PutPermissionPolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1PutPermissionPolicyCommand(output, context);
    };
    return PutPermissionPolicyCommand;
}($Command));
export { PutPermissionPolicyCommand };
//# sourceMappingURL=PutPermissionPolicyCommand.js.map