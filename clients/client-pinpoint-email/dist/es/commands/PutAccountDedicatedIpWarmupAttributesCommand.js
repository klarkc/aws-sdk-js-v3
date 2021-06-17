import { __extends } from "tslib";
import { PutAccountDedicatedIpWarmupAttributesRequest, PutAccountDedicatedIpWarmupAttributesResponse, } from "../models/models_0";
import { deserializeAws_restJson1PutAccountDedicatedIpWarmupAttributesCommand, serializeAws_restJson1PutAccountDedicatedIpWarmupAttributesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Enable or disable the automatic warm-up feature for dedicated IP addresses.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointEmailClient, PutAccountDedicatedIpWarmupAttributesCommand } from "@aws-sdk/client-pinpoint-email"; // ES Modules import
 * // const { PinpointEmailClient, PutAccountDedicatedIpWarmupAttributesCommand } = require("@aws-sdk/client-pinpoint-email"); // CommonJS import
 * const client = new PinpointEmailClient(config);
 * const command = new PutAccountDedicatedIpWarmupAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutAccountDedicatedIpWarmupAttributesCommandInput} for command's `input` shape.
 * @see {@link PutAccountDedicatedIpWarmupAttributesCommandOutput} for command's `response` shape.
 * @see {@link PinpointEmailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutAccountDedicatedIpWarmupAttributesCommand = /** @class */ (function (_super) {
    __extends(PutAccountDedicatedIpWarmupAttributesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutAccountDedicatedIpWarmupAttributesCommand(input) {
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
    PutAccountDedicatedIpWarmupAttributesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointEmailClient";
        var commandName = "PutAccountDedicatedIpWarmupAttributesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutAccountDedicatedIpWarmupAttributesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PutAccountDedicatedIpWarmupAttributesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutAccountDedicatedIpWarmupAttributesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1PutAccountDedicatedIpWarmupAttributesCommand(input, context);
    };
    PutAccountDedicatedIpWarmupAttributesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1PutAccountDedicatedIpWarmupAttributesCommand(output, context);
    };
    return PutAccountDedicatedIpWarmupAttributesCommand;
}($Command));
export { PutAccountDedicatedIpWarmupAttributesCommand };
//# sourceMappingURL=PutAccountDedicatedIpWarmupAttributesCommand.js.map