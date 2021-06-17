import { __extends } from "tslib";
import { ModifyDBProxyTargetGroupRequest, ModifyDBProxyTargetGroupResponse } from "../models/models_1";
import { deserializeAws_queryModifyDBProxyTargetGroupCommand, serializeAws_queryModifyDBProxyTargetGroupCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Modifies the properties of a <code>DBProxyTargetGroup</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, ModifyDBProxyTargetGroupCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, ModifyDBProxyTargetGroupCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new ModifyDBProxyTargetGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyDBProxyTargetGroupCommandInput} for command's `input` shape.
 * @see {@link ModifyDBProxyTargetGroupCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ModifyDBProxyTargetGroupCommand = /** @class */ (function (_super) {
    __extends(ModifyDBProxyTargetGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ModifyDBProxyTargetGroupCommand(input) {
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
    ModifyDBProxyTargetGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RDSClient";
        var commandName = "ModifyDBProxyTargetGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ModifyDBProxyTargetGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ModifyDBProxyTargetGroupResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ModifyDBProxyTargetGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryModifyDBProxyTargetGroupCommand(input, context);
    };
    ModifyDBProxyTargetGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryModifyDBProxyTargetGroupCommand(output, context);
    };
    return ModifyDBProxyTargetGroupCommand;
}($Command));
export { ModifyDBProxyTargetGroupCommand };
//# sourceMappingURL=ModifyDBProxyTargetGroupCommand.js.map