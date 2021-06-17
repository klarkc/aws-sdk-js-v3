import { __extends } from "tslib";
import { RemoveAttributesRequest, RemoveAttributesResponse } from "../models/models_1";
import { deserializeAws_restJson1RemoveAttributesCommand, serializeAws_restJson1RemoveAttributesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes one or more attributes, of the same attribute type, from all the endpoints that are associated with an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, RemoveAttributesCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, RemoveAttributesCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new RemoveAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RemoveAttributesCommandInput} for command's `input` shape.
 * @see {@link RemoveAttributesCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RemoveAttributesCommand = /** @class */ (function (_super) {
    __extends(RemoveAttributesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RemoveAttributesCommand(input) {
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
    RemoveAttributesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointClient";
        var commandName = "RemoveAttributesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RemoveAttributesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: RemoveAttributesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RemoveAttributesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1RemoveAttributesCommand(input, context);
    };
    RemoveAttributesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1RemoveAttributesCommand(output, context);
    };
    return RemoveAttributesCommand;
}($Command));
export { RemoveAttributesCommand };
//# sourceMappingURL=RemoveAttributesCommand.js.map