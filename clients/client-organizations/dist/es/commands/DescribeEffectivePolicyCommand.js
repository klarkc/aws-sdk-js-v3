import { __extends } from "tslib";
import { DescribeEffectivePolicyRequest, DescribeEffectivePolicyResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeEffectivePolicyCommand, serializeAws_json1_1DescribeEffectivePolicyCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the contents of the effective policy for specified policy type and account.
 *             The effective policy is the aggregation of any policies of the specified type that the
 *             account inherits, plus any policy of that type that is directly attached to the
 *             account.</p>
 *         <p>This operation applies only to policy types <i>other</i> than service
 *             control policies (SCPs).</p>
 *         <p>For more information about policy inheritance, see <a href="http://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies-inheritance.html">How Policy Inheritance
 *                 Works</a> in the <i>AWS Organizations User Guide</i>.</p>
 *         <p>This operation can be called only from the organization's
 * management account or by a member account that is a delegated administrator for an AWS service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OrganizationsClient, DescribeEffectivePolicyCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, DescribeEffectivePolicyCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const command = new DescribeEffectivePolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeEffectivePolicyCommandInput} for command's `input` shape.
 * @see {@link DescribeEffectivePolicyCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeEffectivePolicyCommand = /** @class */ (function (_super) {
    __extends(DescribeEffectivePolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeEffectivePolicyCommand(input) {
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
    DescribeEffectivePolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "OrganizationsClient";
        var commandName = "DescribeEffectivePolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeEffectivePolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeEffectivePolicyResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeEffectivePolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeEffectivePolicyCommand(input, context);
    };
    DescribeEffectivePolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeEffectivePolicyCommand(output, context);
    };
    return DescribeEffectivePolicyCommand;
}($Command));
export { DescribeEffectivePolicyCommand };
//# sourceMappingURL=DescribeEffectivePolicyCommand.js.map