import { __extends } from "tslib";
import { DescribeScheduledInstanceAvailabilityRequest, DescribeScheduledInstanceAvailabilityResult, } from "../models/models_3";
import { deserializeAws_ec2DescribeScheduledInstanceAvailabilityCommand, serializeAws_ec2DescribeScheduledInstanceAvailabilityCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Finds available schedules that meet the specified criteria.</p>
 *          <p>You can search for an available schedule no more than 3 months in advance. You must meet the minimum required duration of 1,200 hours per year. For example, the minimum daily schedule is 4 hours, the minimum weekly schedule is 24 hours, and the minimum monthly schedule is 100 hours.</p>
 *          <p>After you find a schedule that meets your needs, call <a>PurchaseScheduledInstances</a>
 *          to purchase Scheduled Instances with that schedule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeScheduledInstanceAvailabilityCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeScheduledInstanceAvailabilityCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeScheduledInstanceAvailabilityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeScheduledInstanceAvailabilityCommandInput} for command's `input` shape.
 * @see {@link DescribeScheduledInstanceAvailabilityCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeScheduledInstanceAvailabilityCommand = /** @class */ (function (_super) {
    __extends(DescribeScheduledInstanceAvailabilityCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeScheduledInstanceAvailabilityCommand(input) {
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
    DescribeScheduledInstanceAvailabilityCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DescribeScheduledInstanceAvailabilityCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeScheduledInstanceAvailabilityRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeScheduledInstanceAvailabilityResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeScheduledInstanceAvailabilityCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DescribeScheduledInstanceAvailabilityCommand(input, context);
    };
    DescribeScheduledInstanceAvailabilityCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DescribeScheduledInstanceAvailabilityCommand(output, context);
    };
    return DescribeScheduledInstanceAvailabilityCommand;
}($Command));
export { DescribeScheduledInstanceAvailabilityCommand };
//# sourceMappingURL=DescribeScheduledInstanceAvailabilityCommand.js.map