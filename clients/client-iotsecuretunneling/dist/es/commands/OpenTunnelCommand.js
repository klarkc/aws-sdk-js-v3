import { __extends } from "tslib";
import { OpenTunnelRequest, OpenTunnelResponse } from "../models/models_0";
import { deserializeAws_json1_1OpenTunnelCommand, serializeAws_json1_1OpenTunnelCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new tunnel, and returns two client access tokens for clients to use to
 * 			connect to the AWS IoT Secure Tunneling proxy server.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSecureTunnelingClient, OpenTunnelCommand } from "@aws-sdk/client-iotsecuretunneling"; // ES Modules import
 * // const { IoTSecureTunnelingClient, OpenTunnelCommand } = require("@aws-sdk/client-iotsecuretunneling"); // CommonJS import
 * const client = new IoTSecureTunnelingClient(config);
 * const command = new OpenTunnelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link OpenTunnelCommandInput} for command's `input` shape.
 * @see {@link OpenTunnelCommandOutput} for command's `response` shape.
 * @see {@link IoTSecureTunnelingClientResolvedConfig | config} for command's `input` shape.
 *
 */
var OpenTunnelCommand = /** @class */ (function (_super) {
    __extends(OpenTunnelCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function OpenTunnelCommand(input) {
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
    OpenTunnelCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTSecureTunnelingClient";
        var commandName = "OpenTunnelCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: OpenTunnelRequest.filterSensitiveLog,
            outputFilterSensitiveLog: OpenTunnelResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    OpenTunnelCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1OpenTunnelCommand(input, context);
    };
    OpenTunnelCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1OpenTunnelCommand(output, context);
    };
    return OpenTunnelCommand;
}($Command));
export { OpenTunnelCommand };
//# sourceMappingURL=OpenTunnelCommand.js.map