import { __extends } from "tslib";
import { DescribeBandwidthRateLimitScheduleInput, DescribeBandwidthRateLimitScheduleOutput } from "../models/models_0";
import { deserializeAws_json1_1DescribeBandwidthRateLimitScheduleCommand, serializeAws_json1_1DescribeBandwidthRateLimitScheduleCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *          Returns information about the bandwidth rate limit schedule of a gateway. By default, gateways do
 *          not have bandwidth rate limit schedules, which means no bandwidth rate limiting is in effect. This
 *          operation is supported only in the volume and tape gateway types.
 *       </p>
 *
 *          <p>This operation returns information about a gateway's bandwidth rate limit schedule. A bandwidth
 *          rate limit schedule consists of one or more bandwidth rate limit intervals. A bandwidth rate limit
 *          interval defines a period of time on one or more days of the week, during which bandwidth rate
 *          limits are specified for uploading, downloading, or both.
 *       </p>
 *
 *          <p>
 *          A bandwidth rate limit interval consists of one or more days of the week, a start hour and minute,
 *          an ending hour and minute, and bandwidth rate limits for uploading and downloading
 *       </p>
 *
 *          <p>
 *          If no bandwidth rate limit schedule intervals are set for the gateway, this operation returns an
 *          empty response. To specify which gateway to describe, use the Amazon Resource Name (ARN)
 *          of the gateway in your request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DescribeBandwidthRateLimitScheduleCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DescribeBandwidthRateLimitScheduleCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new DescribeBandwidthRateLimitScheduleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeBandwidthRateLimitScheduleCommandInput} for command's `input` shape.
 * @see {@link DescribeBandwidthRateLimitScheduleCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeBandwidthRateLimitScheduleCommand = /** @class */ (function (_super) {
    __extends(DescribeBandwidthRateLimitScheduleCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeBandwidthRateLimitScheduleCommand(input) {
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
    DescribeBandwidthRateLimitScheduleCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "StorageGatewayClient";
        var commandName = "DescribeBandwidthRateLimitScheduleCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeBandwidthRateLimitScheduleInput.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeBandwidthRateLimitScheduleOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeBandwidthRateLimitScheduleCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeBandwidthRateLimitScheduleCommand(input, context);
    };
    DescribeBandwidthRateLimitScheduleCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeBandwidthRateLimitScheduleCommand(output, context);
    };
    return DescribeBandwidthRateLimitScheduleCommand;
}($Command));
export { DescribeBandwidthRateLimitScheduleCommand };
//# sourceMappingURL=DescribeBandwidthRateLimitScheduleCommand.js.map