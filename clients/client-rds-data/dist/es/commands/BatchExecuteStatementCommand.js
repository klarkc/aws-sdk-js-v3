import { __extends } from "tslib";
import { BatchExecuteStatementRequest, BatchExecuteStatementResponse } from "../models/models_0";
import { deserializeAws_restJson1BatchExecuteStatementCommand, serializeAws_restJson1BatchExecuteStatementCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Runs a batch SQL statement over an array of data.</p>
 *         <p>You can run bulk update and insert operations for multiple records using a DML
 *             statement with different parameter sets. Bulk operations can provide a significant
 *             performance improvement over individual insert and update operations.</p>
 *         <important>
 *             <p>If a call isn't part of a transaction because it doesn't include the
 *                     <code>transactionID</code> parameter, changes that result from the call are
 *                 committed automatically.</p>
 *         </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSDataClient, BatchExecuteStatementCommand } from "@aws-sdk/client-rds-data"; // ES Modules import
 * // const { RDSDataClient, BatchExecuteStatementCommand } = require("@aws-sdk/client-rds-data"); // CommonJS import
 * const client = new RDSDataClient(config);
 * const command = new BatchExecuteStatementCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchExecuteStatementCommandInput} for command's `input` shape.
 * @see {@link BatchExecuteStatementCommandOutput} for command's `response` shape.
 * @see {@link RDSDataClientResolvedConfig | config} for command's `input` shape.
 *
 */
var BatchExecuteStatementCommand = /** @class */ (function (_super) {
    __extends(BatchExecuteStatementCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function BatchExecuteStatementCommand(input) {
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
    BatchExecuteStatementCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RDSDataClient";
        var commandName = "BatchExecuteStatementCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: BatchExecuteStatementRequest.filterSensitiveLog,
            outputFilterSensitiveLog: BatchExecuteStatementResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    BatchExecuteStatementCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1BatchExecuteStatementCommand(input, context);
    };
    BatchExecuteStatementCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1BatchExecuteStatementCommand(output, context);
    };
    return BatchExecuteStatementCommand;
}($Command));
export { BatchExecuteStatementCommand };
//# sourceMappingURL=BatchExecuteStatementCommand.js.map