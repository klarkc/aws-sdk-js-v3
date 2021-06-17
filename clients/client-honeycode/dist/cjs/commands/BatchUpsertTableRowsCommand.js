"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BatchUpsertTableRowsCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>
 *             The BatchUpsertTableRows API allows you to upsert one or more rows in a table. The upsert
 *             operation takes a filter expression as input and evaluates it to find matching rows on the destination
 *             table. If matching rows are found, it will update the cells in the matching rows to new values specified
 *             in the request. If no matching rows are found, a new row is added at the end of the table and the cells in
 *             that row are set to the new values specified in the request.
 *         </p>
 *         <p>
 *             You can specify the values to set in some or all of the columns in the table for the
 *             matching or newly appended rows. If a column is not explicitly specified for a particular row, then that
 *             column will not be updated for that row. To clear out the data in a specific cell, you need to set the value
 *             as an empty string ("").
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HoneycodeClient, BatchUpsertTableRowsCommand } from "@aws-sdk/client-honeycode"; // ES Modules import
 * // const { HoneycodeClient, BatchUpsertTableRowsCommand } = require("@aws-sdk/client-honeycode"); // CommonJS import
 * const client = new HoneycodeClient(config);
 * const command = new BatchUpsertTableRowsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchUpsertTableRowsCommandInput} for command's `input` shape.
 * @see {@link BatchUpsertTableRowsCommandOutput} for command's `response` shape.
 * @see {@link HoneycodeClientResolvedConfig | config} for command's `input` shape.
 *
 */
class BatchUpsertTableRowsCommand extends smithy_client_1.Command {
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
        const clientName = "HoneycodeClient";
        const commandName = "BatchUpsertTableRowsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.BatchUpsertTableRowsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.BatchUpsertTableRowsResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1BatchUpsertTableRowsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1BatchUpsertTableRowsCommand(output, context);
    }
}
exports.BatchUpsertTableRowsCommand = BatchUpsertTableRowsCommand;
//# sourceMappingURL=BatchUpsertTableRowsCommand.js.map