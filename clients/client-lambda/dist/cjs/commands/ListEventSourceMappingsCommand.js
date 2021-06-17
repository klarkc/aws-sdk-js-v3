"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListEventSourceMappingsCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Lists event source mappings. Specify an <code>EventSourceArn</code> to only show event source mappings for a
 *       single event source.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, ListEventSourceMappingsCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, ListEventSourceMappingsCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new ListEventSourceMappingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListEventSourceMappingsCommandInput} for command's `input` shape.
 * @see {@link ListEventSourceMappingsCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ListEventSourceMappingsCommand extends smithy_client_1.Command {
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
        const clientName = "LambdaClient";
        const commandName = "ListEventSourceMappingsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ListEventSourceMappingsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ListEventSourceMappingsResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1ListEventSourceMappingsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1ListEventSourceMappingsCommand(output, context);
    }
}
exports.ListEventSourceMappingsCommand = ListEventSourceMappingsCommand;
//# sourceMappingURL=ListEventSourceMappingsCommand.js.map