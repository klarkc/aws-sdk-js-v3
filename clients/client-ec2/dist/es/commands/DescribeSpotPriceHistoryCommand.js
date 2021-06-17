import { __extends } from "tslib";
import { DescribeSpotPriceHistoryRequest, DescribeSpotPriceHistoryResult } from "../models/models_3";
import { deserializeAws_ec2DescribeSpotPriceHistoryCommand, serializeAws_ec2DescribeSpotPriceHistoryCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the Spot price history. For more information, see
 * 		<a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-spot-instances-history.html">Spot Instance pricing history</a>
 *         in the <i>Amazon EC2 User Guide for Linux Instances</i>.</p>
 *         <p>When you specify a start and end time, the operation returns the prices of the
 *             instance types within that time range. It also returns the last price change before the
 *             start time, which is the effective price as of the start time.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeSpotPriceHistoryCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeSpotPriceHistoryCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeSpotPriceHistoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeSpotPriceHistoryCommandInput} for command's `input` shape.
 * @see {@link DescribeSpotPriceHistoryCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeSpotPriceHistoryCommand = /** @class */ (function (_super) {
    __extends(DescribeSpotPriceHistoryCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeSpotPriceHistoryCommand(input) {
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
    DescribeSpotPriceHistoryCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DescribeSpotPriceHistoryCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeSpotPriceHistoryRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeSpotPriceHistoryResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeSpotPriceHistoryCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DescribeSpotPriceHistoryCommand(input, context);
    };
    DescribeSpotPriceHistoryCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DescribeSpotPriceHistoryCommand(output, context);
    };
    return DescribeSpotPriceHistoryCommand;
}($Command));
export { DescribeSpotPriceHistoryCommand };
//# sourceMappingURL=DescribeSpotPriceHistoryCommand.js.map