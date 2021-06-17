import { __extends } from "tslib";
import { DisassociateVpcCidrBlockRequest, DisassociateVpcCidrBlockResult } from "../models/models_4";
import { deserializeAws_ec2DisassociateVpcCidrBlockCommand, serializeAws_ec2DisassociateVpcCidrBlockCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Disassociates a CIDR block from a VPC. To disassociate the CIDR block, you must
 *             specify its association ID. You can get the association ID by using
 *                 <a>DescribeVpcs</a>. You must detach or delete all gateways and resources that
 *             are associated with the CIDR block before you can disassociate it. </p>
 * 		       <p>You cannot disassociate the CIDR block with which you originally created the VPC (the
 * 			primary CIDR block).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DisassociateVpcCidrBlockCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DisassociateVpcCidrBlockCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DisassociateVpcCidrBlockCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateVpcCidrBlockCommandInput} for command's `input` shape.
 * @see {@link DisassociateVpcCidrBlockCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisassociateVpcCidrBlockCommand = /** @class */ (function (_super) {
    __extends(DisassociateVpcCidrBlockCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisassociateVpcCidrBlockCommand(input) {
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
    DisassociateVpcCidrBlockCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DisassociateVpcCidrBlockCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisassociateVpcCidrBlockRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DisassociateVpcCidrBlockResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisassociateVpcCidrBlockCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DisassociateVpcCidrBlockCommand(input, context);
    };
    DisassociateVpcCidrBlockCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DisassociateVpcCidrBlockCommand(output, context);
    };
    return DisassociateVpcCidrBlockCommand;
}($Command));
export { DisassociateVpcCidrBlockCommand };
//# sourceMappingURL=DisassociateVpcCidrBlockCommand.js.map