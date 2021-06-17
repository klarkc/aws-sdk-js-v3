import { __extends } from "tslib";
import { CreateNetworkAclRequest, CreateNetworkAclResult } from "../models/models_1";
import { deserializeAws_ec2CreateNetworkAclCommand, serializeAws_ec2CreateNetworkAclCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a network ACL in a VPC. Network ACLs provide an optional layer of security (in addition to security groups) for the instances in your VPC.</p>
 * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_ACLs.html">Network ACLs</a> in the
 * 				<i>Amazon Virtual Private Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateNetworkAclCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateNetworkAclCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateNetworkAclCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateNetworkAclCommandInput} for command's `input` shape.
 * @see {@link CreateNetworkAclCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateNetworkAclCommand = /** @class */ (function (_super) {
    __extends(CreateNetworkAclCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateNetworkAclCommand(input) {
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
    CreateNetworkAclCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "CreateNetworkAclCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateNetworkAclRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateNetworkAclResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateNetworkAclCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2CreateNetworkAclCommand(input, context);
    };
    CreateNetworkAclCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2CreateNetworkAclCommand(output, context);
    };
    return CreateNetworkAclCommand;
}($Command));
export { CreateNetworkAclCommand };
//# sourceMappingURL=CreateNetworkAclCommand.js.map