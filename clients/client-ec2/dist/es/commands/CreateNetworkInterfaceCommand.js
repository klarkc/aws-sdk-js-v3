import { __extends } from "tslib";
import { CreateNetworkInterfaceRequest, CreateNetworkInterfaceResult } from "../models/models_1";
import { deserializeAws_ec2CreateNetworkInterfaceCommand, serializeAws_ec2CreateNetworkInterfaceCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a network interface in the specified subnet.</p>
 *         <p>For more information about network interfaces, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-eni.html">Elastic Network Interfaces</a>
 *             in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateNetworkInterfaceCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateNetworkInterfaceCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateNetworkInterfaceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateNetworkInterfaceCommandInput} for command's `input` shape.
 * @see {@link CreateNetworkInterfaceCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateNetworkInterfaceCommand = /** @class */ (function (_super) {
    __extends(CreateNetworkInterfaceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateNetworkInterfaceCommand(input) {
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
    CreateNetworkInterfaceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "CreateNetworkInterfaceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateNetworkInterfaceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateNetworkInterfaceResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateNetworkInterfaceCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2CreateNetworkInterfaceCommand(input, context);
    };
    CreateNetworkInterfaceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2CreateNetworkInterfaceCommand(output, context);
    };
    return CreateNetworkInterfaceCommand;
}($Command));
export { CreateNetworkInterfaceCommand };
//# sourceMappingURL=CreateNetworkInterfaceCommand.js.map