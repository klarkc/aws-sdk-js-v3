"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllocateConnectionOnInterconnectCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * @deprecated
 *
 * <p>Deprecated. Use <a>AllocateHostedConnection</a> instead.</p>
 *          <p>Creates a hosted connection on an interconnect.</p>
 *          <p>Allocates a VLAN number and a specified amount of bandwidth for use by a hosted connection on the specified interconnect.</p>
 *          <note>
 *             <p>Intended for use by AWS Direct Connect Partners only.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, AllocateConnectionOnInterconnectCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, AllocateConnectionOnInterconnectCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new AllocateConnectionOnInterconnectCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AllocateConnectionOnInterconnectCommandInput} for command's `input` shape.
 * @see {@link AllocateConnectionOnInterconnectCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
class AllocateConnectionOnInterconnectCommand extends smithy_client_1.Command {
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
        const commandName = "AllocateConnectionOnInterconnectCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.AllocateConnectionOnInterconnectRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.Connection.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1AllocateConnectionOnInterconnectCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1AllocateConnectionOnInterconnectCommand(output, context);
    }
}
exports.AllocateConnectionOnInterconnectCommand = AllocateConnectionOnInterconnectCommand;
//# sourceMappingURL=AllocateConnectionOnInterconnectCommand.js.map