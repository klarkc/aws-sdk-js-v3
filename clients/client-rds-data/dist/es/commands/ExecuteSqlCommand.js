import { __extends } from "tslib";
import { ExecuteSqlRequest, ExecuteSqlResponse } from "../models/models_0";
import { deserializeAws_restJson1ExecuteSqlCommand, serializeAws_restJson1ExecuteSqlCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * @deprecated
 *
 * <p>Runs one or more SQL statements.</p>
 *         <important>
 *             <p>This operation is deprecated. Use the <code>BatchExecuteStatement</code> or
 *                     <code>ExecuteStatement</code> operation.</p>
 *         </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSDataClient, ExecuteSqlCommand } from "@aws-sdk/client-rds-data"; // ES Modules import
 * // const { RDSDataClient, ExecuteSqlCommand } = require("@aws-sdk/client-rds-data"); // CommonJS import
 * const client = new RDSDataClient(config);
 * const command = new ExecuteSqlCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ExecuteSqlCommandInput} for command's `input` shape.
 * @see {@link ExecuteSqlCommandOutput} for command's `response` shape.
 * @see {@link RDSDataClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ExecuteSqlCommand = /** @class */ (function (_super) {
    __extends(ExecuteSqlCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ExecuteSqlCommand(input) {
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
    ExecuteSqlCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RDSDataClient";
        var commandName = "ExecuteSqlCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ExecuteSqlRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ExecuteSqlResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ExecuteSqlCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ExecuteSqlCommand(input, context);
    };
    ExecuteSqlCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ExecuteSqlCommand(output, context);
    };
    return ExecuteSqlCommand;
}($Command));
export { ExecuteSqlCommand };
//# sourceMappingURL=ExecuteSqlCommand.js.map