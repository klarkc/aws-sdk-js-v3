import { __extends } from "tslib";
import { ReplaceNetworkAclAssociationRequest, ReplaceNetworkAclAssociationResult } from "../models/models_4";
import { deserializeAws_ec2ReplaceNetworkAclAssociationCommand, serializeAws_ec2ReplaceNetworkAclAssociationCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Changes which network ACL a subnet is associated with. By default when you create a
 * 			subnet, it's automatically associated with the default network ACL. For more
 * 			information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_ACLs.html">Network
 * 			ACLs</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
 *         <p>This is an idempotent operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ReplaceNetworkAclAssociationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ReplaceNetworkAclAssociationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ReplaceNetworkAclAssociationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ReplaceNetworkAclAssociationCommandInput} for command's `input` shape.
 * @see {@link ReplaceNetworkAclAssociationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ReplaceNetworkAclAssociationCommand = /** @class */ (function (_super) {
    __extends(ReplaceNetworkAclAssociationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ReplaceNetworkAclAssociationCommand(input) {
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
    ReplaceNetworkAclAssociationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "ReplaceNetworkAclAssociationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ReplaceNetworkAclAssociationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ReplaceNetworkAclAssociationResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ReplaceNetworkAclAssociationCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2ReplaceNetworkAclAssociationCommand(input, context);
    };
    ReplaceNetworkAclAssociationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2ReplaceNetworkAclAssociationCommand(output, context);
    };
    return ReplaceNetworkAclAssociationCommand;
}($Command));
export { ReplaceNetworkAclAssociationCommand };
//# sourceMappingURL=ReplaceNetworkAclAssociationCommand.js.map