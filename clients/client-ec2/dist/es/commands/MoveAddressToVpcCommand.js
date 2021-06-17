import { __extends } from "tslib";
import { MoveAddressToVpcRequest, MoveAddressToVpcResult } from "../models/models_4";
import { deserializeAws_ec2MoveAddressToVpcCommand, serializeAws_ec2MoveAddressToVpcCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Moves an Elastic IP address from the EC2-Classic platform to the EC2-VPC platform. The
 *       Elastic IP address must be allocated to your account for more than 24 hours, and it must not
 *       be associated with an instance. After the Elastic IP address is moved, it is no longer
 *       available for use in the EC2-Classic platform, unless you move it back using the
 *         <a>RestoreAddressToClassic</a> request. You cannot move an Elastic IP address that was
 *       originally allocated for use in the EC2-VPC platform to the EC2-Classic platform. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, MoveAddressToVpcCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, MoveAddressToVpcCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new MoveAddressToVpcCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link MoveAddressToVpcCommandInput} for command's `input` shape.
 * @see {@link MoveAddressToVpcCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var MoveAddressToVpcCommand = /** @class */ (function (_super) {
    __extends(MoveAddressToVpcCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function MoveAddressToVpcCommand(input) {
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
    MoveAddressToVpcCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "MoveAddressToVpcCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: MoveAddressToVpcRequest.filterSensitiveLog,
            outputFilterSensitiveLog: MoveAddressToVpcResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    MoveAddressToVpcCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2MoveAddressToVpcCommand(input, context);
    };
    MoveAddressToVpcCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2MoveAddressToVpcCommand(output, context);
    };
    return MoveAddressToVpcCommand;
}($Command));
export { MoveAddressToVpcCommand };
//# sourceMappingURL=MoveAddressToVpcCommand.js.map