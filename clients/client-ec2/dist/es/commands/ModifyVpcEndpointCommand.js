import { __extends } from "tslib";
import { ModifyVpcEndpointRequest, ModifyVpcEndpointResult } from "../models/models_4";
import { deserializeAws_ec2ModifyVpcEndpointCommand, serializeAws_ec2ModifyVpcEndpointCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Modifies attributes of a specified VPC endpoint. The attributes that you can modify
 *             depend on the type of VPC endpoint (interface, gateway, or Gateway Load Balancer). For more information, see
 *             <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-endpoints.html">VPC
 *                 Endpoints</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyVpcEndpointCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyVpcEndpointCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ModifyVpcEndpointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyVpcEndpointCommandInput} for command's `input` shape.
 * @see {@link ModifyVpcEndpointCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ModifyVpcEndpointCommand = /** @class */ (function (_super) {
    __extends(ModifyVpcEndpointCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ModifyVpcEndpointCommand(input) {
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
    ModifyVpcEndpointCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "ModifyVpcEndpointCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ModifyVpcEndpointRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ModifyVpcEndpointResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ModifyVpcEndpointCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2ModifyVpcEndpointCommand(input, context);
    };
    ModifyVpcEndpointCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2ModifyVpcEndpointCommand(output, context);
    };
    return ModifyVpcEndpointCommand;
}($Command));
export { ModifyVpcEndpointCommand };
//# sourceMappingURL=ModifyVpcEndpointCommand.js.map