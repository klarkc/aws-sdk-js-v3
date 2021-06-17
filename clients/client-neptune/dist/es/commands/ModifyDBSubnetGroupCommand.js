import { __extends } from "tslib";
import { ModifyDBSubnetGroupMessage, ModifyDBSubnetGroupResult } from "../models/models_0";
import { deserializeAws_queryModifyDBSubnetGroupCommand, serializeAws_queryModifyDBSubnetGroupCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Modifies an existing DB subnet group. DB subnet groups must contain at least one subnet in
 *       at least two AZs in the Amazon Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, ModifyDBSubnetGroupCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, ModifyDBSubnetGroupCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * const client = new NeptuneClient(config);
 * const command = new ModifyDBSubnetGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyDBSubnetGroupCommandInput} for command's `input` shape.
 * @see {@link ModifyDBSubnetGroupCommandOutput} for command's `response` shape.
 * @see {@link NeptuneClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ModifyDBSubnetGroupCommand = /** @class */ (function (_super) {
    __extends(ModifyDBSubnetGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ModifyDBSubnetGroupCommand(input) {
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
    ModifyDBSubnetGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "NeptuneClient";
        var commandName = "ModifyDBSubnetGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ModifyDBSubnetGroupMessage.filterSensitiveLog,
            outputFilterSensitiveLog: ModifyDBSubnetGroupResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ModifyDBSubnetGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryModifyDBSubnetGroupCommand(input, context);
    };
    ModifyDBSubnetGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryModifyDBSubnetGroupCommand(output, context);
    };
    return ModifyDBSubnetGroupCommand;
}($Command));
export { ModifyDBSubnetGroupCommand };
//# sourceMappingURL=ModifyDBSubnetGroupCommand.js.map