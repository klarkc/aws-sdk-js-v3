import { __extends } from "tslib";
import { ReplaceNetworkAclEntryRequest } from "../models/models_4";
import { deserializeAws_ec2ReplaceNetworkAclEntryCommand, serializeAws_ec2ReplaceNetworkAclEntryCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Replaces an entry (rule) in a network ACL. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_ACLs.html">Network ACLs</a> in the
 * 				<i>Amazon Virtual Private Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ReplaceNetworkAclEntryCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ReplaceNetworkAclEntryCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ReplaceNetworkAclEntryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ReplaceNetworkAclEntryCommandInput} for command's `input` shape.
 * @see {@link ReplaceNetworkAclEntryCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ReplaceNetworkAclEntryCommand = /** @class */ (function (_super) {
    __extends(ReplaceNetworkAclEntryCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ReplaceNetworkAclEntryCommand(input) {
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
    ReplaceNetworkAclEntryCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "ReplaceNetworkAclEntryCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ReplaceNetworkAclEntryRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ReplaceNetworkAclEntryCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2ReplaceNetworkAclEntryCommand(input, context);
    };
    ReplaceNetworkAclEntryCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2ReplaceNetworkAclEntryCommand(output, context);
    };
    return ReplaceNetworkAclEntryCommand;
}($Command));
export { ReplaceNetworkAclEntryCommand };
//# sourceMappingURL=ReplaceNetworkAclEntryCommand.js.map