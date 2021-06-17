import { __extends } from "tslib";
import { GetContainerServiceMetricDataRequest, GetContainerServiceMetricDataResult } from "../models/models_0";
import { deserializeAws_json1_1GetContainerServiceMetricDataCommand, serializeAws_json1_1GetContainerServiceMetricDataCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the data points of a specific metric of your Amazon Lightsail container
 *       service.</p>
 *
 *          <p>Metrics report the utilization of your resources. Monitor and collect metric data
 *       regularly to maintain the reliability, availability, and performance of your resources.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetContainerServiceMetricDataCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetContainerServiceMetricDataCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetContainerServiceMetricDataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetContainerServiceMetricDataCommandInput} for command's `input` shape.
 * @see {@link GetContainerServiceMetricDataCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetContainerServiceMetricDataCommand = /** @class */ (function (_super) {
    __extends(GetContainerServiceMetricDataCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetContainerServiceMetricDataCommand(input) {
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
    GetContainerServiceMetricDataCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "GetContainerServiceMetricDataCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetContainerServiceMetricDataRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetContainerServiceMetricDataResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetContainerServiceMetricDataCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetContainerServiceMetricDataCommand(input, context);
    };
    GetContainerServiceMetricDataCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetContainerServiceMetricDataCommand(output, context);
    };
    return GetContainerServiceMetricDataCommand;
}($Command));
export { GetContainerServiceMetricDataCommand };
//# sourceMappingURL=GetContainerServiceMetricDataCommand.js.map