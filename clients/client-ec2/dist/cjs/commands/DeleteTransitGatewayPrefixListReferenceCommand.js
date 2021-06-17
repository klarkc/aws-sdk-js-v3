"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteTransitGatewayPrefixListReferenceCommand = void 0;
const models_2_1 = require("../models/models_2");
const Aws_ec2_1 = require("../protocols/Aws_ec2");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Deletes a reference (route) to a prefix list in a specified transit gateway route table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteTransitGatewayPrefixListReferenceCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteTransitGatewayPrefixListReferenceCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeleteTransitGatewayPrefixListReferenceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteTransitGatewayPrefixListReferenceCommandInput} for command's `input` shape.
 * @see {@link DeleteTransitGatewayPrefixListReferenceCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DeleteTransitGatewayPrefixListReferenceCommand extends smithy_client_1.Command {
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
        const commandName = "DeleteTransitGatewayPrefixListReferenceCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_2_1.DeleteTransitGatewayPrefixListReferenceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_2_1.DeleteTransitGatewayPrefixListReferenceResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_ec2_1.serializeAws_ec2DeleteTransitGatewayPrefixListReferenceCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_ec2_1.deserializeAws_ec2DeleteTransitGatewayPrefixListReferenceCommand(output, context);
    }
}
exports.DeleteTransitGatewayPrefixListReferenceCommand = DeleteTransitGatewayPrefixListReferenceCommand;
//# sourceMappingURL=DeleteTransitGatewayPrefixListReferenceCommand.js.map