import { __extends } from "tslib";
import { DescribeSpotInstanceRequestsRequest, DescribeSpotInstanceRequestsResult } from "../models/models_3";
import { deserializeAws_ec2DescribeSpotInstanceRequestsCommand, serializeAws_ec2DescribeSpotInstanceRequestsCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the specified Spot Instance requests.</p>
 *          <p>You can use <code>DescribeSpotInstanceRequests</code> to find a
 * 		running Spot Instance by examining the response. If the status of
 * 		the Spot Instance is <code>fulfilled</code>, the instance ID
 * 		appears in the response and contains the identifier of the instance.
 * 		Alternatively, you can use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeInstances">DescribeInstances</a> with a filter to
 * 		look for instances where the instance lifecycle is <code>spot</code>.</p>
 *         <p>We recommend that you set <code>MaxResults</code> to a value between 5 and 1000 to
 *             limit the number of results returned. This paginates the output, which makes the list
 *             more manageable and returns the results faster. If the list of results exceeds your
 *                 <code>MaxResults</code> value, then that number of results is returned along with a
 *                 <code>NextToken</code> value that can be passed to a subsequent
 *                 <code>DescribeSpotInstanceRequests</code> request to retrieve the remaining
 *             results.</p>
 * 	        <p>Spot Instance requests are deleted four hours after they are canceled and their instances
 *             are terminated.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeSpotInstanceRequestsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeSpotInstanceRequestsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeSpotInstanceRequestsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeSpotInstanceRequestsCommandInput} for command's `input` shape.
 * @see {@link DescribeSpotInstanceRequestsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeSpotInstanceRequestsCommand = /** @class */ (function (_super) {
    __extends(DescribeSpotInstanceRequestsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeSpotInstanceRequestsCommand(input) {
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
    DescribeSpotInstanceRequestsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DescribeSpotInstanceRequestsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeSpotInstanceRequestsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeSpotInstanceRequestsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeSpotInstanceRequestsCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DescribeSpotInstanceRequestsCommand(input, context);
    };
    DescribeSpotInstanceRequestsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DescribeSpotInstanceRequestsCommand(output, context);
    };
    return DescribeSpotInstanceRequestsCommand;
}($Command));
export { DescribeSpotInstanceRequestsCommand };
//# sourceMappingURL=DescribeSpotInstanceRequestsCommand.js.map