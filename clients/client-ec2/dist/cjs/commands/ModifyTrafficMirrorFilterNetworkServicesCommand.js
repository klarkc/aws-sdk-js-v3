"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModifyTrafficMirrorFilterNetworkServicesCommand = void 0;
const models_4_1 = require("../models/models_4");
const Aws_ec2_1 = require("../protocols/Aws_ec2");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
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
class ModifyTrafficMirrorFilterNetworkServicesCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "EC2Client";
        const commandName = "ModifyTrafficMirrorFilterNetworkServicesCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_4_1.ModifyTrafficMirrorFilterNetworkServicesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_4_1.ModifyTrafficMirrorFilterNetworkServicesResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_ec2_1.serializeAws_ec2ModifyTrafficMirrorFilterNetworkServicesCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_ec2_1.deserializeAws_ec2ModifyTrafficMirrorFilterNetworkServicesCommand(output, context);
    }
}
exports.ModifyTrafficMirrorFilterNetworkServicesCommand = ModifyTrafficMirrorFilterNetworkServicesCommand;
//# sourceMappingURL=ModifyTrafficMirrorFilterNetworkServicesCommand.js.map