import { __extends } from "tslib";
import { StartMigrationMessage, StartMigrationResponse } from "../models/models_0";
import { deserializeAws_queryStartMigrationCommand, serializeAws_queryStartMigrationCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Start the migration of data.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, StartMigrationCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, StartMigrationCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new StartMigrationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartMigrationCommandInput} for command's `input` shape.
 * @see {@link StartMigrationCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartMigrationCommand = /** @class */ (function (_super) {
    __extends(StartMigrationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartMigrationCommand(input) {
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
    StartMigrationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElastiCacheClient";
        var commandName = "StartMigrationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartMigrationMessage.filterSensitiveLog,
            outputFilterSensitiveLog: StartMigrationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartMigrationCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryStartMigrationCommand(input, context);
    };
    StartMigrationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryStartMigrationCommand(output, context);
    };
    return StartMigrationCommand;
}($Command));
export { StartMigrationCommand };
//# sourceMappingURL=StartMigrationCommand.js.map