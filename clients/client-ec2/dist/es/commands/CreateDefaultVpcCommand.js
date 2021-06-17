import { __extends } from "tslib";
import { CreateDefaultVpcRequest, CreateDefaultVpcResult } from "../models/models_0";
import { deserializeAws_ec2CreateDefaultVpcCommand, serializeAws_ec2CreateDefaultVpcCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a default VPC with a size <code>/16</code> IPv4 CIDR block and a default subnet
 * 			in each Availability Zone. For more information about the components of a default VPC,
 * 			see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/default-vpc.html">Default VPC and
 * 			Default Subnets</a> in the <i>Amazon Virtual Private Cloud User Guide</i>. You cannot
 * 			specify the components of the default VPC yourself.</p>
 * 		       <p>If you deleted your previous default VPC, you can create a default VPC. You cannot have
 * 			more than one default VPC per Region.</p>
 * 		       <p>If your account supports EC2-Classic, you cannot use this action to create a default VPC
 * 			in a Region that supports EC2-Classic. If you want a default VPC in a Region that
 * 			supports EC2-Classic, see "I really want a default VPC for my existing EC2 account. Is
 * 			that possible?" in the <a href="http://aws.amazon.com/vpc/faqs/#Default_VPCs">Default VPCs
 * 			FAQ</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateDefaultVpcCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateDefaultVpcCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateDefaultVpcCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDefaultVpcCommandInput} for command's `input` shape.
 * @see {@link CreateDefaultVpcCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateDefaultVpcCommand = /** @class */ (function (_super) {
    __extends(CreateDefaultVpcCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateDefaultVpcCommand(input) {
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
    CreateDefaultVpcCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "CreateDefaultVpcCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateDefaultVpcRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateDefaultVpcResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateDefaultVpcCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2CreateDefaultVpcCommand(input, context);
    };
    CreateDefaultVpcCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2CreateDefaultVpcCommand(output, context);
    };
    return CreateDefaultVpcCommand;
}($Command));
export { CreateDefaultVpcCommand };
//# sourceMappingURL=CreateDefaultVpcCommand.js.map