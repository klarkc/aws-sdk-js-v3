import { __extends } from "tslib";
import { DescribeServiceUpdatesMessage, ServiceUpdatesMessage } from "../models/models_0";
import { deserializeAws_queryDescribeServiceUpdatesCommand, serializeAws_queryDescribeServiceUpdatesCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns details of the service updates</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, DescribeServiceUpdatesCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, DescribeServiceUpdatesCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new DescribeServiceUpdatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeServiceUpdatesCommandInput} for command's `input` shape.
 * @see {@link DescribeServiceUpdatesCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeServiceUpdatesCommand = /** @class */ (function (_super) {
    __extends(DescribeServiceUpdatesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeServiceUpdatesCommand(input) {
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
    DescribeServiceUpdatesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElastiCacheClient";
        var commandName = "DescribeServiceUpdatesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeServiceUpdatesMessage.filterSensitiveLog,
            outputFilterSensitiveLog: ServiceUpdatesMessage.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeServiceUpdatesCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDescribeServiceUpdatesCommand(input, context);
    };
    DescribeServiceUpdatesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDescribeServiceUpdatesCommand(output, context);
    };
    return DescribeServiceUpdatesCommand;
}($Command));
export { DescribeServiceUpdatesCommand };
//# sourceMappingURL=DescribeServiceUpdatesCommand.js.map