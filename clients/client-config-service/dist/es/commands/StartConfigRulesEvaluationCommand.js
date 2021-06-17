import { __extends } from "tslib";
import { StartConfigRulesEvaluationRequest, StartConfigRulesEvaluationResponse } from "../models/models_1";
import { deserializeAws_json1_1StartConfigRulesEvaluationCommand, serializeAws_json1_1StartConfigRulesEvaluationCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var StartConfigRulesEvaluationCommand = /** @class */ (function (_super) {
    __extends(StartConfigRulesEvaluationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartConfigRulesEvaluationCommand(input) {
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
    StartConfigRulesEvaluationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConfigServiceClient";
        var commandName = "StartConfigRulesEvaluationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartConfigRulesEvaluationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StartConfigRulesEvaluationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartConfigRulesEvaluationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1StartConfigRulesEvaluationCommand(input, context);
    };
    StartConfigRulesEvaluationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1StartConfigRulesEvaluationCommand(output, context);
    };
    return StartConfigRulesEvaluationCommand;
}($Command));
export { StartConfigRulesEvaluationCommand };
//# sourceMappingURL=StartConfigRulesEvaluationCommand.js.map