"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BatchGetTracesCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Retrieves a list of traces specified by ID. Each trace is a collection of segment
 *       documents that originates from a single request. Use <code>GetTraceSummaries</code> to get a
 *       list of trace IDs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { XRayClient, BatchGetTracesCommand } from "@aws-sdk/client-xray"; // ES Modules import
 * // const { XRayClient, BatchGetTracesCommand } = require("@aws-sdk/client-xray"); // CommonJS import
 * const client = new XRayClient(config);
 * const command = new BatchGetTracesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchGetTracesCommandInput} for command's `input` shape.
 * @see {@link BatchGetTracesCommandOutput} for command's `response` shape.
 * @see {@link XRayClientResolvedConfig | config} for command's `input` shape.
 *
 */
class BatchGetTracesCommand extends smithy_client_1.Command {
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
        const clientName = "XRayClient";
        const commandName = "BatchGetTracesCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.BatchGetTracesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.BatchGetTracesResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1BatchGetTracesCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1BatchGetTracesCommand(output, context);
    }
}
exports.BatchGetTracesCommand = BatchGetTracesCommand;
//# sourceMappingURL=BatchGetTracesCommand.js.map