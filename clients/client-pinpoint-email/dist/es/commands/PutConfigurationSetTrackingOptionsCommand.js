import { __extends } from "tslib";
import { PutConfigurationSetTrackingOptionsRequest, PutConfigurationSetTrackingOptionsResponse, } from "../models/models_0";
import { deserializeAws_restJson1PutConfigurationSetTrackingOptionsCommand, serializeAws_restJson1PutConfigurationSetTrackingOptionsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Specify a custom domain to use for open and click tracking elements in email that you
 *             send using Amazon Pinpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointEmailClient, PutConfigurationSetTrackingOptionsCommand } from "@aws-sdk/client-pinpoint-email"; // ES Modules import
 * // const { PinpointEmailClient, PutConfigurationSetTrackingOptionsCommand } = require("@aws-sdk/client-pinpoint-email"); // CommonJS import
 * const client = new PinpointEmailClient(config);
 * const command = new PutConfigurationSetTrackingOptionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutConfigurationSetTrackingOptionsCommandInput} for command's `input` shape.
 * @see {@link PutConfigurationSetTrackingOptionsCommandOutput} for command's `response` shape.
 * @see {@link PinpointEmailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutConfigurationSetTrackingOptionsCommand = /** @class */ (function (_super) {
    __extends(PutConfigurationSetTrackingOptionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutConfigurationSetTrackingOptionsCommand(input) {
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
    PutConfigurationSetTrackingOptionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointEmailClient";
        var commandName = "PutConfigurationSetTrackingOptionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutConfigurationSetTrackingOptionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PutConfigurationSetTrackingOptionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutConfigurationSetTrackingOptionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1PutConfigurationSetTrackingOptionsCommand(input, context);
    };
    PutConfigurationSetTrackingOptionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1PutConfigurationSetTrackingOptionsCommand(output, context);
    };
    return PutConfigurationSetTrackingOptionsCommand;
}($Command));
export { PutConfigurationSetTrackingOptionsCommand };
//# sourceMappingURL=PutConfigurationSetTrackingOptionsCommand.js.map