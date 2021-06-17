import { __extends } from "tslib";
import { BatchUpdateTableRowsRequest, BatchUpdateTableRowsResult } from "../models/models_0";
import { deserializeAws_restJson1BatchUpdateTableRowsCommand, serializeAws_restJson1BatchUpdateTableRowsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var BatchUpdateTableRowsCommand = /** @class */ (function (_super) {
    __extends(BatchUpdateTableRowsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function BatchUpdateTableRowsCommand(input) {
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
    BatchUpdateTableRowsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "HoneycodeClient";
        var commandName = "BatchUpdateTableRowsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: BatchUpdateTableRowsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: BatchUpdateTableRowsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    BatchUpdateTableRowsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1BatchUpdateTableRowsCommand(input, context);
    };
    BatchUpdateTableRowsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1BatchUpdateTableRowsCommand(output, context);
    };
    return BatchUpdateTableRowsCommand;
}($Command));
export { BatchUpdateTableRowsCommand };
//# sourceMappingURL=BatchUpdateTableRowsCommand.js.map