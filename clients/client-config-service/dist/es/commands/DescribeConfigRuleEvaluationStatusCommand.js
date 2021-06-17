import { __extends } from "tslib";
import { DescribeConfigRuleEvaluationStatusRequest, DescribeConfigRuleEvaluationStatusResponse, } from "../models/models_0";
import { deserializeAws_json1_1DescribeConfigRuleEvaluationStatusCommand, serializeAws_json1_1DescribeConfigRuleEvaluationStatusCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns status information for each of your AWS managed Config
 * 			rules. The status includes information such as the last time AWS
 * 			Config invoked the rule, the last time AWS Config failed to invoke
 * 			the rule, and the related error for the last failure.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DescribeConfigRuleEvaluationStatusCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DescribeConfigRuleEvaluationStatusCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new DescribeConfigRuleEvaluationStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeConfigRuleEvaluationStatusCommandInput} for command's `input` shape.
 * @see {@link DescribeConfigRuleEvaluationStatusCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeConfigRuleEvaluationStatusCommand = /** @class */ (function (_super) {
    __extends(DescribeConfigRuleEvaluationStatusCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeConfigRuleEvaluationStatusCommand(input) {
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
    DescribeConfigRuleEvaluationStatusCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConfigServiceClient";
        var commandName = "DescribeConfigRuleEvaluationStatusCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeConfigRuleEvaluationStatusRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeConfigRuleEvaluationStatusResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeConfigRuleEvaluationStatusCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeConfigRuleEvaluationStatusCommand(input, context);
    };
    DescribeConfigRuleEvaluationStatusCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeConfigRuleEvaluationStatusCommand(output, context);
    };
    return DescribeConfigRuleEvaluationStatusCommand;
}($Command));
export { DescribeConfigRuleEvaluationStatusCommand };
//# sourceMappingURL=DescribeConfigRuleEvaluationStatusCommand.js.map