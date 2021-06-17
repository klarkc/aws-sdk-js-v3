import { __extends } from "tslib";
import { ModifyAquaInputMessage, ModifyAquaOutputMessage } from "../models/models_1";
import { deserializeAws_queryModifyAquaConfigurationCommand, serializeAws_queryModifyAquaConfigurationCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Modifies whether a cluster can use AQUA (Advanced Query Accelerator). </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, ModifyAquaConfigurationCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, ModifyAquaConfigurationCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new ModifyAquaConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyAquaConfigurationCommandInput} for command's `input` shape.
 * @see {@link ModifyAquaConfigurationCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ModifyAquaConfigurationCommand = /** @class */ (function (_super) {
    __extends(ModifyAquaConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ModifyAquaConfigurationCommand(input) {
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
    ModifyAquaConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RedshiftClient";
        var commandName = "ModifyAquaConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ModifyAquaInputMessage.filterSensitiveLog,
            outputFilterSensitiveLog: ModifyAquaOutputMessage.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ModifyAquaConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryModifyAquaConfigurationCommand(input, context);
    };
    ModifyAquaConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryModifyAquaConfigurationCommand(output, context);
    };
    return ModifyAquaConfigurationCommand;
}($Command));
export { ModifyAquaConfigurationCommand };
//# sourceMappingURL=ModifyAquaConfigurationCommand.js.map