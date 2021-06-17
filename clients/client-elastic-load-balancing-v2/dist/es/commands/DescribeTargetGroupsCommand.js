import { __extends } from "tslib";
import { DescribeTargetGroupsInput, DescribeTargetGroupsOutput } from "../models/models_0";
import { deserializeAws_queryDescribeTargetGroupsCommand, serializeAws_queryDescribeTargetGroupsCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the specified target groups or all of your target groups. By default, all target
 *       groups are described. Alternatively, you can specify one of the following to filter the
 *       results: the ARN of the load balancer, the names of one or more target groups, or the ARNs of
 *       one or more target groups.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, DescribeTargetGroupsCommand } from "@aws-sdk/client-elastic-load-balancing-v2"; // ES Modules import
 * // const { ElasticLoadBalancingV2Client, DescribeTargetGroupsCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
 * const client = new ElasticLoadBalancingV2Client(config);
 * const command = new DescribeTargetGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeTargetGroupsCommandInput} for command's `input` shape.
 * @see {@link DescribeTargetGroupsCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeTargetGroupsCommand = /** @class */ (function (_super) {
    __extends(DescribeTargetGroupsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeTargetGroupsCommand(input) {
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
    DescribeTargetGroupsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticLoadBalancingV2Client";
        var commandName = "DescribeTargetGroupsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeTargetGroupsInput.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeTargetGroupsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeTargetGroupsCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDescribeTargetGroupsCommand(input, context);
    };
    DescribeTargetGroupsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDescribeTargetGroupsCommand(output, context);
    };
    return DescribeTargetGroupsCommand;
}($Command));
export { DescribeTargetGroupsCommand };
//# sourceMappingURL=DescribeTargetGroupsCommand.js.map