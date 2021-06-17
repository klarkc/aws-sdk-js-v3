import { __extends } from "tslib";
import { ReportInstanceStatusRequest } from "../models/models_5";
import { deserializeAws_ec2ReportInstanceStatusCommand, serializeAws_ec2ReportInstanceStatusCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Submits feedback about the status of an instance. The instance must be in the
 *                 <code>running</code> state. If your experience with the instance differs from the
 *             instance status returned by <a>DescribeInstanceStatus</a>, use <a>ReportInstanceStatus</a> to report your experience with the instance. Amazon
 *             EC2 collects this information to improve the accuracy of status checks.</p>
 *         <p>Use of this action does not change the value returned by <a>DescribeInstanceStatus</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ReportInstanceStatusCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ReportInstanceStatusCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ReportInstanceStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ReportInstanceStatusCommandInput} for command's `input` shape.
 * @see {@link ReportInstanceStatusCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ReportInstanceStatusCommand = /** @class */ (function (_super) {
    __extends(ReportInstanceStatusCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ReportInstanceStatusCommand(input) {
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
    ReportInstanceStatusCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "ReportInstanceStatusCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ReportInstanceStatusRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ReportInstanceStatusCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2ReportInstanceStatusCommand(input, context);
    };
    ReportInstanceStatusCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2ReportInstanceStatusCommand(output, context);
    };
    return ReportInstanceStatusCommand;
}($Command));
export { ReportInstanceStatusCommand };
//# sourceMappingURL=ReportInstanceStatusCommand.js.map