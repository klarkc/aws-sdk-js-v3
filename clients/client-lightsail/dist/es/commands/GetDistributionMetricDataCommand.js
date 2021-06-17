import { __extends } from "tslib";
import { GetDistributionMetricDataRequest, GetDistributionMetricDataResult } from "../models/models_0";
import { deserializeAws_json1_1GetDistributionMetricDataCommand, serializeAws_json1_1GetDistributionMetricDataCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the data points of a specific metric for an Amazon Lightsail content delivery
 *       network (CDN) distribution.</p>
 *          <p>Metrics report the utilization of your resources, and the error counts generated by them.
 *       Monitor and collect metric data regularly to maintain the reliability, availability, and
 *       performance of your resources.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetDistributionMetricDataCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetDistributionMetricDataCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetDistributionMetricDataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDistributionMetricDataCommandInput} for command's `input` shape.
 * @see {@link GetDistributionMetricDataCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetDistributionMetricDataCommand = /** @class */ (function (_super) {
    __extends(GetDistributionMetricDataCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetDistributionMetricDataCommand(input) {
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
    GetDistributionMetricDataCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "GetDistributionMetricDataCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetDistributionMetricDataRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetDistributionMetricDataResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetDistributionMetricDataCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetDistributionMetricDataCommand(input, context);
    };
    GetDistributionMetricDataCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetDistributionMetricDataCommand(output, context);
    };
    return GetDistributionMetricDataCommand;
}($Command));
export { GetDistributionMetricDataCommand };
//# sourceMappingURL=GetDistributionMetricDataCommand.js.map