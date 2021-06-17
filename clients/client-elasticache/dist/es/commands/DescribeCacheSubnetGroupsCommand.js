import { __extends } from "tslib";
import { CacheSubnetGroupMessage, DescribeCacheSubnetGroupsMessage } from "../models/models_0";
import { deserializeAws_queryDescribeCacheSubnetGroupsCommand, serializeAws_queryDescribeCacheSubnetGroupsCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of cache subnet group
 *             descriptions. If a subnet group name is specified, the list  contains only the
 *             description of that group. This is applicable only when you have ElastiCache in VPC setup. All ElastiCache clusters now launch in VPC by default.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, DescribeCacheSubnetGroupsCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, DescribeCacheSubnetGroupsCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new DescribeCacheSubnetGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeCacheSubnetGroupsCommandInput} for command's `input` shape.
 * @see {@link DescribeCacheSubnetGroupsCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeCacheSubnetGroupsCommand = /** @class */ (function (_super) {
    __extends(DescribeCacheSubnetGroupsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeCacheSubnetGroupsCommand(input) {
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
    DescribeCacheSubnetGroupsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElastiCacheClient";
        var commandName = "DescribeCacheSubnetGroupsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeCacheSubnetGroupsMessage.filterSensitiveLog,
            outputFilterSensitiveLog: CacheSubnetGroupMessage.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeCacheSubnetGroupsCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDescribeCacheSubnetGroupsCommand(input, context);
    };
    DescribeCacheSubnetGroupsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDescribeCacheSubnetGroupsCommand(output, context);
    };
    return DescribeCacheSubnetGroupsCommand;
}($Command));
export { DescribeCacheSubnetGroupsCommand };
//# sourceMappingURL=DescribeCacheSubnetGroupsCommand.js.map