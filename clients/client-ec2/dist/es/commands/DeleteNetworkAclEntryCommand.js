import { __extends } from "tslib";
import { DeleteNetworkAclEntryRequest } from "../models/models_2";
import { deserializeAws_ec2DeleteNetworkAclEntryCommand, serializeAws_ec2DeleteNetworkAclEntryCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified ingress or egress entry (rule) from the specified network ACL.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteNetworkAclEntryCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteNetworkAclEntryCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeleteNetworkAclEntryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteNetworkAclEntryCommandInput} for command's `input` shape.
 * @see {@link DeleteNetworkAclEntryCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteNetworkAclEntryCommand = /** @class */ (function (_super) {
    __extends(DeleteNetworkAclEntryCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteNetworkAclEntryCommand(input) {
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
    DeleteNetworkAclEntryCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DeleteNetworkAclEntryCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteNetworkAclEntryRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteNetworkAclEntryCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DeleteNetworkAclEntryCommand(input, context);
    };
    DeleteNetworkAclEntryCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DeleteNetworkAclEntryCommand(output, context);
    };
    return DeleteNetworkAclEntryCommand;
}($Command));
export { DeleteNetworkAclEntryCommand };
//# sourceMappingURL=DeleteNetworkAclEntryCommand.js.map