import { __extends } from "tslib";
import { DeleteDhcpOptionsRequest } from "../models/models_1";
import { deserializeAws_ec2DeleteDhcpOptionsCommand, serializeAws_ec2DeleteDhcpOptionsCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified set of DHCP options. You must disassociate the set of DHCP options before you can delete it. You can disassociate the set of DHCP options by associating either a new set of options or the default set of options with the VPC.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteDhcpOptionsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteDhcpOptionsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeleteDhcpOptionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDhcpOptionsCommandInput} for command's `input` shape.
 * @see {@link DeleteDhcpOptionsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteDhcpOptionsCommand = /** @class */ (function (_super) {
    __extends(DeleteDhcpOptionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteDhcpOptionsCommand(input) {
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
    DeleteDhcpOptionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DeleteDhcpOptionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteDhcpOptionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteDhcpOptionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DeleteDhcpOptionsCommand(input, context);
    };
    DeleteDhcpOptionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DeleteDhcpOptionsCommand(output, context);
    };
    return DeleteDhcpOptionsCommand;
}($Command));
export { DeleteDhcpOptionsCommand };
//# sourceMappingURL=DeleteDhcpOptionsCommand.js.map