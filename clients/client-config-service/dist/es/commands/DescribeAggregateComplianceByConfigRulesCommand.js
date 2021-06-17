import { __extends } from "tslib";
import { DescribeAggregateComplianceByConfigRulesRequest, DescribeAggregateComplianceByConfigRulesResponse, } from "../models/models_0";
import { deserializeAws_json1_1DescribeAggregateComplianceByConfigRulesCommand, serializeAws_json1_1DescribeAggregateComplianceByConfigRulesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of compliant and noncompliant rules with the
 * 			number of resources for compliant and noncompliant rules.
 * 			</p>
 * 		       <note>
 * 			         <p>The results can return an empty result page, but if you
 * 				have a <code>nextToken</code>, the results are displayed on the next
 * 				page.</p>
 * 		       </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DescribeAggregateComplianceByConfigRulesCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DescribeAggregateComplianceByConfigRulesCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new DescribeAggregateComplianceByConfigRulesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAggregateComplianceByConfigRulesCommandInput} for command's `input` shape.
 * @see {@link DescribeAggregateComplianceByConfigRulesCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeAggregateComplianceByConfigRulesCommand = /** @class */ (function (_super) {
    __extends(DescribeAggregateComplianceByConfigRulesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeAggregateComplianceByConfigRulesCommand(input) {
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
    DescribeAggregateComplianceByConfigRulesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConfigServiceClient";
        var commandName = "DescribeAggregateComplianceByConfigRulesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeAggregateComplianceByConfigRulesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeAggregateComplianceByConfigRulesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeAggregateComplianceByConfigRulesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeAggregateComplianceByConfigRulesCommand(input, context);
    };
    DescribeAggregateComplianceByConfigRulesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeAggregateComplianceByConfigRulesCommand(output, context);
    };
    return DescribeAggregateComplianceByConfigRulesCommand;
}($Command));
export { DescribeAggregateComplianceByConfigRulesCommand };
//# sourceMappingURL=DescribeAggregateComplianceByConfigRulesCommand.js.map