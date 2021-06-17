import { __extends } from "tslib";
import { CompleteMigrationMessage, CompleteMigrationResponse } from "../models/models_0";
import { deserializeAws_queryCompleteMigrationCommand, serializeAws_queryCompleteMigrationCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Complete the migration of data.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, CompleteMigrationCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, CompleteMigrationCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new CompleteMigrationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CompleteMigrationCommandInput} for command's `input` shape.
 * @see {@link CompleteMigrationCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CompleteMigrationCommand = /** @class */ (function (_super) {
    __extends(CompleteMigrationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CompleteMigrationCommand(input) {
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
    CompleteMigrationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElastiCacheClient";
        var commandName = "CompleteMigrationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CompleteMigrationMessage.filterSensitiveLog,
            outputFilterSensitiveLog: CompleteMigrationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CompleteMigrationCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryCompleteMigrationCommand(input, context);
    };
    CompleteMigrationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryCompleteMigrationCommand(output, context);
    };
    return CompleteMigrationCommand;
}($Command));
export { CompleteMigrationCommand };
//# sourceMappingURL=CompleteMigrationCommand.js.map