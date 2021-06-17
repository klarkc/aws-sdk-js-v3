"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BatchCreateTableRowsCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>
 *             The BatchCreateTableRows API allows you to create one or more rows at the end of a table in a workbook.
 *             The API allows you to specify the values to set in some or all of the columns in the new rows.
 *         </p>
 *         <p>
 *             If a column is not explicitly set in a specific row, then the column level formula specified in the table
 *             will be applied to the new row. If there is no column level formula but the last row of the table has a
 *             formula, then that formula will be copied down to the new row. If there is no column level formula and
 *             no formula in the last row of the table, then that column will be left blank for the new rows.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HoneycodeClient, BatchCreateTableRowsCommand } from "@aws-sdk/client-honeycode"; // ES Modules import
 * // const { HoneycodeClient, BatchCreateTableRowsCommand } = require("@aws-sdk/client-honeycode"); // CommonJS import
 * const client = new HoneycodeClient(config);
 * const command = new BatchCreateTableRowsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchCreateTableRowsCommandInput} for command's `input` shape.
 * @see {@link BatchCreateTableRowsCommandOutput} for command's `response` shape.
 * @see {@link HoneycodeClientResolvedConfig | config} for command's `input` shape.
 *
 */
class BatchCreateTableRowsCommand extends smithy_client_1.Command {
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
        const commandName = "BatchCreateTableRowsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.BatchCreateTableRowsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.BatchCreateTableRowsResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1BatchCreateTableRowsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1BatchCreateTableRowsCommand(output, context);
    }
}
exports.BatchCreateTableRowsCommand = BatchCreateTableRowsCommand;
//# sourceMappingURL=BatchCreateTableRowsCommand.js.map