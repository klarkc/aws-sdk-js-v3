import { __extends } from "tslib";
import { ModifyEventSubscriptionMessage, ModifyEventSubscriptionResult } from "../models/models_1";
import { deserializeAws_queryModifyEventSubscriptionCommand, serializeAws_queryModifyEventSubscriptionCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Modifies an existing Amazon Redshift event notification subscription.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, ModifyEventSubscriptionCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, ModifyEventSubscriptionCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new ModifyEventSubscriptionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyEventSubscriptionCommandInput} for command's `input` shape.
 * @see {@link ModifyEventSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ModifyEventSubscriptionCommand = /** @class */ (function (_super) {
    __extends(ModifyEventSubscriptionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ModifyEventSubscriptionCommand(input) {
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
    ModifyEventSubscriptionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RedshiftClient";
        var commandName = "ModifyEventSubscriptionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ModifyEventSubscriptionMessage.filterSensitiveLog,
            outputFilterSensitiveLog: ModifyEventSubscriptionResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ModifyEventSubscriptionCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryModifyEventSubscriptionCommand(input, context);
    };
    ModifyEventSubscriptionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryModifyEventSubscriptionCommand(output, context);
    };
    return ModifyEventSubscriptionCommand;
}($Command));
export { ModifyEventSubscriptionCommand };
//# sourceMappingURL=ModifyEventSubscriptionCommand.js.map