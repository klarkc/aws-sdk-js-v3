"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListJournalKinesisStreamsForLedgerCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Returns an array of all Amazon QLDB journal stream descriptors for a given ledger. The
 *          output of each stream descriptor includes the same details that are returned by
 *             <code>DescribeJournalKinesisStream</code>.</p>
 *          <p>This action returns a maximum of <code>MaxResults</code> items. It is paginated so that
 *          you can retrieve all the items by calling <code>ListJournalKinesisStreamsForLedger</code>
 *          multiple times.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QLDBClient, ListJournalKinesisStreamsForLedgerCommand } from "@aws-sdk/client-qldb"; // ES Modules import
 * // const { QLDBClient, ListJournalKinesisStreamsForLedgerCommand } = require("@aws-sdk/client-qldb"); // CommonJS import
 * const client = new QLDBClient(config);
 * const command = new ListJournalKinesisStreamsForLedgerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListJournalKinesisStreamsForLedgerCommandInput} for command's `input` shape.
 * @see {@link ListJournalKinesisStreamsForLedgerCommandOutput} for command's `response` shape.
 * @see {@link QLDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ListJournalKinesisStreamsForLedgerCommand extends smithy_client_1.Command {
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
        const commandName = "ListJournalKinesisStreamsForLedgerCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ListJournalKinesisStreamsForLedgerRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ListJournalKinesisStreamsForLedgerResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1ListJournalKinesisStreamsForLedgerCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1ListJournalKinesisStreamsForLedgerCommand(output, context);
    }
}
exports.ListJournalKinesisStreamsForLedgerCommand = ListJournalKinesisStreamsForLedgerCommand;
//# sourceMappingURL=ListJournalKinesisStreamsForLedgerCommand.js.map