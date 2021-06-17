import { __extends } from "tslib";
import { CacheSecurityGroupMessage, DescribeCacheSecurityGroupsMessage } from "../models/models_0";
import { deserializeAws_queryDescribeCacheSecurityGroupsCommand, serializeAws_queryDescribeCacheSecurityGroupsCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of cache security group
 *             descriptions. If a cache security group name is specified, the list contains only
 *             the description of that group. This applicable only when you have ElastiCache in Classic setup
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, DescribeCacheSecurityGroupsCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, DescribeCacheSecurityGroupsCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new DescribeCacheSecurityGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeCacheSecurityGroupsCommandInput} for command's `input` shape.
 * @see {@link DescribeCacheSecurityGroupsCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeCacheSecurityGroupsCommand = /** @class */ (function (_super) {
    __extends(DescribeCacheSecurityGroupsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeCacheSecurityGroupsCommand(input) {
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
    DescribeCacheSecurityGroupsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElastiCacheClient";
        var commandName = "DescribeCacheSecurityGroupsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeCacheSecurityGroupsMessage.filterSensitiveLog,
            outputFilterSensitiveLog: CacheSecurityGroupMessage.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeCacheSecurityGroupsCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDescribeCacheSecurityGroupsCommand(input, context);
    };
    DescribeCacheSecurityGroupsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDescribeCacheSecurityGroupsCommand(output, context);
    };
    return DescribeCacheSecurityGroupsCommand;
}($Command));
export { DescribeCacheSecurityGroupsCommand };
//# sourceMappingURL=DescribeCacheSecurityGroupsCommand.js.map