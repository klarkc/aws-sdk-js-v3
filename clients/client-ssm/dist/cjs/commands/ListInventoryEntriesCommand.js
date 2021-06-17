"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListInventoryEntriesCommand = void 0;
const models_1_1 = require("../models/models_1");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>A list of inventory items returned by the request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, ListInventoryEntriesCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, ListInventoryEntriesCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new ListInventoryEntriesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListInventoryEntriesCommandInput} for command's `input` shape.
 * @see {@link ListInventoryEntriesCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ListInventoryEntriesCommand extends smithy_client_1.Command {
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
        const clientName = "SSMClient";
        const commandName = "ListInventoryEntriesCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_1_1.ListInventoryEntriesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_1_1.ListInventoryEntriesResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1ListInventoryEntriesCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1ListInventoryEntriesCommand(output, context);
    }
}
exports.ListInventoryEntriesCommand = ListInventoryEntriesCommand;
//# sourceMappingURL=ListInventoryEntriesCommand.js.map