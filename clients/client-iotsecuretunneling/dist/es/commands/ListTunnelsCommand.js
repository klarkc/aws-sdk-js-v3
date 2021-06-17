import { __extends } from "tslib";
import { ListTunnelsRequest, ListTunnelsResponse } from "../models/models_0";
import { deserializeAws_json1_1ListTunnelsCommand, serializeAws_json1_1ListTunnelsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>List all tunnels for an AWS account. Tunnels are listed by creation time in
 * 			descending order, newer tunnels will be listed before older tunnels.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSecureTunnelingClient, ListTunnelsCommand } from "@aws-sdk/client-iotsecuretunneling"; // ES Modules import
 * // const { IoTSecureTunnelingClient, ListTunnelsCommand } = require("@aws-sdk/client-iotsecuretunneling"); // CommonJS import
 * const client = new IoTSecureTunnelingClient(config);
 * const command = new ListTunnelsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTunnelsCommandInput} for command's `input` shape.
 * @see {@link ListTunnelsCommandOutput} for command's `response` shape.
 * @see {@link IoTSecureTunnelingClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListTunnelsCommand = /** @class */ (function (_super) {
    __extends(ListTunnelsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListTunnelsCommand(input) {
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
    ListTunnelsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTSecureTunnelingClient";
        var commandName = "ListTunnelsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListTunnelsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListTunnelsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListTunnelsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListTunnelsCommand(input, context);
    };
    ListTunnelsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListTunnelsCommand(output, context);
    };
    return ListTunnelsCommand;
}($Command));
export { ListTunnelsCommand };
//# sourceMappingURL=ListTunnelsCommand.js.map