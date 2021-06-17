import { __extends } from "tslib";
import { DescribeSpotFleetRequestsRequest, DescribeSpotFleetRequestsResponse } from "../models/models_3";
import { deserializeAws_ec2DescribeSpotFleetRequestsCommand, serializeAws_ec2DescribeSpotFleetRequestsCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes your Spot Fleet requests.</p>
 *          <p>Spot Fleet requests are deleted 48 hours after they are canceled and their instances are terminated.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeSpotFleetRequestsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeSpotFleetRequestsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeSpotFleetRequestsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeSpotFleetRequestsCommandInput} for command's `input` shape.
 * @see {@link DescribeSpotFleetRequestsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeSpotFleetRequestsCommand = /** @class */ (function (_super) {
    __extends(DescribeSpotFleetRequestsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeSpotFleetRequestsCommand(input) {
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
    DescribeSpotFleetRequestsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DescribeSpotFleetRequestsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeSpotFleetRequestsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeSpotFleetRequestsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeSpotFleetRequestsCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DescribeSpotFleetRequestsCommand(input, context);
    };
    DescribeSpotFleetRequestsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DescribeSpotFleetRequestsCommand(output, context);
    };
    return DescribeSpotFleetRequestsCommand;
}($Command));
export { DescribeSpotFleetRequestsCommand };
//# sourceMappingURL=DescribeSpotFleetRequestsCommand.js.map