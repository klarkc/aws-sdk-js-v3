"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoveAddressToVpcCommand = void 0;
const models_4_1 = require("../models/models_4");
const Aws_ec2_1 = require("../protocols/Aws_ec2");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Moves an Elastic IP address from the EC2-Classic platform to the EC2-VPC platform. The
 *       Elastic IP address must be allocated to your account for more than 24 hours, and it must not
 *       be associated with an instance. After the Elastic IP address is moved, it is no longer
 *       available for use in the EC2-Classic platform, unless you move it back using the
 *         <a>RestoreAddressToClassic</a> request. You cannot move an Elastic IP address that was
 *       originally allocated for use in the EC2-VPC platform to the EC2-Classic platform. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, MoveAddressToVpcCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, MoveAddressToVpcCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new MoveAddressToVpcCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link MoveAddressToVpcCommandInput} for command's `input` shape.
 * @see {@link MoveAddressToVpcCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class MoveAddressToVpcCommand extends smithy_client_1.Command {
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
        const commandName = "MoveAddressToVpcCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_4_1.MoveAddressToVpcRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_4_1.MoveAddressToVpcResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_ec2_1.serializeAws_ec2MoveAddressToVpcCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_ec2_1.deserializeAws_ec2MoveAddressToVpcCommand(output, context);
    }
}
exports.MoveAddressToVpcCommand = MoveAddressToVpcCommand;
//# sourceMappingURL=MoveAddressToVpcCommand.js.map