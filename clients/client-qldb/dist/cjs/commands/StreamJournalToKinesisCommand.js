"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StreamJournalToKinesisCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Creates a journal stream for a given Amazon QLDB ledger. The stream captures every
 *          document revision that is committed to the ledger's journal and delivers the data to a
 *          specified Amazon Kinesis Data Streams resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QLDBClient, StreamJournalToKinesisCommand } from "@aws-sdk/client-qldb"; // ES Modules import
 * // const { QLDBClient, StreamJournalToKinesisCommand } = require("@aws-sdk/client-qldb"); // CommonJS import
 * const client = new QLDBClient(config);
 * const command = new StreamJournalToKinesisCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StreamJournalToKinesisCommandInput} for command's `input` shape.
 * @see {@link StreamJournalToKinesisCommandOutput} for command's `response` shape.
 * @see {@link QLDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
class StreamJournalToKinesisCommand extends smithy_client_1.Command {
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
        const clientName = "QLDBClient";
        const commandName = "StreamJournalToKinesisCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.StreamJournalToKinesisRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.StreamJournalToKinesisResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1StreamJournalToKinesisCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1StreamJournalToKinesisCommand(output, context);
    }
}
exports.StreamJournalToKinesisCommand = StreamJournalToKinesisCommand;
//# sourceMappingURL=StreamJournalToKinesisCommand.js.map