"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeComplianceByConfigRuleCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
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
class DescribeComplianceByConfigRuleCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "ConfigServiceClient";
        const commandName = "DescribeComplianceByConfigRuleCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DescribeComplianceByConfigRuleRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DescribeComplianceByConfigRuleResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1DescribeComplianceByConfigRuleCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1DescribeComplianceByConfigRuleCommand(output, context);
    }
}
exports.DescribeComplianceByConfigRuleCommand = DescribeComplianceByConfigRuleCommand;
//# sourceMappingURL=DescribeComplianceByConfigRuleCommand.js.map