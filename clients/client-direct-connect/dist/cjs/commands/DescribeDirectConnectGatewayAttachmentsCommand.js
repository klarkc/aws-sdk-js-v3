"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeDirectConnectGatewayAttachmentsCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Lists the attachments between your Direct Connect gateways and virtual interfaces. You must specify
 *       a Direct Connect gateway, a virtual interface, or both. If you specify a Direct Connect gateway, the response contains
 *       all virtual interfaces attached to the Direct Connect gateway. If you specify a virtual interface, the
 *       response contains all Direct Connect gateways attached to the virtual interface. If you specify both,
 *       the response contains the attachment between the Direct Connect gateway and the virtual interface.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, DescribeDirectConnectGatewayAttachmentsCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, DescribeDirectConnectGatewayAttachmentsCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new DescribeDirectConnectGatewayAttachmentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDirectConnectGatewayAttachmentsCommandInput} for command's `input` shape.
 * @see {@link DescribeDirectConnectGatewayAttachmentsCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DescribeDirectConnectGatewayAttachmentsCommand extends smithy_client_1.Command {
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
        const clientName = "DirectConnectClient";
        const commandName = "DescribeDirectConnectGatewayAttachmentsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DescribeDirectConnectGatewayAttachmentsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DescribeDirectConnectGatewayAttachmentsResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1DescribeDirectConnectGatewayAttachmentsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1DescribeDirectConnectGatewayAttachmentsCommand(output, context);
    }
}
exports.DescribeDirectConnectGatewayAttachmentsCommand = DescribeDirectConnectGatewayAttachmentsCommand;
//# sourceMappingURL=DescribeDirectConnectGatewayAttachmentsCommand.js.map