import { __extends } from "tslib";
import { DescribeComplianceByResourceRequest, DescribeComplianceByResourceResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeComplianceByResourceCommand, serializeAws_json1_1DescribeComplianceByResourceCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Indicates whether the specified AWS resources are compliant. If
 * 			a resource is noncompliant, this action returns the number of AWS
 * 			Config rules that the resource does not comply with.</p>
 * 		       <p>A resource is compliant if it complies with all the AWS Config
 * 			rules that evaluate it. It is noncompliant if it does not comply
 * 			with one or more of these rules.</p>
 * 		       <p>If AWS Config has no current evaluation results for the
 * 			resource, it returns <code>INSUFFICIENT_DATA</code>. This result
 * 			might indicate one of the following conditions about the rules that
 * 			evaluate the resource:</p>
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
 * 					evaluation results to AWS Config. Verify that the role that
 * 					you assigned to your configuration recorder includes the
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
 * import { ConfigServiceClient, DescribeComplianceByResourceCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DescribeComplianceByResourceCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new DescribeComplianceByResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeComplianceByResourceCommandInput} for command's `input` shape.
 * @see {@link DescribeComplianceByResourceCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeComplianceByResourceCommand = /** @class */ (function (_super) {
    __extends(DescribeComplianceByResourceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeComplianceByResourceCommand(input) {
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
    DescribeComplianceByResourceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConfigServiceClient";
        var commandName = "DescribeComplianceByResourceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeComplianceByResourceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeComplianceByResourceResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeComplianceByResourceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeComplianceByResourceCommand(input, context);
    };
    DescribeComplianceByResourceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeComplianceByResourceCommand(output, context);
    };
    return DescribeComplianceByResourceCommand;
}($Command));
export { DescribeComplianceByResourceCommand };
//# sourceMappingURL=DescribeComplianceByResourceCommand.js.map