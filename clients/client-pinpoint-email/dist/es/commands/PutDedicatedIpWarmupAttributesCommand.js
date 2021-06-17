import { __extends } from "tslib";
import { PutDedicatedIpWarmupAttributesRequest, PutDedicatedIpWarmupAttributesResponse } from "../models/models_0";
import { deserializeAws_restJson1PutDedicatedIpWarmupAttributesCommand, serializeAws_restJson1PutDedicatedIpWarmupAttributesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p></p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointEmailClient, PutDedicatedIpWarmupAttributesCommand } from "@aws-sdk/client-pinpoint-email"; // ES Modules import
 * // const { PinpointEmailClient, PutDedicatedIpWarmupAttributesCommand } = require("@aws-sdk/client-pinpoint-email"); // CommonJS import
 * const client = new PinpointEmailClient(config);
 * const command = new PutDedicatedIpWarmupAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutDedicatedIpWarmupAttributesCommandInput} for command's `input` shape.
 * @see {@link PutDedicatedIpWarmupAttributesCommandOutput} for command's `response` shape.
 * @see {@link PinpointEmailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutDedicatedIpWarmupAttributesCommand = /** @class */ (function (_super) {
    __extends(PutDedicatedIpWarmupAttributesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutDedicatedIpWarmupAttributesCommand(input) {
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
    PutDedicatedIpWarmupAttributesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointEmailClient";
        var commandName = "PutDedicatedIpWarmupAttributesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutDedicatedIpWarmupAttributesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PutDedicatedIpWarmupAttributesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutDedicatedIpWarmupAttributesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1PutDedicatedIpWarmupAttributesCommand(input, context);
    };
    PutDedicatedIpWarmupAttributesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1PutDedicatedIpWarmupAttributesCommand(output, context);
    };
    return PutDedicatedIpWarmupAttributesCommand;
}($Command));
export { PutDedicatedIpWarmupAttributesCommand };
//# sourceMappingURL=PutDedicatedIpWarmupAttributesCommand.js.map