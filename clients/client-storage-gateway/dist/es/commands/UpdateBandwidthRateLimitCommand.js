import { __extends } from "tslib";
import { UpdateBandwidthRateLimitInput, UpdateBandwidthRateLimitOutput } from "../models/models_0";
import { deserializeAws_json1_1UpdateBandwidthRateLimitCommand, serializeAws_json1_1UpdateBandwidthRateLimitCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the bandwidth rate limits of a gateway. You can update both the upload and
 *          download bandwidth rate limit or specify only one of the two. If you don't set a
 *          bandwidth rate limit, the existing rate limit remains. This operation is supported for the
 *          stored volume, cached volume, and tape gateway types.</p>
 *
 *          <p>By default, a gateway's bandwidth rate limits are not set. If you don't set
 *          any limit, the gateway does not have any limitations on its bandwidth usage and could
 *          potentially use the maximum available bandwidth.</p>
 *
 *          <p>To specify which gateway to update, use the Amazon Resource Name (ARN) of the gateway in
 *          your request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, UpdateBandwidthRateLimitCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, UpdateBandwidthRateLimitCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new UpdateBandwidthRateLimitCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateBandwidthRateLimitCommandInput} for command's `input` shape.
 * @see {@link UpdateBandwidthRateLimitCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateBandwidthRateLimitCommand = /** @class */ (function (_super) {
    __extends(UpdateBandwidthRateLimitCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateBandwidthRateLimitCommand(input) {
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
    UpdateBandwidthRateLimitCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "StorageGatewayClient";
        var commandName = "UpdateBandwidthRateLimitCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateBandwidthRateLimitInput.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateBandwidthRateLimitOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateBandwidthRateLimitCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateBandwidthRateLimitCommand(input, context);
    };
    UpdateBandwidthRateLimitCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateBandwidthRateLimitCommand(output, context);
    };
    return UpdateBandwidthRateLimitCommand;
}($Command));
export { UpdateBandwidthRateLimitCommand };
//# sourceMappingURL=UpdateBandwidthRateLimitCommand.js.map