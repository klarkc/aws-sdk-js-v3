"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StartConfigRulesEvaluationCommand = void 0;
const models_1_1 = require("../models/models_1");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Runs an on-demand evaluation for the specified AWS Config rules
 * 			against the last known configuration state of the resources. Use
 * 				<code>StartConfigRulesEvaluation</code> when you want to test
 * 			that a rule you updated is working as expected.
 * 				<code>StartConfigRulesEvaluation</code> does not re-record the
 * 			latest configuration state for your resources. It re-runs an
 * 			evaluation against the last known state of your resources. </p>
 * 		       <p>You can specify up to 25 AWS Config rules per request. </p>
 *
 *
 * 		       <p>An existing <code>StartConfigRulesEvaluation</code> call for
 * 			the specified rules must complete before you can call the API again.
 * 			If you chose to have AWS Config stream to an Amazon SNS topic, you
 * 			will receive a <code>ConfigRuleEvaluationStarted</code> notification
 * 			when the evaluation starts.</p>
 * 		       <note>
 * 			         <p>You don't need to call the
 * 					<code>StartConfigRulesEvaluation</code> API to run an
 * 				evaluation for a new rule. When you create a rule, AWS Config
 * 				evaluates your resources against the rule automatically.
 * 			</p>
 * 		       </note>
 * 		       <p>The <code>StartConfigRulesEvaluation</code> API is useful if
 * 			you want to run on-demand evaluations, such as the following
 * 			example:</p>
 * 		       <ol>
 *             <li>
 * 				           <p>You have a custom rule that evaluates your IAM
 * 					resources every 24 hours.</p>
 * 			         </li>
 *             <li>
 * 				           <p>You update your Lambda function to add additional
 * 					conditions to your rule.</p>
 * 			         </li>
 *             <li>
 * 				           <p>Instead of waiting for the next periodic evaluation,
 * 					you call the <code>StartConfigRulesEvaluation</code>
 * 					API.</p>
 * 			         </li>
 *             <li>
 * 				           <p>AWS Config invokes your Lambda function and evaluates
 * 					your IAM resources.</p>
 * 			         </li>
 *             <li>
 * 				           <p>Your custom rule will still run periodic evaluations
 * 					every 24 hours.</p>
 * 			         </li>
 *          </ol>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, StartConfigRulesEvaluationCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, StartConfigRulesEvaluationCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new StartConfigRulesEvaluationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartConfigRulesEvaluationCommandInput} for command's `input` shape.
 * @see {@link StartConfigRulesEvaluationCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
class StartConfigRulesEvaluationCommand extends smithy_client_1.Command {
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
        const commandName = "StartConfigRulesEvaluationCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_1_1.StartConfigRulesEvaluationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_1_1.StartConfigRulesEvaluationResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1StartConfigRulesEvaluationCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1StartConfigRulesEvaluationCommand(output, context);
    }
}
exports.StartConfigRulesEvaluationCommand = StartConfigRulesEvaluationCommand;
//# sourceMappingURL=StartConfigRulesEvaluationCommand.js.map