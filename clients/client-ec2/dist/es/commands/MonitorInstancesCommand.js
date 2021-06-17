import { __extends } from "tslib";
import { MonitorInstancesRequest, MonitorInstancesResult } from "../models/models_4";
import { deserializeAws_ec2MonitorInstancesCommand, serializeAws_ec2MonitorInstancesCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Enables detailed monitoring for a running instance. Otherwise, basic monitoring is
 *             enabled. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-cloudwatch.html">Monitoring your instances and
 *                 volumes</a> in the <i>Amazon EC2 User Guide</i>.</p>
 *         <p>To disable detailed monitoring, see .</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, MonitorInstancesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, MonitorInstancesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new MonitorInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link MonitorInstancesCommandInput} for command's `input` shape.
 * @see {@link MonitorInstancesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var MonitorInstancesCommand = /** @class */ (function (_super) {
    __extends(MonitorInstancesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function MonitorInstancesCommand(input) {
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
    MonitorInstancesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "MonitorInstancesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: MonitorInstancesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: MonitorInstancesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    MonitorInstancesCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2MonitorInstancesCommand(input, context);
    };
    MonitorInstancesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2MonitorInstancesCommand(output, context);
    };
    return MonitorInstancesCommand;
}($Command));
export { MonitorInstancesCommand };
//# sourceMappingURL=MonitorInstancesCommand.js.map