import { __extends } from "tslib";
import { UpdateBandwidthRateLimitScheduleInput, UpdateBandwidthRateLimitScheduleOutput } from "../models/models_0";
import { deserializeAws_json1_1UpdateBandwidthRateLimitScheduleCommand, serializeAws_json1_1UpdateBandwidthRateLimitScheduleCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *          Updates the bandwidth rate limit schedule for a specified gateway. By default, gateways do
 *          not have bandwidth rate limit schedules, which means no bandwidth rate limiting is in effect.
 *          Use this to initiate or update a gateway's bandwidth rate limit schedule.
 *          This operation is supported in the volume and tape gateway types.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, UpdateBandwidthRateLimitScheduleCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, UpdateBandwidthRateLimitScheduleCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new UpdateBandwidthRateLimitScheduleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateBandwidthRateLimitScheduleCommandInput} for command's `input` shape.
 * @see {@link UpdateBandwidthRateLimitScheduleCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateBandwidthRateLimitScheduleCommand = /** @class */ (function (_super) {
    __extends(UpdateBandwidthRateLimitScheduleCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateBandwidthRateLimitScheduleCommand(input) {
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
    UpdateBandwidthRateLimitScheduleCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "StorageGatewayClient";
        var commandName = "UpdateBandwidthRateLimitScheduleCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateBandwidthRateLimitScheduleInput.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateBandwidthRateLimitScheduleOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateBandwidthRateLimitScheduleCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateBandwidthRateLimitScheduleCommand(input, context);
    };
    UpdateBandwidthRateLimitScheduleCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateBandwidthRateLimitScheduleCommand(output, context);
    };
    return UpdateBandwidthRateLimitScheduleCommand;
}($Command));
export { UpdateBandwidthRateLimitScheduleCommand };
//# sourceMappingURL=UpdateBandwidthRateLimitScheduleCommand.js.map