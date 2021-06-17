import { __extends } from "tslib";
import { ModifyDBProxyEndpointRequest, ModifyDBProxyEndpointResponse } from "../models/models_1";
import { deserializeAws_queryModifyDBProxyEndpointCommand, serializeAws_queryModifyDBProxyEndpointCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Changes the settings for an existing DB proxy endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, ModifyDBProxyEndpointCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, ModifyDBProxyEndpointCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new ModifyDBProxyEndpointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyDBProxyEndpointCommandInput} for command's `input` shape.
 * @see {@link ModifyDBProxyEndpointCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ModifyDBProxyEndpointCommand = /** @class */ (function (_super) {
    __extends(ModifyDBProxyEndpointCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ModifyDBProxyEndpointCommand(input) {
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
    ModifyDBProxyEndpointCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RDSClient";
        var commandName = "ModifyDBProxyEndpointCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ModifyDBProxyEndpointRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ModifyDBProxyEndpointResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ModifyDBProxyEndpointCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryModifyDBProxyEndpointCommand(input, context);
    };
    ModifyDBProxyEndpointCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryModifyDBProxyEndpointCommand(output, context);
    };
    return ModifyDBProxyEndpointCommand;
}($Command));
export { ModifyDBProxyEndpointCommand };
//# sourceMappingURL=ModifyDBProxyEndpointCommand.js.map