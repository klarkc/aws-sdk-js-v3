import { __extends } from "tslib";
import { ModifyHostsRequest, ModifyHostsResult } from "../models/models_4";
import { deserializeAws_ec2ModifyHostsCommand, serializeAws_ec2ModifyHostsCommand } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Modify the auto-placement setting of a Dedicated Host. When auto-placement is enabled,
 *             any instances that you launch with a tenancy of <code>host</code> but without a specific host
 *         	ID are placed onto any available Dedicated Host in your account that has auto-placement enabled.
 *         	When auto-placement is disabled, you need to provide a host ID to have the instance launch onto
 *         	a specific host. If no host ID is provided, the instance is launched onto a suitable host with
 *         	auto-placement enabled.</p>
 *     	    <p>You can also use this API action to modify a Dedicated Host to support either multiple
 *     		instance types in an instance family, or to support a specific instance type only.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyHostsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyHostsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ModifyHostsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyHostsCommandInput} for command's `input` shape.
 * @see {@link ModifyHostsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ModifyHostsCommand = /** @class */ (function (_super) {
    __extends(ModifyHostsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ModifyHostsCommand(input) {
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
    ModifyHostsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "ModifyHostsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ModifyHostsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ModifyHostsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ModifyHostsCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2ModifyHostsCommand(input, context);
    };
    ModifyHostsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2ModifyHostsCommand(output, context);
    };
    return ModifyHostsCommand;
}($Command));
export { ModifyHostsCommand };
//# sourceMappingURL=ModifyHostsCommand.js.map