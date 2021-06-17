"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveFlowVpcInterfaceCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * Removes a VPC Interface from an existing flow. This request can be made only on a VPC interface that does not have a Source or Output associated with it. If the VPC interface is referenced by a Source or Output, you must first delete or update the Source or Output to no longer reference the VPC interface.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, RemoveFlowVpcInterfaceCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, RemoveFlowVpcInterfaceCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * const client = new MediaConnectClient(config);
 * const command = new RemoveFlowVpcInterfaceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RemoveFlowVpcInterfaceCommandInput} for command's `input` shape.
 * @see {@link RemoveFlowVpcInterfaceCommandOutput} for command's `response` shape.
 * @see {@link MediaConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
class RemoveFlowVpcInterfaceCommand extends smithy_client_1.Command {
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
        const clientName = "MediaConnectClient";
        const commandName = "RemoveFlowVpcInterfaceCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.RemoveFlowVpcInterfaceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.RemoveFlowVpcInterfaceResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1RemoveFlowVpcInterfaceCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1RemoveFlowVpcInterfaceCommand(output, context);
    }
}
exports.RemoveFlowVpcInterfaceCommand = RemoveFlowVpcInterfaceCommand;
//# sourceMappingURL=RemoveFlowVpcInterfaceCommand.js.map