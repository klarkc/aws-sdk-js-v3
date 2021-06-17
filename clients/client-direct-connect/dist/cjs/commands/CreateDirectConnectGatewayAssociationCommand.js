"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDirectConnectGatewayAssociationCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Creates an association between a Direct Connect gateway and a virtual private gateway. The virtual
 *       private gateway must be attached to a VPC and must not be associated with another Direct Connect gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, CreateDirectConnectGatewayAssociationCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, CreateDirectConnectGatewayAssociationCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new CreateDirectConnectGatewayAssociationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDirectConnectGatewayAssociationCommandInput} for command's `input` shape.
 * @see {@link CreateDirectConnectGatewayAssociationCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CreateDirectConnectGatewayAssociationCommand extends smithy_client_1.Command {
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
        const commandName = "CreateDirectConnectGatewayAssociationCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CreateDirectConnectGatewayAssociationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CreateDirectConnectGatewayAssociationResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1CreateDirectConnectGatewayAssociationCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1CreateDirectConnectGatewayAssociationCommand(output, context);
    }
}
exports.CreateDirectConnectGatewayAssociationCommand = CreateDirectConnectGatewayAssociationCommand;
//# sourceMappingURL=CreateDirectConnectGatewayAssociationCommand.js.map