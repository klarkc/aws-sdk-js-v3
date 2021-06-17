import { __extends } from "tslib";
import { DescribeDBProxyTargetGroupsRequest, DescribeDBProxyTargetGroupsResponse } from "../models/models_0";
import { deserializeAws_queryDescribeDBProxyTargetGroupsCommand, serializeAws_queryDescribeDBProxyTargetGroupsCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about DB proxy target groups, represented by <code>DBProxyTargetGroup</code> data structures.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeDBProxyTargetGroupsCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeDBProxyTargetGroupsCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new DescribeDBProxyTargetGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDBProxyTargetGroupsCommandInput} for command's `input` shape.
 * @see {@link DescribeDBProxyTargetGroupsCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeDBProxyTargetGroupsCommand = /** @class */ (function (_super) {
    __extends(DescribeDBProxyTargetGroupsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeDBProxyTargetGroupsCommand(input) {
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
    DescribeDBProxyTargetGroupsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RDSClient";
        var commandName = "DescribeDBProxyTargetGroupsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeDBProxyTargetGroupsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeDBProxyTargetGroupsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeDBProxyTargetGroupsCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDescribeDBProxyTargetGroupsCommand(input, context);
    };
    DescribeDBProxyTargetGroupsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDescribeDBProxyTargetGroupsCommand(output, context);
    };
    return DescribeDBProxyTargetGroupsCommand;
}($Command));
export { DescribeDBProxyTargetGroupsCommand };
//# sourceMappingURL=DescribeDBProxyTargetGroupsCommand.js.map