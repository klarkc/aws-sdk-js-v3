import { __extends } from "tslib";
import { RunScheduledInstancesRequest, RunScheduledInstancesResult } from "../models/models_5";
import { deserializeAws_ec2RunScheduledInstancesCommand, serializeAws_ec2RunScheduledInstancesCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Launches the specified Scheduled Instances.</p>
 *          <p>Before you can launch a Scheduled Instance, you must purchase it and obtain an identifier using <a>PurchaseScheduledInstances</a>.</p>
 *          <p>You must launch a Scheduled Instance during its scheduled time period. You can't stop or reboot a Scheduled Instance,
 *          but you can terminate it as needed. If you terminate a Scheduled Instance before the current scheduled time period ends,
 *          you can launch it again after a few minutes. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-scheduled-instances.html">Scheduled Instances</a>
 *          in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, RunScheduledInstancesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, RunScheduledInstancesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new RunScheduledInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RunScheduledInstancesCommandInput} for command's `input` shape.
 * @see {@link RunScheduledInstancesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RunScheduledInstancesCommand = /** @class */ (function (_super) {
    __extends(RunScheduledInstancesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RunScheduledInstancesCommand(input) {
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
    RunScheduledInstancesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "RunScheduledInstancesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RunScheduledInstancesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: RunScheduledInstancesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RunScheduledInstancesCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2RunScheduledInstancesCommand(input, context);
    };
    RunScheduledInstancesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2RunScheduledInstancesCommand(output, context);
    };
    return RunScheduledInstancesCommand;
}($Command));
export { RunScheduledInstancesCommand };
//# sourceMappingURL=RunScheduledInstancesCommand.js.map