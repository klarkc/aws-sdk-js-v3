"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StopServerCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Changes the state of a file transfer protocol-enabled server from <code>ONLINE</code> to
 *         <code>OFFLINE</code>. An <code>OFFLINE</code> server cannot accept and process file transfer
 *       jobs. Information tied to your server, such as server and user properties, are not affected by
 *       stopping your server.</p>
 *
 *          <note>
 *             <p>Stopping the server will not reduce or impact your file transfer protocol endpoint
 *         billing; you must delete the server to stop being billed.</p>
 *          </note>
 *
 *          <p>The state of <code>STOPPING</code> indicates that the server is in an intermediate state,
 *       either not fully able to respond, or not fully offline. The values of <code>STOP_FAILED</code>
 *       can indicate an error condition.</p>
 *
 *          <p>No response is returned from this call.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, StopServerCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, StopServerCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * const client = new TransferClient(config);
 * const command = new StopServerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopServerCommandInput} for command's `input` shape.
 * @see {@link StopServerCommandOutput} for command's `response` shape.
 * @see {@link TransferClientResolvedConfig | config} for command's `input` shape.
 *
 */
class StopServerCommand extends smithy_client_1.Command {
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
        const clientName = "TransferClient";
        const commandName = "StopServerCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.StopServerRequest.filterSensitiveLog,
            outputFilterSensitiveLog: (output) => output,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1StopServerCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1StopServerCommand(output, context);
    }
}
exports.StopServerCommand = StopServerCommand;
//# sourceMappingURL=StopServerCommand.js.map