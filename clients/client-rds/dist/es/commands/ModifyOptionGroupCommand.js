import { __extends } from "tslib";
import { ModifyOptionGroupMessage, ModifyOptionGroupResult } from "../models/models_1";
import { deserializeAws_queryModifyOptionGroupCommand, serializeAws_queryModifyOptionGroupCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Modifies an existing option group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, ModifyOptionGroupCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, ModifyOptionGroupCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new ModifyOptionGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyOptionGroupCommandInput} for command's `input` shape.
 * @see {@link ModifyOptionGroupCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ModifyOptionGroupCommand = /** @class */ (function (_super) {
    __extends(ModifyOptionGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ModifyOptionGroupCommand(input) {
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
    ModifyOptionGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RDSClient";
        var commandName = "ModifyOptionGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ModifyOptionGroupMessage.filterSensitiveLog,
            outputFilterSensitiveLog: ModifyOptionGroupResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ModifyOptionGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryModifyOptionGroupCommand(input, context);
    };
    ModifyOptionGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryModifyOptionGroupCommand(output, context);
    };
    return ModifyOptionGroupCommand;
}($Command));
export { ModifyOptionGroupCommand };
//# sourceMappingURL=ModifyOptionGroupCommand.js.map