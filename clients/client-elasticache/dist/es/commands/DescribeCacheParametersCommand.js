import { __extends } from "tslib";
import { CacheParameterGroupDetails, DescribeCacheParametersMessage } from "../models/models_0";
import { deserializeAws_queryDescribeCacheParametersCommand, serializeAws_queryDescribeCacheParametersCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the detailed parameter list for a
 *             particular cache parameter group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, DescribeCacheParametersCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, DescribeCacheParametersCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new DescribeCacheParametersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeCacheParametersCommandInput} for command's `input` shape.
 * @see {@link DescribeCacheParametersCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeCacheParametersCommand = /** @class */ (function (_super) {
    __extends(DescribeCacheParametersCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeCacheParametersCommand(input) {
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
    DescribeCacheParametersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElastiCacheClient";
        var commandName = "DescribeCacheParametersCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeCacheParametersMessage.filterSensitiveLog,
            outputFilterSensitiveLog: CacheParameterGroupDetails.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeCacheParametersCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDescribeCacheParametersCommand(input, context);
    };
    DescribeCacheParametersCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDescribeCacheParametersCommand(output, context);
    };
    return DescribeCacheParametersCommand;
}($Command));
export { DescribeCacheParametersCommand };
//# sourceMappingURL=DescribeCacheParametersCommand.js.map