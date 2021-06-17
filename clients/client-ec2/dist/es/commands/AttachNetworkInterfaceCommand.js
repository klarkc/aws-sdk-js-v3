import { __extends } from "tslib";
import { AttachNetworkInterfaceRequest, AttachNetworkInterfaceResult } from "../models/models_0";
import { deserializeAws_ec2AttachNetworkInterfaceCommand, serializeAws_ec2AttachNetworkInterfaceCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Attaches a network interface to an instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AttachNetworkInterfaceCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AttachNetworkInterfaceCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new AttachNetworkInterfaceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AttachNetworkInterfaceCommandInput} for command's `input` shape.
 * @see {@link AttachNetworkInterfaceCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AttachNetworkInterfaceCommand = /** @class */ (function (_super) {
    __extends(AttachNetworkInterfaceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AttachNetworkInterfaceCommand(input) {
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
    AttachNetworkInterfaceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "AttachNetworkInterfaceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AttachNetworkInterfaceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AttachNetworkInterfaceResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AttachNetworkInterfaceCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2AttachNetworkInterfaceCommand(input, context);
    };
    AttachNetworkInterfaceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2AttachNetworkInterfaceCommand(output, context);
    };
    return AttachNetworkInterfaceCommand;
}($Command));
export { AttachNetworkInterfaceCommand };
//# sourceMappingURL=AttachNetworkInterfaceCommand.js.map