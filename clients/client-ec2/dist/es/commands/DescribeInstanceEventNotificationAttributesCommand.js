import { __extends } from "tslib";
import { DescribeInstanceEventNotificationAttributesRequest, DescribeInstanceEventNotificationAttributesResult, } from "../models/models_2";
import { deserializeAws_ec2DescribeInstanceEventNotificationAttributesCommand, serializeAws_ec2DescribeInstanceEventNotificationAttributesCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the tag keys that are registered to appear in scheduled event notifications for
 *       	resources in the current Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeInstanceEventNotificationAttributesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeInstanceEventNotificationAttributesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeInstanceEventNotificationAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeInstanceEventNotificationAttributesCommandInput} for command's `input` shape.
 * @see {@link DescribeInstanceEventNotificationAttributesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeInstanceEventNotificationAttributesCommand = /** @class */ (function (_super) {
    __extends(DescribeInstanceEventNotificationAttributesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeInstanceEventNotificationAttributesCommand(input) {
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
    DescribeInstanceEventNotificationAttributesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DescribeInstanceEventNotificationAttributesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeInstanceEventNotificationAttributesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeInstanceEventNotificationAttributesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeInstanceEventNotificationAttributesCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DescribeInstanceEventNotificationAttributesCommand(input, context);
    };
    DescribeInstanceEventNotificationAttributesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DescribeInstanceEventNotificationAttributesCommand(output, context);
    };
    return DescribeInstanceEventNotificationAttributesCommand;
}($Command));
export { DescribeInstanceEventNotificationAttributesCommand };
//# sourceMappingURL=DescribeInstanceEventNotificationAttributesCommand.js.map