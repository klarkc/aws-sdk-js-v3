import { __extends } from "tslib";
import { DescribeScheduledInstancesRequest, DescribeScheduledInstancesResult } from "../models/models_3";
import { deserializeAws_ec2DescribeScheduledInstancesCommand, serializeAws_ec2DescribeScheduledInstancesCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the specified Scheduled Instances or all your Scheduled Instances.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeScheduledInstancesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeScheduledInstancesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeScheduledInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeScheduledInstancesCommandInput} for command's `input` shape.
 * @see {@link DescribeScheduledInstancesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeScheduledInstancesCommand = /** @class */ (function (_super) {
    __extends(DescribeScheduledInstancesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeScheduledInstancesCommand(input) {
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
    DescribeScheduledInstancesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DescribeScheduledInstancesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeScheduledInstancesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeScheduledInstancesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeScheduledInstancesCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DescribeScheduledInstancesCommand(input, context);
    };
    DescribeScheduledInstancesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DescribeScheduledInstancesCommand(output, context);
    };
    return DescribeScheduledInstancesCommand;
}($Command));
export { DescribeScheduledInstancesCommand };
//# sourceMappingURL=DescribeScheduledInstancesCommand.js.map