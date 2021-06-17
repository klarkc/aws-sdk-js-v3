import { __extends } from "tslib";
import { BatchCreateTableRowsRequest, BatchCreateTableRowsResult } from "../models/models_0";
import { deserializeAws_restJson1BatchCreateTableRowsCommand, serializeAws_restJson1BatchCreateTableRowsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var BatchCreateTableRowsCommand = /** @class */ (function (_super) {
    __extends(BatchCreateTableRowsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function BatchCreateTableRowsCommand(input) {
        var _this = 
        // Start section: command_constructor
        _super.call(this) || this;
        _this.input = input;
        return _this;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    BatchCreateTableRowsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "HoneycodeClient";
        var commandName = "BatchCreateTableRowsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: BatchCreateTableRowsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: BatchCreateTableRowsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    BatchCreateTableRowsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1BatchCreateTableRowsCommand(input, context);
    };
    BatchCreateTableRowsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1BatchCreateTableRowsCommand(output, context);
    };
    return BatchCreateTableRowsCommand;
}($Command));
export { BatchCreateTableRowsCommand };
//# sourceMappingURL=BatchCreateTableRowsCommand.js.map