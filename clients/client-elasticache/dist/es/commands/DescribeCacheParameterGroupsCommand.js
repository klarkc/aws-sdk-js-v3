import { __extends } from "tslib";
import { CacheParameterGroupsMessage, DescribeCacheParameterGroupsMessage } from "../models/models_0";
import { deserializeAws_queryDescribeCacheParameterGroupsCommand, serializeAws_queryDescribeCacheParameterGroupsCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of cache parameter group
 *             descriptions. If a cache parameter group name is specified, the list contains only
 *             the descriptions for that group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, DescribeCacheParameterGroupsCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, DescribeCacheParameterGroupsCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new DescribeCacheParameterGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeCacheParameterGroupsCommandInput} for command's `input` shape.
 * @see {@link DescribeCacheParameterGroupsCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeCacheParameterGroupsCommand = /** @class */ (function (_super) {
    __extends(DescribeCacheParameterGroupsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeCacheParameterGroupsCommand(input) {
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
    DescribeCacheParameterGroupsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElastiCacheClient";
        var commandName = "DescribeCacheParameterGroupsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeCacheParameterGroupsMessage.filterSensitiveLog,
            outputFilterSensitiveLog: CacheParameterGroupsMessage.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeCacheParameterGroupsCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDescribeCacheParameterGroupsCommand(input, context);
    };
    DescribeCacheParameterGroupsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDescribeCacheParameterGroupsCommand(output, context);
    };
    return DescribeCacheParameterGroupsCommand;
}($Command));
export { DescribeCacheParameterGroupsCommand };
//# sourceMappingURL=DescribeCacheParameterGroupsCommand.js.map