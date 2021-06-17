import { __extends } from "tslib";
import { CreateNetworkAclEntryRequest } from "../models/models_1";
import { deserializeAws_ec2CreateNetworkAclEntryCommand, serializeAws_ec2CreateNetworkAclEntryCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an entry (a rule) in a network ACL with the specified rule number. Each network ACL has a set of numbered ingress rules
 * 		        and a separate set of numbered egress rules. When determining whether a packet should be allowed in or out of a subnet associated
 * 		        with the ACL, we process the entries in the ACL according to the rule numbers, in ascending order. Each network ACL has a set of
 * 		        ingress rules and a separate set of egress rules.</p>
 * 		       <p>We recommend that you leave room between the rule numbers (for example, 100, 110, 120, ...), and not number them one right after the
 * 		        other (for example, 101, 102, 103, ...). This makes it easier to add a rule between existing ones without having to renumber the rules.</p>
 * 		       <p>After you add an entry, you can't modify it; you must either replace it, or create an entry and delete the old one.</p>
 *          <p>For more information about network ACLs, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_ACLs.html">Network ACLs</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateNetworkAclEntryCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateNetworkAclEntryCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateNetworkAclEntryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateNetworkAclEntryCommandInput} for command's `input` shape.
 * @see {@link CreateNetworkAclEntryCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateNetworkAclEntryCommand = /** @class */ (function (_super) {
    __extends(CreateNetworkAclEntryCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateNetworkAclEntryCommand(input) {
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
    CreateNetworkAclEntryCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "CreateNetworkAclEntryCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateNetworkAclEntryRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateNetworkAclEntryCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2CreateNetworkAclEntryCommand(input, context);
    };
    CreateNetworkAclEntryCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2CreateNetworkAclEntryCommand(output, context);
    };
    return CreateNetworkAclEntryCommand;
}($Command));
export { CreateNetworkAclEntryCommand };
//# sourceMappingURL=CreateNetworkAclEntryCommand.js.map