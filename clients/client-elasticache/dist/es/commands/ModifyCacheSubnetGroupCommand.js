import { __extends } from "tslib";
import { ModifyCacheSubnetGroupMessage, ModifyCacheSubnetGroupResult } from "../models/models_0";
import { deserializeAws_queryModifyCacheSubnetGroupCommand, serializeAws_queryModifyCacheSubnetGroupCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Modifies an existing cache subnet group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, ModifyCacheSubnetGroupCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, ModifyCacheSubnetGroupCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new ModifyCacheSubnetGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyCacheSubnetGroupCommandInput} for command's `input` shape.
 * @see {@link ModifyCacheSubnetGroupCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ModifyCacheSubnetGroupCommand = /** @class */ (function (_super) {
    __extends(ModifyCacheSubnetGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ModifyCacheSubnetGroupCommand(input) {
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
    ModifyCacheSubnetGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElastiCacheClient";
        var commandName = "ModifyCacheSubnetGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ModifyCacheSubnetGroupMessage.filterSensitiveLog,
            outputFilterSensitiveLog: ModifyCacheSubnetGroupResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ModifyCacheSubnetGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryModifyCacheSubnetGroupCommand(input, context);
    };
    ModifyCacheSubnetGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryModifyCacheSubnetGroupCommand(output, context);
    };
    return ModifyCacheSubnetGroupCommand;
}($Command));
export { ModifyCacheSubnetGroupCommand };
//# sourceMappingURL=ModifyCacheSubnetGroupCommand.js.map