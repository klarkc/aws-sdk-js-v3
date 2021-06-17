import { __extends } from "tslib";
import { ModifyTrafficMirrorFilterNetworkServicesRequest, ModifyTrafficMirrorFilterNetworkServicesResult, } from "../models/models_4";
import { deserializeAws_ec2ModifyTrafficMirrorFilterNetworkServicesCommand, serializeAws_ec2ModifyTrafficMirrorFilterNetworkServicesCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Allows or restricts mirroring network services.</p>
 *          <p> By default, Amazon DNS network services are not eligible for Traffic Mirror. Use <code>AddNetworkServices</code> to add network services to a Traffic Mirror filter. When a network service is added to the Traffic Mirror filter, all traffic related to that network service will be mirrored.
 *          When you no longer want to mirror network services, use <code>RemoveNetworkServices</code> to remove the network services from the Traffic Mirror filter.
 *       </p>
 *          <p>For information about filter rule properties, see
 *          <a href="https://docs.aws.amazon.com/vpc/latest/mirroring/traffic-mirroring-considerations.html">Network Services</a> in the <i>Traffic Mirroring User Guide </i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyTrafficMirrorFilterNetworkServicesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyTrafficMirrorFilterNetworkServicesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ModifyTrafficMirrorFilterNetworkServicesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyTrafficMirrorFilterNetworkServicesCommandInput} for command's `input` shape.
 * @see {@link ModifyTrafficMirrorFilterNetworkServicesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ModifyTrafficMirrorFilterNetworkServicesCommand = /** @class */ (function (_super) {
    __extends(ModifyTrafficMirrorFilterNetworkServicesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ModifyTrafficMirrorFilterNetworkServicesCommand(input) {
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
    ModifyTrafficMirrorFilterNetworkServicesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "ModifyTrafficMirrorFilterNetworkServicesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ModifyTrafficMirrorFilterNetworkServicesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ModifyTrafficMirrorFilterNetworkServicesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ModifyTrafficMirrorFilterNetworkServicesCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2ModifyTrafficMirrorFilterNetworkServicesCommand(input, context);
    };
    ModifyTrafficMirrorFilterNetworkServicesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2ModifyTrafficMirrorFilterNetworkServicesCommand(output, context);
    };
    return ModifyTrafficMirrorFilterNetworkServicesCommand;
}($Command));
export { ModifyTrafficMirrorFilterNetworkServicesCommand };
//# sourceMappingURL=ModifyTrafficMirrorFilterNetworkServicesCommand.js.map