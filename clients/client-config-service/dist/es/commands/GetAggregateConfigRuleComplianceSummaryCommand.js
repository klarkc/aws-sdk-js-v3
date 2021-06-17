import { __extends } from "tslib";
import { GetAggregateConfigRuleComplianceSummaryRequest, GetAggregateConfigRuleComplianceSummaryResponse, } from "../models/models_0";
import { deserializeAws_json1_1GetAggregateConfigRuleComplianceSummaryCommand, serializeAws_json1_1GetAggregateConfigRuleComplianceSummaryCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the number of compliant and noncompliant rules for one
 * 			or more accounts and regions in an aggregator.</p>
 * 		       <note>
 * 			         <p>The results can return an empty result page, but if you
 * 				have a nextToken, the results are displayed on the next
 * 				page.</p>
 * 		       </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, GetAggregateConfigRuleComplianceSummaryCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, GetAggregateConfigRuleComplianceSummaryCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new GetAggregateConfigRuleComplianceSummaryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAggregateConfigRuleComplianceSummaryCommandInput} for command's `input` shape.
 * @see {@link GetAggregateConfigRuleComplianceSummaryCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetAggregateConfigRuleComplianceSummaryCommand = /** @class */ (function (_super) {
    __extends(GetAggregateConfigRuleComplianceSummaryCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetAggregateConfigRuleComplianceSummaryCommand(input) {
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
    GetAggregateConfigRuleComplianceSummaryCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConfigServiceClient";
        var commandName = "GetAggregateConfigRuleComplianceSummaryCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetAggregateConfigRuleComplianceSummaryRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetAggregateConfigRuleComplianceSummaryResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetAggregateConfigRuleComplianceSummaryCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetAggregateConfigRuleComplianceSummaryCommand(input, context);
    };
    GetAggregateConfigRuleComplianceSummaryCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetAggregateConfigRuleComplianceSummaryCommand(output, context);
    };
    return GetAggregateConfigRuleComplianceSummaryCommand;
}($Command));
export { GetAggregateConfigRuleComplianceSummaryCommand };
//# sourceMappingURL=GetAggregateConfigRuleComplianceSummaryCommand.js.map