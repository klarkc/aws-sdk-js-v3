import { __extends } from "tslib";
import { CreateNetworkInterfacePermissionRequest, CreateNetworkInterfacePermissionResult } from "../models/models_1";
import { deserializeAws_ec2CreateNetworkInterfacePermissionCommand, serializeAws_ec2CreateNetworkInterfacePermissionCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Grants an AWS-authorized account permission to attach the specified network interface to
 *             an instance in their account.</p>
 * 		       <p>You can grant permission to a single AWS account only, and only one account at a time.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateNetworkInterfacePermissionCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateNetworkInterfacePermissionCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateNetworkInterfacePermissionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateNetworkInterfacePermissionCommandInput} for command's `input` shape.
 * @see {@link CreateNetworkInterfacePermissionCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateNetworkInterfacePermissionCommand = /** @class */ (function (_super) {
    __extends(CreateNetworkInterfacePermissionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateNetworkInterfacePermissionCommand(input) {
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
    CreateNetworkInterfacePermissionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "CreateNetworkInterfacePermissionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateNetworkInterfacePermissionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateNetworkInterfacePermissionResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateNetworkInterfacePermissionCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2CreateNetworkInterfacePermissionCommand(input, context);
    };
    CreateNetworkInterfacePermissionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2CreateNetworkInterfacePermissionCommand(output, context);
    };
    return CreateNetworkInterfacePermissionCommand;
}($Command));
export { CreateNetworkInterfacePermissionCommand };
//# sourceMappingURL=CreateNetworkInterfacePermissionCommand.js.map