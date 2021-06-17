"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcceptTransitGatewayVpcAttachmentCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_ec2_1 = require("../protocols/Aws_ec2");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Accepts a request to attach a VPC to a transit gateway.</p>
 *          <p>The VPC attachment must be in the <code>pendingAcceptance</code> state.
 *          Use <a>DescribeTransitGatewayVpcAttachments</a> to view your pending VPC attachment requests.
 *          Use <a>RejectTransitGatewayVpcAttachment</a> to reject a VPC attachment request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AcceptTransitGatewayVpcAttachmentCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AcceptTransitGatewayVpcAttachmentCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new AcceptTransitGatewayVpcAttachmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AcceptTransitGatewayVpcAttachmentCommandInput} for command's `input` shape.
 * @see {@link AcceptTransitGatewayVpcAttachmentCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class AcceptTransitGatewayVpcAttachmentCommand extends smithy_client_1.Command {
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
        const commandName = "AcceptTransitGatewayVpcAttachmentCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.AcceptTransitGatewayVpcAttachmentRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.AcceptTransitGatewayVpcAttachmentResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_ec2_1.serializeAws_ec2AcceptTransitGatewayVpcAttachmentCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_ec2_1.deserializeAws_ec2AcceptTransitGatewayVpcAttachmentCommand(output, context);
    }
}
exports.AcceptTransitGatewayVpcAttachmentCommand = AcceptTransitGatewayVpcAttachmentCommand;
//# sourceMappingURL=AcceptTransitGatewayVpcAttachmentCommand.js.map