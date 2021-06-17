import { __extends } from "tslib";
import { DescribeInstanceCreditSpecificationsRequest, DescribeInstanceCreditSpecificationsResult, } from "../models/models_2";
import { deserializeAws_ec2DescribeInstanceCreditSpecificationsCommand, serializeAws_ec2DescribeInstanceCreditSpecificationsCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the credit option for CPU usage of the specified burstable performance
 *             instances. The credit options are <code>standard</code> and
 *             <code>unlimited</code>.</p>
 *         <p>If you do not specify an instance ID, Amazon EC2 returns burstable performance
 *             instances with the <code>unlimited</code> credit option, as well as instances that were
 *             previously configured as T2, T3, and T3a with the <code>unlimited</code> credit option.
 *             For example, if you resize a T2 instance, while it is configured as
 *                 <code>unlimited</code>, to an M4 instance, Amazon EC2 returns the M4
 *             instance.</p>
 *         <p>If you specify one or more instance IDs, Amazon EC2 returns the credit option
 *                 (<code>standard</code> or <code>unlimited</code>) of those instances. If you specify
 *             an instance ID that is not valid, such as an instance that is not a burstable
 *             performance instance, an error is returned.</p>
 *         <p>Recently terminated instances might appear in the returned results. This interval is
 *             usually less than one hour.</p>
 *         <p>If an Availability Zone is experiencing a service disruption and you specify instance
 *             IDs in the affected zone, or do not specify any instance IDs at all, the call fails. If
 *             you specify only instance IDs in an unaffected zone, the call works normally.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-performance-instances.html">Burstable
 *                 performance instances</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeInstanceCreditSpecificationsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeInstanceCreditSpecificationsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeInstanceCreditSpecificationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeInstanceCreditSpecificationsCommandInput} for command's `input` shape.
 * @see {@link DescribeInstanceCreditSpecificationsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeInstanceCreditSpecificationsCommand = /** @class */ (function (_super) {
    __extends(DescribeInstanceCreditSpecificationsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeInstanceCreditSpecificationsCommand(input) {
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
    DescribeInstanceCreditSpecificationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DescribeInstanceCreditSpecificationsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeInstanceCreditSpecificationsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeInstanceCreditSpecificationsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeInstanceCreditSpecificationsCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DescribeInstanceCreditSpecificationsCommand(input, context);
    };
    DescribeInstanceCreditSpecificationsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DescribeInstanceCreditSpecificationsCommand(output, context);
    };
    return DescribeInstanceCreditSpecificationsCommand;
}($Command));
export { DescribeInstanceCreditSpecificationsCommand };
//# sourceMappingURL=DescribeInstanceCreditSpecificationsCommand.js.map