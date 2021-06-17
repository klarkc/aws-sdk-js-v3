import { __extends } from "tslib";
import { ModifyDBInstanceMessage, ModifyDBInstanceResult } from "../models/models_0";
import { deserializeAws_queryModifyDBInstanceCommand, serializeAws_queryModifyDBInstanceCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Modifies settings for an instance. You can change one or more database configuration
 *             parameters by specifying these parameters and the new values in the request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DocDBClient, ModifyDBInstanceCommand } from "@aws-sdk/client-docdb"; // ES Modules import
 * // const { DocDBClient, ModifyDBInstanceCommand } = require("@aws-sdk/client-docdb"); // CommonJS import
 * const client = new DocDBClient(config);
 * const command = new ModifyDBInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyDBInstanceCommandInput} for command's `input` shape.
 * @see {@link ModifyDBInstanceCommandOutput} for command's `response` shape.
 * @see {@link DocDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ModifyDBInstanceCommand = /** @class */ (function (_super) {
    __extends(ModifyDBInstanceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ModifyDBInstanceCommand(input) {
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
    ModifyDBInstanceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DocDBClient";
        var commandName = "ModifyDBInstanceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ModifyDBInstanceMessage.filterSensitiveLog,
            outputFilterSensitiveLog: ModifyDBInstanceResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ModifyDBInstanceCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryModifyDBInstanceCommand(input, context);
    };
    ModifyDBInstanceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryModifyDBInstanceCommand(output, context);
    };
    return ModifyDBInstanceCommand;
}($Command));
export { ModifyDBInstanceCommand };
//# sourceMappingURL=ModifyDBInstanceCommand.js.map