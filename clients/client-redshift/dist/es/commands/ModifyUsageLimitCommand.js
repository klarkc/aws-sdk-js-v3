import { __extends } from "tslib";
import { UsageLimit } from "../models/models_0";
import { ModifyUsageLimitMessage } from "../models/models_1";
import { deserializeAws_queryModifyUsageLimitCommand, serializeAws_queryModifyUsageLimitCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Modifies a usage limit in a cluster.
 *             You can't modify the feature type or period of a usage limit.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, ModifyUsageLimitCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, ModifyUsageLimitCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new ModifyUsageLimitCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyUsageLimitCommandInput} for command's `input` shape.
 * @see {@link ModifyUsageLimitCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ModifyUsageLimitCommand = /** @class */ (function (_super) {
    __extends(ModifyUsageLimitCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ModifyUsageLimitCommand(input) {
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
    ModifyUsageLimitCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RedshiftClient";
        var commandName = "ModifyUsageLimitCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ModifyUsageLimitMessage.filterSensitiveLog,
            outputFilterSensitiveLog: UsageLimit.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ModifyUsageLimitCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryModifyUsageLimitCommand(input, context);
    };
    ModifyUsageLimitCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryModifyUsageLimitCommand(output, context);
    };
    return ModifyUsageLimitCommand;
}($Command));
export { ModifyUsageLimitCommand };
//# sourceMappingURL=ModifyUsageLimitCommand.js.map