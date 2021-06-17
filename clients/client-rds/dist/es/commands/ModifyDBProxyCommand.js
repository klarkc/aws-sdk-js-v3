import { __extends } from "tslib";
import { ModifyDBProxyRequest, ModifyDBProxyResponse } from "../models/models_1";
import { deserializeAws_queryModifyDBProxyCommand, serializeAws_queryModifyDBProxyCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Changes the settings for an existing DB proxy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, ModifyDBProxyCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, ModifyDBProxyCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new ModifyDBProxyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyDBProxyCommandInput} for command's `input` shape.
 * @see {@link ModifyDBProxyCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ModifyDBProxyCommand = /** @class */ (function (_super) {
    __extends(ModifyDBProxyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ModifyDBProxyCommand(input) {
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
    ModifyDBProxyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RDSClient";
        var commandName = "ModifyDBProxyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ModifyDBProxyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ModifyDBProxyResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ModifyDBProxyCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryModifyDBProxyCommand(input, context);
    };
    ModifyDBProxyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryModifyDBProxyCommand(output, context);
    };
    return ModifyDBProxyCommand;
}($Command));
export { ModifyDBProxyCommand };
//# sourceMappingURL=ModifyDBProxyCommand.js.map