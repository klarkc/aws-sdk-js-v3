"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModifyVpcEndpointServiceConfigurationCommand = void 0;
const models_4_1 = require("../models/models_4");
const Aws_ec2_1 = require("../protocols/Aws_ec2");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Modifies the attributes of your VPC endpoint service configuration. You can change the
 *             Network Load Balancers or Gateway Load Balancers for your service, and you can specify whether acceptance is
 *             required for requests to connect to your endpoint service through an interface VPC
 *             endpoint.</p>
 * 	        <p>If you set or modify the private DNS name, you must prove that you own the private DNS
 *             domain name. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/endpoint-services-dns-validation.html">VPC Endpoint Service
 *                 Private DNS Name Verification</a> in the
 *             <i>Amazon Virtual Private Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyVpcEndpointServiceConfigurationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyVpcEndpointServiceConfigurationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ModifyVpcEndpointServiceConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyVpcEndpointServiceConfigurationCommandInput} for command's `input` shape.
 * @see {@link ModifyVpcEndpointServiceConfigurationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ModifyVpcEndpointServiceConfigurationCommand extends smithy_client_1.Command {
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
        const commandName = "ModifyVpcEndpointServiceConfigurationCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_4_1.ModifyVpcEndpointServiceConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_4_1.ModifyVpcEndpointServiceConfigurationResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_ec2_1.serializeAws_ec2ModifyVpcEndpointServiceConfigurationCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_ec2_1.deserializeAws_ec2ModifyVpcEndpointServiceConfigurationCommand(output, context);
    }
}
exports.ModifyVpcEndpointServiceConfigurationCommand = ModifyVpcEndpointServiceConfigurationCommand;
//# sourceMappingURL=ModifyVpcEndpointServiceConfigurationCommand.js.map