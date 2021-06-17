"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTransitGatewayVpcAttachmentCommand = void 0;
const models_1_1 = require("../models/models_1");
const Aws_ec2_1 = require("../protocols/Aws_ec2");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Attaches the specified VPC to the specified transit gateway.</p>
 *          <p>If you attach a VPC with a CIDR range that overlaps the CIDR range of a VPC that is already attached,
 *          the new VPC CIDR range is not propagated to the default propagation route table.</p>
 *          <p>To send VPC traffic to an attached transit gateway, add a route to the VPC route table using <a>CreateRoute</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateTransitGatewayVpcAttachmentCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateTransitGatewayVpcAttachmentCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateTransitGatewayVpcAttachmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateTransitGatewayVpcAttachmentCommandInput} for command's `input` shape.
 * @see {@link CreateTransitGatewayVpcAttachmentCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CreateTransitGatewayVpcAttachmentCommand extends smithy_client_1.Command {
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
        const commandName = "CreateTransitGatewayVpcAttachmentCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_1_1.CreateTransitGatewayVpcAttachmentRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_1_1.CreateTransitGatewayVpcAttachmentResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_ec2_1.serializeAws_ec2CreateTransitGatewayVpcAttachmentCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_ec2_1.deserializeAws_ec2CreateTransitGatewayVpcAttachmentCommand(output, context);
    }
}
exports.CreateTransitGatewayVpcAttachmentCommand = CreateTransitGatewayVpcAttachmentCommand;
//# sourceMappingURL=CreateTransitGatewayVpcAttachmentCommand.js.map