import { __extends } from "tslib";
import { DescribeSpotFleetInstancesRequest, DescribeSpotFleetInstancesResponse } from "../models/models_3";
import { deserializeAws_ec2DescribeSpotFleetInstancesCommand, serializeAws_ec2DescribeSpotFleetInstancesCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the running instances for the specified Spot Fleet.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeSpotFleetInstancesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeSpotFleetInstancesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeSpotFleetInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeSpotFleetInstancesCommandInput} for command's `input` shape.
 * @see {@link DescribeSpotFleetInstancesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeSpotFleetInstancesCommand = /** @class */ (function (_super) {
    __extends(DescribeSpotFleetInstancesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeSpotFleetInstancesCommand(input) {
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
    DescribeSpotFleetInstancesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DescribeSpotFleetInstancesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeSpotFleetInstancesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeSpotFleetInstancesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeSpotFleetInstancesCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DescribeSpotFleetInstancesCommand(input, context);
    };
    DescribeSpotFleetInstancesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DescribeSpotFleetInstancesCommand(output, context);
    };
    return DescribeSpotFleetInstancesCommand;
}($Command));
export { DescribeSpotFleetInstancesCommand };
//# sourceMappingURL=DescribeSpotFleetInstancesCommand.js.map