import { __extends } from "tslib";
import { AttachStaticIpRequest, AttachStaticIpResult } from "../models/models_0";
import { deserializeAws_json1_1AttachStaticIpCommand, serializeAws_json1_1AttachStaticIpCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Attaches a static IP address to a specific Amazon Lightsail instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, AttachStaticIpCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, AttachStaticIpCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new AttachStaticIpCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AttachStaticIpCommandInput} for command's `input` shape.
 * @see {@link AttachStaticIpCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AttachStaticIpCommand = /** @class */ (function (_super) {
    __extends(AttachStaticIpCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AttachStaticIpCommand(input) {
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
    AttachStaticIpCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "AttachStaticIpCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AttachStaticIpRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AttachStaticIpResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AttachStaticIpCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1AttachStaticIpCommand(input, context);
    };
    AttachStaticIpCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1AttachStaticIpCommand(output, context);
    };
    return AttachStaticIpCommand;
}($Command));
export { AttachStaticIpCommand };
//# sourceMappingURL=AttachStaticIpCommand.js.map