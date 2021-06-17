import { __extends } from "tslib";
import { DescribeCacheInput, DescribeCacheOutput } from "../models/models_0";
import { deserializeAws_json1_1DescribeCacheCommand, serializeAws_json1_1DescribeCacheCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about the cache of a gateway. This operation is only supported in
 *          the cached volume, tape, and file gateway types.</p>
 *
 *          <p>The response includes disk IDs that are configured as cache, and it includes the amount
 *          of cache allocated and used.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DescribeCacheCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DescribeCacheCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new DescribeCacheCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeCacheCommandInput} for command's `input` shape.
 * @see {@link DescribeCacheCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeCacheCommand = /** @class */ (function (_super) {
    __extends(DescribeCacheCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeCacheCommand(input) {
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
    DescribeCacheCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "StorageGatewayClient";
        var commandName = "DescribeCacheCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeCacheInput.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeCacheOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeCacheCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeCacheCommand(input, context);
    };
    DescribeCacheCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeCacheCommand(output, context);
    };
    return DescribeCacheCommand;
}($Command));
export { DescribeCacheCommand };
//# sourceMappingURL=DescribeCacheCommand.js.map