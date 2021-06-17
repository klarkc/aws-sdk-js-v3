import { __extends } from "tslib";
import { CacheEngineVersionMessage, DescribeCacheEngineVersionsMessage } from "../models/models_0";
import { deserializeAws_queryDescribeCacheEngineVersionsCommand, serializeAws_queryDescribeCacheEngineVersionsCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of the available cache
 *             engines and their versions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, DescribeCacheEngineVersionsCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, DescribeCacheEngineVersionsCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new DescribeCacheEngineVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeCacheEngineVersionsCommandInput} for command's `input` shape.
 * @see {@link DescribeCacheEngineVersionsCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeCacheEngineVersionsCommand = /** @class */ (function (_super) {
    __extends(DescribeCacheEngineVersionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeCacheEngineVersionsCommand(input) {
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
    DescribeCacheEngineVersionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElastiCacheClient";
        var commandName = "DescribeCacheEngineVersionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeCacheEngineVersionsMessage.filterSensitiveLog,
            outputFilterSensitiveLog: CacheEngineVersionMessage.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeCacheEngineVersionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDescribeCacheEngineVersionsCommand(input, context);
    };
    DescribeCacheEngineVersionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDescribeCacheEngineVersionsCommand(output, context);
    };
    return DescribeCacheEngineVersionsCommand;
}($Command));
export { DescribeCacheEngineVersionsCommand };
//# sourceMappingURL=DescribeCacheEngineVersionsCommand.js.map