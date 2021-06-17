import { __extends } from "tslib";
import { DescribeRouteTablesRequest, DescribeRouteTablesResult } from "../models/models_3";
import { deserializeAws_ec2DescribeRouteTablesCommand, serializeAws_ec2DescribeRouteTablesCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes one or more of your route tables.</p>
 *          <p>Each subnet in your VPC must be associated with a route table. If a subnet is not explicitly associated with any route table, it is implicitly associated with the main route table. This command does not return the subnet ID for implicit associations.</p>
 * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Route_Tables.html">Route Tables</a> in the
 * 				<i>Amazon Virtual Private Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeRouteTablesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeRouteTablesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeRouteTablesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeRouteTablesCommandInput} for command's `input` shape.
 * @see {@link DescribeRouteTablesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeRouteTablesCommand = /** @class */ (function (_super) {
    __extends(DescribeRouteTablesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeRouteTablesCommand(input) {
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
    DescribeRouteTablesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DescribeRouteTablesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeRouteTablesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeRouteTablesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeRouteTablesCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DescribeRouteTablesCommand(input, context);
    };
    DescribeRouteTablesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DescribeRouteTablesCommand(output, context);
    };
    return DescribeRouteTablesCommand;
}($Command));
export { DescribeRouteTablesCommand };
//# sourceMappingURL=DescribeRouteTablesCommand.js.map