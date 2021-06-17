import { __extends } from "tslib";
import { DescribeUpdateActionsMessage, UpdateActionsMessage } from "../models/models_0";
import { deserializeAws_queryDescribeUpdateActionsCommand, serializeAws_queryDescribeUpdateActionsCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns details of the update actions </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, DescribeUpdateActionsCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, DescribeUpdateActionsCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new DescribeUpdateActionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeUpdateActionsCommandInput} for command's `input` shape.
 * @see {@link DescribeUpdateActionsCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeUpdateActionsCommand = /** @class */ (function (_super) {
    __extends(DescribeUpdateActionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeUpdateActionsCommand(input) {
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
    DescribeUpdateActionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElastiCacheClient";
        var commandName = "DescribeUpdateActionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeUpdateActionsMessage.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateActionsMessage.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeUpdateActionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDescribeUpdateActionsCommand(input, context);
    };
    DescribeUpdateActionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDescribeUpdateActionsCommand(output, context);
    };
    return DescribeUpdateActionsCommand;
}($Command));
export { DescribeUpdateActionsCommand };
//# sourceMappingURL=DescribeUpdateActionsCommand.js.map