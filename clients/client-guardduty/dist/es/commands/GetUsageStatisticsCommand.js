import { __extends } from "tslib";
import { GetUsageStatisticsRequest, GetUsageStatisticsResponse } from "../models/models_0";
import { deserializeAws_restJson1GetUsageStatisticsCommand, serializeAws_restJson1GetUsageStatisticsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists Amazon GuardDuty usage statistics over the last 30 days for the specified detector
 *       ID. For newly enabled detectors or data sources the cost returned will include only the usage
 *       so far under 30 days, this may differ from the cost metrics in the console, which projects
 *       usage over 30 days to provide a monthly cost estimate. For more information see <a href="https://docs.aws.amazon.com/guardduty/latest/ug/monitoring_costs.html#usage-calculations">Understanding How Usage Costs are Calculated</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, GetUsageStatisticsCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, GetUsageStatisticsCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const command = new GetUsageStatisticsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetUsageStatisticsCommandInput} for command's `input` shape.
 * @see {@link GetUsageStatisticsCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetUsageStatisticsCommand = /** @class */ (function (_super) {
    __extends(GetUsageStatisticsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetUsageStatisticsCommand(input) {
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
    GetUsageStatisticsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GuardDutyClient";
        var commandName = "GetUsageStatisticsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetUsageStatisticsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetUsageStatisticsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetUsageStatisticsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetUsageStatisticsCommand(input, context);
    };
    GetUsageStatisticsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetUsageStatisticsCommand(output, context);
    };
    return GetUsageStatisticsCommand;
}($Command));
export { GetUsageStatisticsCommand };
//# sourceMappingURL=GetUsageStatisticsCommand.js.map