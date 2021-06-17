import { __extends } from "tslib";
import { DescribeBandwidthRateLimitInput, DescribeBandwidthRateLimitOutput } from "../models/models_0";
import { deserializeAws_json1_1DescribeBandwidthRateLimitCommand, serializeAws_json1_1DescribeBandwidthRateLimitCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the bandwidth rate limits of a gateway. By default, these limits are not set,
 *          which means no bandwidth rate limiting is in effect. This operation is supported for the
 *          stored volume, cached volume, and tape gateway types.</p>
 *
 *          <p>This operation only returns a value for a bandwidth rate limit only if the limit is set.
 *          If no limits are set for the gateway, then this operation returns only the gateway ARN in
 *          the response body. To specify which gateway to describe, use the Amazon Resource Name (ARN)
 *          of the gateway in your request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DescribeBandwidthRateLimitCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DescribeBandwidthRateLimitCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new DescribeBandwidthRateLimitCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeBandwidthRateLimitCommandInput} for command's `input` shape.
 * @see {@link DescribeBandwidthRateLimitCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeBandwidthRateLimitCommand = /** @class */ (function (_super) {
    __extends(DescribeBandwidthRateLimitCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeBandwidthRateLimitCommand(input) {
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
    DescribeBandwidthRateLimitCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "StorageGatewayClient";
        var commandName = "DescribeBandwidthRateLimitCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeBandwidthRateLimitInput.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeBandwidthRateLimitOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeBandwidthRateLimitCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeBandwidthRateLimitCommand(input, context);
    };
    DescribeBandwidthRateLimitCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeBandwidthRateLimitCommand(output, context);
    };
    return DescribeBandwidthRateLimitCommand;
}($Command));
export { DescribeBandwidthRateLimitCommand };
//# sourceMappingURL=DescribeBandwidthRateLimitCommand.js.map