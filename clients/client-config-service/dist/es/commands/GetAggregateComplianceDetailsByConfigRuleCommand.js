import { __extends } from "tslib";
import { GetAggregateComplianceDetailsByConfigRuleRequest, GetAggregateComplianceDetailsByConfigRuleResponse, } from "../models/models_0";
import { deserializeAws_json1_1GetAggregateComplianceDetailsByConfigRuleCommand, serializeAws_json1_1GetAggregateComplianceDetailsByConfigRuleCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the evaluation results for the specified AWS Config
 * 			rule for a specific resource in a rule. The results indicate which
 * 			AWS resources were evaluated by the rule, when each resource was
 * 			last evaluated, and whether each resource complies with the rule. </p>
 * 		       <note>
 * 			         <p>The results can return an empty result page. But if you
 * 				have a <code>nextToken</code>, the results are displayed on the next
 * 				page.</p>
 * 		       </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, GetAggregateComplianceDetailsByConfigRuleCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, GetAggregateComplianceDetailsByConfigRuleCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new GetAggregateComplianceDetailsByConfigRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAggregateComplianceDetailsByConfigRuleCommandInput} for command's `input` shape.
 * @see {@link GetAggregateComplianceDetailsByConfigRuleCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetAggregateComplianceDetailsByConfigRuleCommand = /** @class */ (function (_super) {
    __extends(GetAggregateComplianceDetailsByConfigRuleCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetAggregateComplianceDetailsByConfigRuleCommand(input) {
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
    GetAggregateComplianceDetailsByConfigRuleCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConfigServiceClient";
        var commandName = "GetAggregateComplianceDetailsByConfigRuleCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetAggregateComplianceDetailsByConfigRuleRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetAggregateComplianceDetailsByConfigRuleResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetAggregateComplianceDetailsByConfigRuleCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetAggregateComplianceDetailsByConfigRuleCommand(input, context);
    };
    GetAggregateComplianceDetailsByConfigRuleCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetAggregateComplianceDetailsByConfigRuleCommand(output, context);
    };
    return GetAggregateComplianceDetailsByConfigRuleCommand;
}($Command));
export { GetAggregateComplianceDetailsByConfigRuleCommand };
//# sourceMappingURL=GetAggregateComplianceDetailsByConfigRuleCommand.js.map