import { __extends } from "tslib";
import { DescribeSpotDatafeedSubscriptionRequest, DescribeSpotDatafeedSubscriptionResult } from "../models/models_3";
import { deserializeAws_ec2DescribeSpotDatafeedSubscriptionCommand, serializeAws_ec2DescribeSpotDatafeedSubscriptionCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the data feed for Spot Instances. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-data-feeds.html">Spot
 *                 Instance data feed</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeSpotDatafeedSubscriptionCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeSpotDatafeedSubscriptionCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeSpotDatafeedSubscriptionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeSpotDatafeedSubscriptionCommandInput} for command's `input` shape.
 * @see {@link DescribeSpotDatafeedSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeSpotDatafeedSubscriptionCommand = /** @class */ (function (_super) {
    __extends(DescribeSpotDatafeedSubscriptionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeSpotDatafeedSubscriptionCommand(input) {
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
    DescribeSpotDatafeedSubscriptionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DescribeSpotDatafeedSubscriptionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeSpotDatafeedSubscriptionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeSpotDatafeedSubscriptionResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeSpotDatafeedSubscriptionCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DescribeSpotDatafeedSubscriptionCommand(input, context);
    };
    DescribeSpotDatafeedSubscriptionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DescribeSpotDatafeedSubscriptionCommand(output, context);
    };
    return DescribeSpotDatafeedSubscriptionCommand;
}($Command));
export { DescribeSpotDatafeedSubscriptionCommand };
//# sourceMappingURL=DescribeSpotDatafeedSubscriptionCommand.js.map