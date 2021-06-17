import { __extends } from "tslib";
import { BatchUpsertTableRowsRequest, BatchUpsertTableRowsResult } from "../models/models_0";
import { deserializeAws_restJson1BatchUpsertTableRowsCommand, serializeAws_restJson1BatchUpsertTableRowsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var BatchUpsertTableRowsCommand = /** @class */ (function (_super) {
    __extends(BatchUpsertTableRowsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function BatchUpsertTableRowsCommand(input) {
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
    BatchUpsertTableRowsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "HoneycodeClient";
        var commandName = "BatchUpsertTableRowsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: BatchUpsertTableRowsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: BatchUpsertTableRowsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    BatchUpsertTableRowsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1BatchUpsertTableRowsCommand(input, context);
    };
    BatchUpsertTableRowsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1BatchUpsertTableRowsCommand(output, context);
    };
    return BatchUpsertTableRowsCommand;
}($Command));
export { BatchUpsertTableRowsCommand };
//# sourceMappingURL=BatchUpsertTableRowsCommand.js.map