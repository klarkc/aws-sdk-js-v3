import { __extends } from "tslib";
import { CreateRouteRequest, CreateRouteResult } from "../models/models_1";
import { deserializeAws_ec2CreateRouteCommand, serializeAws_ec2CreateRouteCommand } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a route in a route table within a VPC.</p>
 *          <p>You must specify one of the following targets: internet gateway or virtual private
 * 			gateway, NAT instance, NAT gateway, VPC peering connection, network interface, egress-only internet gateway, or transit gateway.</p>
 *          <p>When determining how to route traffic, we use the route with the most specific match.
 *             For example, traffic is destined for the IPv4 address <code>192.0.2.3</code>, and the
 *             route table includes the following two IPv4 routes:</p>
 * 			      <ul>
 *             <li>
 * 					          <p>
 *                   <code>192.0.2.0/24</code> (goes to some target A)</p>
 * 				        </li>
 *             <li>
 * 					          <p>
 *                   <code>192.0.2.0/28</code> (goes to some target B)</p>
 * 				        </li>
 *          </ul>
 * 		       <p>Both routes apply to the traffic destined for <code>192.0.2.3</code>. However, the second route
 * 				in the list covers a smaller number of IP addresses and is therefore more specific,
 * 				so we use that route to determine where to target the traffic.</p>
 *          <p>For more information about route tables, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Route_Tables.html">Route Tables</a> in the
 *          <i>Amazon Virtual Private Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateRouteCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateRouteCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateRouteCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateRouteCommandInput} for command's `input` shape.
 * @see {@link CreateRouteCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateRouteCommand = /** @class */ (function (_super) {
    __extends(CreateRouteCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateRouteCommand(input) {
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
    CreateRouteCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "CreateRouteCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateRouteRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateRouteResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateRouteCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2CreateRouteCommand(input, context);
    };
    CreateRouteCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2CreateRouteCommand(output, context);
    };
    return CreateRouteCommand;
}($Command));
export { CreateRouteCommand };
//# sourceMappingURL=CreateRouteCommand.js.map