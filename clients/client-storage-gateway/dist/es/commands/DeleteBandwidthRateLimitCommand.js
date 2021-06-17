import { __extends } from "tslib";
import { DeleteBandwidthRateLimitInput, DeleteBandwidthRateLimitOutput } from "../models/models_0";
import { deserializeAws_json1_1DeleteBandwidthRateLimitCommand, serializeAws_json1_1DeleteBandwidthRateLimitCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the bandwidth rate limits of a gateway. You can delete either the upload and
 *          download bandwidth rate limit, or you can delete both. If you delete only one of the
 *          limits, the other limit remains unchanged. To specify which gateway to work with, use the
 *          Amazon Resource Name (ARN) of the gateway in your request. This operation is supported for
 *          the stored volume, cached volume and tape gateway types.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DeleteBandwidthRateLimitCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DeleteBandwidthRateLimitCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new DeleteBandwidthRateLimitCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteBandwidthRateLimitCommandInput} for command's `input` shape.
 * @see {@link DeleteBandwidthRateLimitCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteBandwidthRateLimitCommand = /** @class */ (function (_super) {
    __extends(DeleteBandwidthRateLimitCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteBandwidthRateLimitCommand(input) {
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
    DeleteBandwidthRateLimitCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "StorageGatewayClient";
        var commandName = "DeleteBandwidthRateLimitCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteBandwidthRateLimitInput.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteBandwidthRateLimitOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteBandwidthRateLimitCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteBandwidthRateLimitCommand(input, context);
    };
    DeleteBandwidthRateLimitCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteBandwidthRateLimitCommand(output, context);
    };
    return DeleteBandwidthRateLimitCommand;
}($Command));
export { DeleteBandwidthRateLimitCommand };
//# sourceMappingURL=DeleteBandwidthRateLimitCommand.js.map