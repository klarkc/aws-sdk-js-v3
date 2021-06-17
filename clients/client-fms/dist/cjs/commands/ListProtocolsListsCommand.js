"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListProtocolsListsCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Returns an array of <code>ProtocolsListDataSummary</code> objects.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, ListProtocolsListsCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, ListProtocolsListsCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * const client = new FMSClient(config);
 * const command = new ListProtocolsListsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListProtocolsListsCommandInput} for command's `input` shape.
 * @see {@link ListProtocolsListsCommandOutput} for command's `response` shape.
 * @see {@link FMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ListProtocolsListsCommand extends smithy_client_1.Command {
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
        const clientName = "FMSClient";
        const commandName = "ListProtocolsListsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ListProtocolsListsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ListProtocolsListsResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1ListProtocolsListsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1ListProtocolsListsCommand(output, context);
    }
}
exports.ListProtocolsListsCommand = ListProtocolsListsCommand;
//# sourceMappingURL=ListProtocolsListsCommand.js.map