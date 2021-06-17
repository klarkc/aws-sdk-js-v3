import { __extends } from "tslib";
import { CreateVpcPeeringConnectionRequest, CreateVpcPeeringConnectionResult } from "../models/models_1";
import { deserializeAws_ec2CreateVpcPeeringConnectionCommand, serializeAws_ec2CreateVpcPeeringConnectionCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Requests a VPC peering connection between two VPCs: a requester VPC that you own and
 * 			an accepter VPC with which to create the connection. The accepter VPC can belong to
 * 			another AWS account and can be in a different Region to the requester VPC. The requester
 * 			VPC and accepter VPC cannot have overlapping CIDR blocks.</p>
 *          <note>
 *             <p>Limitations and rules apply to a VPC peering connection. For more information, see the <a href="https://docs.aws.amazon.com/vpc/latest/peering/vpc-peering-basics.html#vpc-peering-limitations">limitations</a> section in the <i>VPC Peering Guide</i>.</p>
 *          </note>
 *          <p>The owner of the accepter VPC must accept the peering request to activate the peering
 *             connection. The VPC peering connection request expires after 7 days, after which it
 *             cannot be accepted or rejected.</p>
 *          <p>If you create a VPC peering connection request between VPCs with overlapping CIDR
 *             blocks, the VPC peering connection has a status of <code>failed</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateVpcPeeringConnectionCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateVpcPeeringConnectionCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateVpcPeeringConnectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateVpcPeeringConnectionCommandInput} for command's `input` shape.
 * @see {@link CreateVpcPeeringConnectionCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateVpcPeeringConnectionCommand = /** @class */ (function (_super) {
    __extends(CreateVpcPeeringConnectionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateVpcPeeringConnectionCommand(input) {
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
    CreateVpcPeeringConnectionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "CreateVpcPeeringConnectionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateVpcPeeringConnectionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateVpcPeeringConnectionResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateVpcPeeringConnectionCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2CreateVpcPeeringConnectionCommand(input, context);
    };
    CreateVpcPeeringConnectionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2CreateVpcPeeringConnectionCommand(output, context);
    };
    return CreateVpcPeeringConnectionCommand;
}($Command));
export { CreateVpcPeeringConnectionCommand };
//# sourceMappingURL=CreateVpcPeeringConnectionCommand.js.map