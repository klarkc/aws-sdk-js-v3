import { __extends } from "tslib";
import { DescribeTargetHealthInput, DescribeTargetHealthOutput } from "../models/models_0";
import { deserializeAws_queryDescribeTargetHealthCommand, serializeAws_queryDescribeTargetHealthCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the health of the specified targets or all of your targets.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, DescribeTargetHealthCommand } from "@aws-sdk/client-elastic-load-balancing-v2"; // ES Modules import
 * // const { ElasticLoadBalancingV2Client, DescribeTargetHealthCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
 * const client = new ElasticLoadBalancingV2Client(config);
 * const command = new DescribeTargetHealthCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeTargetHealthCommandInput} for command's `input` shape.
 * @see {@link DescribeTargetHealthCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeTargetHealthCommand = /** @class */ (function (_super) {
    __extends(DescribeTargetHealthCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeTargetHealthCommand(input) {
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
    DescribeTargetHealthCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticLoadBalancingV2Client";
        var commandName = "DescribeTargetHealthCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeTargetHealthInput.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeTargetHealthOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeTargetHealthCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDescribeTargetHealthCommand(input, context);
    };
    DescribeTargetHealthCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDescribeTargetHealthCommand(output, context);
    };
    return DescribeTargetHealthCommand;
}($Command));
export { DescribeTargetHealthCommand };
//# sourceMappingURL=DescribeTargetHealthCommand.js.map