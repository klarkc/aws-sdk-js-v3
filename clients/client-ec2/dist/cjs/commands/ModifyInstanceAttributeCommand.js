"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModifyInstanceAttributeCommand = void 0;
const models_4_1 = require("../models/models_4");
const Aws_ec2_1 = require("../protocols/Aws_ec2");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Modifies the specified attribute of the specified instance. You can specify only one
 *             attribute at a time.</p>
 *         <p>
 *             <b>Note: </b>Using this action to change the security groups
 *             associated with an elastic network interface (ENI) attached to an instance in a VPC can
 *             result in an error if the instance has more than one ENI. To change the security groups
 *             associated with an ENI attached to an instance that has multiple ENIs, we recommend that
 *             you use the <a>ModifyNetworkInterfaceAttribute</a> action.</p>
 *         <p>To modify some attributes, the instance must be stopped. For more information, see
 *                 <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_ChangingAttributesWhileInstanceStopped.html">Modifying attributes of a stopped instance</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyInstanceAttributeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyInstanceAttributeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ModifyInstanceAttributeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyInstanceAttributeCommandInput} for command's `input` shape.
 * @see {@link ModifyInstanceAttributeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ModifyInstanceAttributeCommand extends smithy_client_1.Command {
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
        const commandName = "ModifyInstanceAttributeCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_4_1.ModifyInstanceAttributeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: (output) => output,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_ec2_1.serializeAws_ec2ModifyInstanceAttributeCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_ec2_1.deserializeAws_ec2ModifyInstanceAttributeCommand(output, context);
    }
}
exports.ModifyInstanceAttributeCommand = ModifyInstanceAttributeCommand;
//# sourceMappingURL=ModifyInstanceAttributeCommand.js.map