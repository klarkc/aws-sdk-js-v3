import { __extends } from "tslib";
import { GetComplianceDetailsByConfigRuleRequest, GetComplianceDetailsByConfigRuleResponse } from "../models/models_0";
import { deserializeAws_json1_1GetComplianceDetailsByConfigRuleCommand, serializeAws_json1_1GetComplianceDetailsByConfigRuleCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the evaluation results for the specified AWS Config
 * 			rule. The results indicate which AWS resources were evaluated by the
 * 			rule, when each resource was last evaluated, and whether each
 * 			resource complies with the rule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, GetComplianceDetailsByConfigRuleCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, GetComplianceDetailsByConfigRuleCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new GetComplianceDetailsByConfigRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetComplianceDetailsByConfigRuleCommandInput} for command's `input` shape.
 * @see {@link GetComplianceDetailsByConfigRuleCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetComplianceDetailsByConfigRuleCommand = /** @class */ (function (_super) {
    __extends(GetComplianceDetailsByConfigRuleCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetComplianceDetailsByConfigRuleCommand(input) {
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
    GetComplianceDetailsByConfigRuleCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConfigServiceClient";
        var commandName = "GetComplianceDetailsByConfigRuleCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetComplianceDetailsByConfigRuleRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetComplianceDetailsByConfigRuleResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetComplianceDetailsByConfigRuleCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetComplianceDetailsByConfigRuleCommand(input, context);
    };
    GetComplianceDetailsByConfigRuleCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetComplianceDetailsByConfigRuleCommand(output, context);
    };
    return GetComplianceDetailsByConfigRuleCommand;
}($Command));
export { GetComplianceDetailsByConfigRuleCommand };
//# sourceMappingURL=GetComplianceDetailsByConfigRuleCommand.js.map