"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssociateVirtualInterfaceCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Associates a virtual interface with a specified link aggregation group (LAG) or
 *       connection. Connectivity to AWS is temporarily interrupted as the virtual interface is
 *       being migrated. If the target connection or LAG has an associated virtual interface with
 *       a conflicting VLAN number or a conflicting IP address, the operation fails.</p>
 *          <p>Virtual interfaces associated with a hosted connection cannot be associated with a
 *       LAG; hosted connections must be migrated along with their virtual interfaces using <a>AssociateHostedConnection</a>.</p>
 *          <p>To reassociate a virtual interface to a new connection or LAG, the requester
 *       must own either the virtual interface itself or the connection to which the virtual
 *       interface is currently associated. Additionally, the requester must own the connection
 *       or LAG for the association.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, AssociateVirtualInterfaceCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, AssociateVirtualInterfaceCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new AssociateVirtualInterfaceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateVirtualInterfaceCommandInput} for command's `input` shape.
 * @see {@link AssociateVirtualInterfaceCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
class AssociateVirtualInterfaceCommand extends smithy_client_1.Command {
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
        const commandName = "AssociateVirtualInterfaceCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.AssociateVirtualInterfaceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.VirtualInterface.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1AssociateVirtualInterfaceCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1AssociateVirtualInterfaceCommand(output, context);
    }
}
exports.AssociateVirtualInterfaceCommand = AssociateVirtualInterfaceCommand;
//# sourceMappingURL=AssociateVirtualInterfaceCommand.js.map