import { __extends } from "tslib";
import { ModifyDBClusterEndpointMessage, ModifyDBClusterEndpointOutput } from "../models/models_0";
import { deserializeAws_queryModifyDBClusterEndpointCommand, serializeAws_queryModifyDBClusterEndpointCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Modifies the properties of an endpoint in an Amazon Neptune DB cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, ModifyDBClusterEndpointCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, ModifyDBClusterEndpointCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * const client = new NeptuneClient(config);
 * const command = new ModifyDBClusterEndpointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyDBClusterEndpointCommandInput} for command's `input` shape.
 * @see {@link ModifyDBClusterEndpointCommandOutput} for command's `response` shape.
 * @see {@link NeptuneClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ModifyDBClusterEndpointCommand = /** @class */ (function (_super) {
    __extends(ModifyDBClusterEndpointCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ModifyDBClusterEndpointCommand(input) {
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
    ModifyDBClusterEndpointCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "NeptuneClient";
        var commandName = "ModifyDBClusterEndpointCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ModifyDBClusterEndpointMessage.filterSensitiveLog,
            outputFilterSensitiveLog: ModifyDBClusterEndpointOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ModifyDBClusterEndpointCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryModifyDBClusterEndpointCommand(input, context);
    };
    ModifyDBClusterEndpointCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryModifyDBClusterEndpointCommand(output, context);
    };
    return ModifyDBClusterEndpointCommand;
}($Command));
export { ModifyDBClusterEndpointCommand };
//# sourceMappingURL=ModifyDBClusterEndpointCommand.js.map