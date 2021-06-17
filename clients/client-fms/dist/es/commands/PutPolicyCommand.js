import { __extends } from "tslib";
import { PutPolicyRequest, PutPolicyResponse } from "../models/models_0";
import { deserializeAws_json1_1PutPolicyCommand, serializeAws_json1_1PutPolicyCommand } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an AWS Firewall Manager policy.</p>
 *          <p>Firewall Manager provides the following types of policies: </p>
 *          <ul>
 *             <li>
 *                <p>An AWS WAF policy (type WAFV2), which defines rule groups to run first in the
 *               corresponding AWS WAF web ACL and rule groups to run last in the web ACL.</p>
 *             </li>
 *             <li>
 *                <p>An AWS WAF Classic policy (type WAF), which defines a rule group. </p>
 *             </li>
 *             <li>
 *                <p>A Shield Advanced policy, which applies Shield Advanced protection to specified
 *           accounts and resources.</p>
 *             </li>
 *             <li>
 *                <p>A security group policy, which manages VPC security groups across your AWS
 *           organization. </p>
 *             </li>
 *             <li>
 *                <p>An AWS Network Firewall policy, which provides firewall rules to filter network traffic in specified
 *           Amazon VPCs.</p>
 *             </li>
 *          </ul>
 *          <p>Each policy is specific to one of the types. If you want to enforce more than one
 *       policy type across accounts, create multiple policies. You can create multiple
 *       policies for each type.</p>
 *          <p>You must be subscribed to Shield Advanced to create a Shield Advanced policy. For more
 *         information about subscribing to Shield Advanced, see
 *     <a href="https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_CreateSubscription.html">CreateSubscription</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, PutPolicyCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, PutPolicyCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * const client = new FMSClient(config);
 * const command = new PutPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutPolicyCommandInput} for command's `input` shape.
 * @see {@link PutPolicyCommandOutput} for command's `response` shape.
 * @see {@link FMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutPolicyCommand = /** @class */ (function (_super) {
    __extends(PutPolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutPolicyCommand(input) {
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
    PutPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "FMSClient";
        var commandName = "PutPolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutPolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PutPolicyResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutPolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1PutPolicyCommand(input, context);
    };
    PutPolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1PutPolicyCommand(output, context);
    };
    return PutPolicyCommand;
}($Command));
export { PutPolicyCommand };
//# sourceMappingURL=PutPolicyCommand.js.map