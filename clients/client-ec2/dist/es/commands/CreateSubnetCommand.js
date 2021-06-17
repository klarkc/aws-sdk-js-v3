import { __extends } from "tslib";
import { CreateSubnetRequest, CreateSubnetResult } from "../models/models_1";
import { deserializeAws_ec2CreateSubnetCommand, serializeAws_ec2CreateSubnetCommand } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a subnet in a specified VPC.</p>
 *         <p>You must specify an IPv4 CIDR block for the subnet. After you create a subnet, you
 *             can't change its CIDR block. The allowed block size is between a /16 netmask (65,536 IP
 *             addresses) and /28 netmask (16 IP addresses). The CIDR block must not overlap with the
 *             CIDR block of an existing subnet in the VPC.</p>
 *         <p>If you've associated an IPv6 CIDR block with your VPC, you can create a subnet with an
 *             IPv6 CIDR block that uses a /64 prefix length. </p>
 *         <important>
 *             <p>AWS reserves both the first four and the last IPv4 address in each subnet's CIDR
 *                 block. They're not available for use.</p>
 *         </important>
 *         <p>If you add more than one subnet to a VPC, they're set up in a star topology with a
 *             logical router in the middle.</p>
 *         <p>When you stop an instance in a subnet, it retains its private IPv4 address. It's
 *             therefore possible to have a subnet with no running instances (they're all stopped), but
 *             no remaining IP addresses available.</p>
 *         <p>For more information about subnets, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">Your VPC and Subnets</a> in the
 *                 <i>Amazon Virtual Private Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateSubnetCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateSubnetCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateSubnetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateSubnetCommandInput} for command's `input` shape.
 * @see {@link CreateSubnetCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateSubnetCommand = /** @class */ (function (_super) {
    __extends(CreateSubnetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateSubnetCommand(input) {
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
    CreateSubnetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "CreateSubnetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateSubnetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateSubnetResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateSubnetCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2CreateSubnetCommand(input, context);
    };
    CreateSubnetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2CreateSubnetCommand(output, context);
    };
    return CreateSubnetCommand;
}($Command));
export { CreateSubnetCommand };
//# sourceMappingURL=CreateSubnetCommand.js.map