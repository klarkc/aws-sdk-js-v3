import { __extends } from "tslib";
import { StopBgpFailoverTestRequest, StopBgpFailoverTestResponse } from "../models/models_0";
import { deserializeAws_json1_1StopBgpFailoverTestCommand, serializeAws_json1_1StopBgpFailoverTestCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Stops the virtual interface failover test.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, StopBgpFailoverTestCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, StopBgpFailoverTestCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new StopBgpFailoverTestCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopBgpFailoverTestCommandInput} for command's `input` shape.
 * @see {@link StopBgpFailoverTestCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StopBgpFailoverTestCommand = /** @class */ (function (_super) {
    __extends(StopBgpFailoverTestCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StopBgpFailoverTestCommand(input) {
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
    StopBgpFailoverTestCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DirectConnectClient";
        var commandName = "StopBgpFailoverTestCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StopBgpFailoverTestRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StopBgpFailoverTestResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StopBgpFailoverTestCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1StopBgpFailoverTestCommand(input, context);
    };
    StopBgpFailoverTestCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1StopBgpFailoverTestCommand(output, context);
    };
    return StopBgpFailoverTestCommand;
}($Command));
export { StopBgpFailoverTestCommand };
//# sourceMappingURL=StopBgpFailoverTestCommand.js.map