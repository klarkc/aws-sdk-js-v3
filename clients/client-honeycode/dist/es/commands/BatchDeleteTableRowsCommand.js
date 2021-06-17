import { __extends } from "tslib";
import { BatchDeleteTableRowsRequest, BatchDeleteTableRowsResult } from "../models/models_0";
import { deserializeAws_restJson1BatchDeleteTableRowsCommand, serializeAws_restJson1BatchDeleteTableRowsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *             The BatchDeleteTableRows API allows you to delete one or more rows from a table in a workbook.
 *             You need to specify the ids of the rows that you want to delete from the table.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HoneycodeClient, BatchDeleteTableRowsCommand } from "@aws-sdk/client-honeycode"; // ES Modules import
 * // const { HoneycodeClient, BatchDeleteTableRowsCommand } = require("@aws-sdk/client-honeycode"); // CommonJS import
 * const client = new HoneycodeClient(config);
 * const command = new BatchDeleteTableRowsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchDeleteTableRowsCommandInput} for command's `input` shape.
 * @see {@link BatchDeleteTableRowsCommandOutput} for command's `response` shape.
 * @see {@link HoneycodeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var BatchDeleteTableRowsCommand = /** @class */ (function (_super) {
    __extends(BatchDeleteTableRowsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function BatchDeleteTableRowsCommand(input) {
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
    BatchDeleteTableRowsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "HoneycodeClient";
        var commandName = "BatchDeleteTableRowsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: BatchDeleteTableRowsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: BatchDeleteTableRowsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    BatchDeleteTableRowsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1BatchDeleteTableRowsCommand(input, context);
    };
    BatchDeleteTableRowsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1BatchDeleteTableRowsCommand(output, context);
    };
    return BatchDeleteTableRowsCommand;
}($Command));
export { BatchDeleteTableRowsCommand };
//# sourceMappingURL=BatchDeleteTableRowsCommand.js.map