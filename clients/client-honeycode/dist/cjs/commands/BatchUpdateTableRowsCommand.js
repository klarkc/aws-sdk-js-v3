"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BatchUpdateTableRowsCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>
 *             The BatchUpdateTableRows API allows you to update one or more rows in a table in a workbook.
 *         </p>
 *         <p>
 *             You can specify the values to set in some or all of the columns in the table for the specified
 *             rows.
 *             If a column is not explicitly specified in a particular row, then that column will not be updated
 *             for that row. To clear out the data in a specific cell, you need to set the value as an empty string
 *             ("").
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HoneycodeClient, BatchUpdateTableRowsCommand } from "@aws-sdk/client-honeycode"; // ES Modules import
 * // const { HoneycodeClient, BatchUpdateTableRowsCommand } = require("@aws-sdk/client-honeycode"); // CommonJS import
 * const client = new HoneycodeClient(config);
 * const command = new BatchUpdateTableRowsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchUpdateTableRowsCommandInput} for command's `input` shape.
 * @see {@link BatchUpdateTableRowsCommandOutput} for command's `response` shape.
 * @see {@link HoneycodeClientResolvedConfig | config} for command's `input` shape.
 *
 */
class BatchUpdateTableRowsCommand extends smithy_client_1.Command {
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
        const commandName = "BatchUpdateTableRowsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.BatchUpdateTableRowsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.BatchUpdateTableRowsResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1BatchUpdateTableRowsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1BatchUpdateTableRowsCommand(output, context);
    }
}
exports.BatchUpdateTableRowsCommand = BatchUpdateTableRowsCommand;
//# sourceMappingURL=BatchUpdateTableRowsCommand.js.map