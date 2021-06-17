import { __extends } from "tslib";
import { DescribeComplianceByConfigRuleRequest, DescribeComplianceByConfigRuleResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeComplianceByConfigRuleCommand, serializeAws_json1_1DescribeComplianceByConfigRuleCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Indicates whether the specified AWS Config rules are compliant.
 * 			If a rule is noncompliant, this action returns the number of AWS
 * 			resources that do not comply with the rule.</p>
 * 		       <p>A rule is compliant if all of the evaluated resources comply
 * 			with it. It is noncompliant if any of these resources do not
 * 			comply.</p>
 * 		       <p>If AWS Config has no current evaluation results for the rule,
 * 			it returns <code>INSUFFICIENT_DATA</code>. This result might
 * 			indicate one of the following conditions:</p>
 * 		       <ul>
 *             <li>
 * 				           <p>AWS Config has never invoked an evaluation for the
 * 					rule. To check whether it has, use the
 * 						<code>DescribeConfigRuleEvaluationStatus</code> action
 * 					to get the <code>LastSuccessfulInvocationTime</code> and
 * 						<code>LastFailedInvocationTime</code>.</p>
 * 			         </li>
 *             <li>
 * 				           <p>The rule's AWS Lambda function is failing to send
 * 					evaluation results to AWS Config. Verify that the role you
 * 					assigned to your configuration recorder includes the
 * 						<code>config:PutEvaluations</code> permission. If the
 * 					rule is a custom rule, verify that the AWS Lambda execution
 * 					role includes the <code>config:PutEvaluations</code>
 * 					permission.</p>
 * 			         </li>
 *             <li>
 * 				           <p>The rule's AWS Lambda function has returned
 * 						<code>NOT_APPLICABLE</code> for all evaluation results.
 * 					This can occur if the resources were deleted or removed from
 * 					the rule's scope.</p>
 * 			         </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DescribeComplianceByConfigRuleCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DescribeComplianceByConfigRuleCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new DescribeComplianceByConfigRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeComplianceByConfigRuleCommandInput} for command's `input` shape.
 * @see {@link DescribeComplianceByConfigRuleCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeComplianceByConfigRuleCommand = /** @class */ (function (_super) {
    __extends(DescribeComplianceByConfigRuleCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeComplianceByConfigRuleCommand(input) {
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
    DescribeComplianceByConfigRuleCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConfigServiceClient";
        var commandName = "DescribeComplianceByConfigRuleCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeComplianceByConfigRuleRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeComplianceByConfigRuleResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeComplianceByConfigRuleCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeComplianceByConfigRuleCommand(input, context);
    };
    DescribeComplianceByConfigRuleCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeComplianceByConfigRuleCommand(output, context);
    };
    return DescribeComplianceByConfigRuleCommand;
}($Command));
export { DescribeComplianceByConfigRuleCommand };
//# sourceMappingURL=DescribeComplianceByConfigRuleCommand.js.map