import { __extends } from "tslib";
import { DescribeTunnelRequest, DescribeTunnelResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeTunnelCommand, serializeAws_json1_1DescribeTunnelCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about a tunnel identified by the unique tunnel id.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSecureTunnelingClient, DescribeTunnelCommand } from "@aws-sdk/client-iotsecuretunneling"; // ES Modules import
 * // const { IoTSecureTunnelingClient, DescribeTunnelCommand } = require("@aws-sdk/client-iotsecuretunneling"); // CommonJS import
 * const client = new IoTSecureTunnelingClient(config);
 * const command = new DescribeTunnelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeTunnelCommandInput} for command's `input` shape.
 * @see {@link DescribeTunnelCommandOutput} for command's `response` shape.
 * @see {@link IoTSecureTunnelingClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeTunnelCommand = /** @class */ (function (_super) {
    __extends(DescribeTunnelCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeTunnelCommand(input) {
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
    DescribeTunnelCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTSecureTunnelingClient";
        var commandName = "DescribeTunnelCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeTunnelRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeTunnelResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeTunnelCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeTunnelCommand(input, context);
    };
    DescribeTunnelCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeTunnelCommand(output, context);
    };
    return DescribeTunnelCommand;
}($Command));
export { DescribeTunnelCommand };
//# sourceMappingURL=DescribeTunnelCommand.js.map