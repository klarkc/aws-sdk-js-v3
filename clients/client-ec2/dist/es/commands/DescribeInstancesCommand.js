import { __extends } from "tslib";
import { DescribeInstancesRequest, DescribeInstancesResult } from "../models/models_2";
import { deserializeAws_ec2DescribeInstancesCommand, serializeAws_ec2DescribeInstancesCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the specified instances or all instances.</p>
 *         <p>If you specify instance IDs, the output includes information for only the specified instances.
 *             If you specify filters, the output includes information for only those instances that meet the filter criteria.
 *             If you do not specify instance IDs or filters, the output includes information for all instances,
 *             which can affect performance. We recommend that you use pagination to ensure that the operation
 *             returns quickly and successfully.</p>
 *         <p>If you specify an instance ID that is not valid, an error is returned. If you
 *             specify an instance that you do not own, it is not included in the output.</p>
 *         <p>Recently terminated instances might appear in the returned results. This interval is
 *             usually less than one hour.</p>
 *         <p>If you describe instances in the rare case where an Availability Zone is experiencing
 *             a service disruption and you specify instance IDs that are in the affected zone, or do
 *             not specify any instance IDs at all, the call fails. If you describe instances and
 *             specify only instance IDs that are in an unaffected zone, the call works
 *             normally.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeInstancesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeInstancesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeInstancesCommandInput} for command's `input` shape.
 * @see {@link DescribeInstancesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeInstancesCommand = /** @class */ (function (_super) {
    __extends(DescribeInstancesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeInstancesCommand(input) {
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
    DescribeInstancesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DescribeInstancesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeInstancesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeInstancesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeInstancesCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DescribeInstancesCommand(input, context);
    };
    DescribeInstancesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DescribeInstancesCommand(output, context);
    };
    return DescribeInstancesCommand;
}($Command));
export { DescribeInstancesCommand };
//# sourceMappingURL=DescribeInstancesCommand.js.map