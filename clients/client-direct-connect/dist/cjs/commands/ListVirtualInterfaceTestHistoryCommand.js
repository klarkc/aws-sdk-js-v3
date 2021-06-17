"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListVirtualInterfaceTestHistoryCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Lists the virtual interface failover test history.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, ListVirtualInterfaceTestHistoryCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, ListVirtualInterfaceTestHistoryCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new ListVirtualInterfaceTestHistoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListVirtualInterfaceTestHistoryCommandInput} for command's `input` shape.
 * @see {@link ListVirtualInterfaceTestHistoryCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ListVirtualInterfaceTestHistoryCommand extends smithy_client_1.Command {
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
        const commandName = "ListVirtualInterfaceTestHistoryCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ListVirtualInterfaceTestHistoryRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ListVirtualInterfaceTestHistoryResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1ListVirtualInterfaceTestHistoryCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1ListVirtualInterfaceTestHistoryCommand(output, context);
    }
}
exports.ListVirtualInterfaceTestHistoryCommand = ListVirtualInterfaceTestHistoryCommand;
//# sourceMappingURL=ListVirtualInterfaceTestHistoryCommand.js.map