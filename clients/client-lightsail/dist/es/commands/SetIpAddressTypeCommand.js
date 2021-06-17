import { __extends } from "tslib";
import { SetIpAddressTypeRequest, SetIpAddressTypeResult } from "../models/models_1";
import { deserializeAws_json1_1SetIpAddressTypeCommand, serializeAws_json1_1SetIpAddressTypeCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Sets the IP address type for an Amazon Lightsail resource.</p>
 *
 *          <p>Use this action to enable dual-stack for a resource, which enables IPv4 and IPv6 for the
 *       specified resource. Alternately, you can use this action to disable dual-stack, and enable
 *       IPv4 only.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, SetIpAddressTypeCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, SetIpAddressTypeCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new SetIpAddressTypeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SetIpAddressTypeCommandInput} for command's `input` shape.
 * @see {@link SetIpAddressTypeCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var SetIpAddressTypeCommand = /** @class */ (function (_super) {
    __extends(SetIpAddressTypeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function SetIpAddressTypeCommand(input) {
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
    SetIpAddressTypeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "SetIpAddressTypeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: SetIpAddressTypeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: SetIpAddressTypeResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    SetIpAddressTypeCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1SetIpAddressTypeCommand(input, context);
    };
    SetIpAddressTypeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1SetIpAddressTypeCommand(output, context);
    };
    return SetIpAddressTypeCommand;
}($Command));
export { SetIpAddressTypeCommand };
//# sourceMappingURL=SetIpAddressTypeCommand.js.map