import { __extends } from "tslib";
import { ExecuteStatementRequest, ExecuteStatementResponse } from "../models/models_0";
import { deserializeAws_restJson1ExecuteStatementCommand, serializeAws_restJson1ExecuteStatementCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Runs a SQL statement against a database.</p>
 *         <important>
 *             <p>If a call isn't part of a transaction because it doesn't include the
 *                     <code>transactionID</code> parameter, changes that result from the call are
 *                 committed automatically.</p>
 *         </important>
 *         <p>The response size limit is 1 MB. If the call returns more than 1 MB of response data, the call is terminated.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSDataClient, ExecuteStatementCommand } from "@aws-sdk/client-rds-data"; // ES Modules import
 * // const { RDSDataClient, ExecuteStatementCommand } = require("@aws-sdk/client-rds-data"); // CommonJS import
 * const client = new RDSDataClient(config);
 * const command = new ExecuteStatementCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ExecuteStatementCommandInput} for command's `input` shape.
 * @see {@link ExecuteStatementCommandOutput} for command's `response` shape.
 * @see {@link RDSDataClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ExecuteStatementCommand = /** @class */ (function (_super) {
    __extends(ExecuteStatementCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ExecuteStatementCommand(input) {
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
    ExecuteStatementCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RDSDataClient";
        var commandName = "ExecuteStatementCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ExecuteStatementRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ExecuteStatementResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ExecuteStatementCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ExecuteStatementCommand(input, context);
    };
    ExecuteStatementCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ExecuteStatementCommand(output, context);
    };
    return ExecuteStatementCommand;
}($Command));
export { ExecuteStatementCommand };
//# sourceMappingURL=ExecuteStatementCommand.js.map