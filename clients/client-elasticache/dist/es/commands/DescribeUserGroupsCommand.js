import { __extends } from "tslib";
import { DescribeUserGroupsMessage, DescribeUserGroupsResult } from "../models/models_0";
import { deserializeAws_queryDescribeUserGroupsCommand, serializeAws_queryDescribeUserGroupsCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of user groups.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, DescribeUserGroupsCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, DescribeUserGroupsCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new DescribeUserGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeUserGroupsCommandInput} for command's `input` shape.
 * @see {@link DescribeUserGroupsCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeUserGroupsCommand = /** @class */ (function (_super) {
    __extends(DescribeUserGroupsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeUserGroupsCommand(input) {
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
    DescribeUserGroupsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElastiCacheClient";
        var commandName = "DescribeUserGroupsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeUserGroupsMessage.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeUserGroupsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeUserGroupsCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDescribeUserGroupsCommand(input, context);
    };
    DescribeUserGroupsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDescribeUserGroupsCommand(output, context);
    };
    return DescribeUserGroupsCommand;
}($Command));
export { DescribeUserGroupsCommand };
//# sourceMappingURL=DescribeUserGroupsCommand.js.map