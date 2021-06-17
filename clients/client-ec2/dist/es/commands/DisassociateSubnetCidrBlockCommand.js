import { __extends } from "tslib";
import { DisassociateSubnetCidrBlockRequest, DisassociateSubnetCidrBlockResult } from "../models/models_4";
import { deserializeAws_ec2DisassociateSubnetCidrBlockCommand, serializeAws_ec2DisassociateSubnetCidrBlockCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Disassociates a CIDR block from a subnet. Currently, you can disassociate an IPv6 CIDR block only. You must detach or delete all gateways and resources that are associated with the CIDR block before you can disassociate it. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DisassociateSubnetCidrBlockCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DisassociateSubnetCidrBlockCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DisassociateSubnetCidrBlockCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateSubnetCidrBlockCommandInput} for command's `input` shape.
 * @see {@link DisassociateSubnetCidrBlockCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisassociateSubnetCidrBlockCommand = /** @class */ (function (_super) {
    __extends(DisassociateSubnetCidrBlockCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisassociateSubnetCidrBlockCommand(input) {
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
    DisassociateSubnetCidrBlockCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DisassociateSubnetCidrBlockCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisassociateSubnetCidrBlockRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DisassociateSubnetCidrBlockResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisassociateSubnetCidrBlockCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DisassociateSubnetCidrBlockCommand(input, context);
    };
    DisassociateSubnetCidrBlockCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DisassociateSubnetCidrBlockCommand(output, context);
    };
    return DisassociateSubnetCidrBlockCommand;
}($Command));
export { DisassociateSubnetCidrBlockCommand };
//# sourceMappingURL=DisassociateSubnetCidrBlockCommand.js.map