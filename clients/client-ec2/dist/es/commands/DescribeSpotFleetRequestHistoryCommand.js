import { __extends } from "tslib";
import { DescribeSpotFleetRequestHistoryRequest, DescribeSpotFleetRequestHistoryResponse } from "../models/models_3";
import { deserializeAws_ec2DescribeSpotFleetRequestHistoryCommand, serializeAws_ec2DescribeSpotFleetRequestHistoryCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the events for the specified Spot Fleet request during the specified time.</p>
 *          <p>Spot Fleet events are delayed by up to 30 seconds before they can be described. This ensures that you can query
 *           by the last evaluated time and not miss a recorded event. Spot Fleet events are available for 48 hours.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeSpotFleetRequestHistoryCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeSpotFleetRequestHistoryCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeSpotFleetRequestHistoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeSpotFleetRequestHistoryCommandInput} for command's `input` shape.
 * @see {@link DescribeSpotFleetRequestHistoryCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeSpotFleetRequestHistoryCommand = /** @class */ (function (_super) {
    __extends(DescribeSpotFleetRequestHistoryCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeSpotFleetRequestHistoryCommand(input) {
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
    DescribeSpotFleetRequestHistoryCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DescribeSpotFleetRequestHistoryCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeSpotFleetRequestHistoryRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeSpotFleetRequestHistoryResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeSpotFleetRequestHistoryCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DescribeSpotFleetRequestHistoryCommand(input, context);
    };
    DescribeSpotFleetRequestHistoryCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DescribeSpotFleetRequestHistoryCommand(output, context);
    };
    return DescribeSpotFleetRequestHistoryCommand;
}($Command));
export { DescribeSpotFleetRequestHistoryCommand };
//# sourceMappingURL=DescribeSpotFleetRequestHistoryCommand.js.map