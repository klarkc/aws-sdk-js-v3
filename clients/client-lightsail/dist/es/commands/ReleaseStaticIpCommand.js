import { __extends } from "tslib";
import { ReleaseStaticIpRequest, ReleaseStaticIpResult } from "../models/models_1";
import { deserializeAws_json1_1ReleaseStaticIpCommand, serializeAws_json1_1ReleaseStaticIpCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a specific static IP from your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, ReleaseStaticIpCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, ReleaseStaticIpCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new ReleaseStaticIpCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ReleaseStaticIpCommandInput} for command's `input` shape.
 * @see {@link ReleaseStaticIpCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ReleaseStaticIpCommand = /** @class */ (function (_super) {
    __extends(ReleaseStaticIpCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ReleaseStaticIpCommand(input) {
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
    ReleaseStaticIpCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "ReleaseStaticIpCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ReleaseStaticIpRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ReleaseStaticIpResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ReleaseStaticIpCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ReleaseStaticIpCommand(input, context);
    };
    ReleaseStaticIpCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ReleaseStaticIpCommand(output, context);
    };
    return ReleaseStaticIpCommand;
}($Command));
export { ReleaseStaticIpCommand };
//# sourceMappingURL=ReleaseStaticIpCommand.js.map