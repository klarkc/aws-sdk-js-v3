import { __extends } from "tslib";
import { PutEmailIdentityDkimAttributesRequest, PutEmailIdentityDkimAttributesResponse } from "../models/models_0";
import { deserializeAws_restJson1PutEmailIdentityDkimAttributesCommand, serializeAws_restJson1PutEmailIdentityDkimAttributesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Used to enable or disable DKIM authentication for an email identity.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointEmailClient, PutEmailIdentityDkimAttributesCommand } from "@aws-sdk/client-pinpoint-email"; // ES Modules import
 * // const { PinpointEmailClient, PutEmailIdentityDkimAttributesCommand } = require("@aws-sdk/client-pinpoint-email"); // CommonJS import
 * const client = new PinpointEmailClient(config);
 * const command = new PutEmailIdentityDkimAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutEmailIdentityDkimAttributesCommandInput} for command's `input` shape.
 * @see {@link PutEmailIdentityDkimAttributesCommandOutput} for command's `response` shape.
 * @see {@link PinpointEmailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutEmailIdentityDkimAttributesCommand = /** @class */ (function (_super) {
    __extends(PutEmailIdentityDkimAttributesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutEmailIdentityDkimAttributesCommand(input) {
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
    PutEmailIdentityDkimAttributesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointEmailClient";
        var commandName = "PutEmailIdentityDkimAttributesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutEmailIdentityDkimAttributesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PutEmailIdentityDkimAttributesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutEmailIdentityDkimAttributesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1PutEmailIdentityDkimAttributesCommand(input, context);
    };
    PutEmailIdentityDkimAttributesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1PutEmailIdentityDkimAttributesCommand(output, context);
    };
    return PutEmailIdentityDkimAttributesCommand;
}($Command));
export { PutEmailIdentityDkimAttributesCommand };
//# sourceMappingURL=PutEmailIdentityDkimAttributesCommand.js.map