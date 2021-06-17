import { __extends } from "tslib";
import { UpdateSegmentRequest, UpdateSegmentResponse } from "../models/models_1";
import { deserializeAws_restJson1UpdateSegmentCommand, serializeAws_restJson1UpdateSegmentCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new segment for an application or updates the configuration, dimension, and other settings for an existing segment that's associated with an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, UpdateSegmentCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, UpdateSegmentCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new UpdateSegmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateSegmentCommandInput} for command's `input` shape.
 * @see {@link UpdateSegmentCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateSegmentCommand = /** @class */ (function (_super) {
    __extends(UpdateSegmentCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateSegmentCommand(input) {
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
    UpdateSegmentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointClient";
        var commandName = "UpdateSegmentCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateSegmentRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateSegmentResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateSegmentCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateSegmentCommand(input, context);
    };
    UpdateSegmentCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateSegmentCommand(output, context);
    };
    return UpdateSegmentCommand;
}($Command));
export { UpdateSegmentCommand };
//# sourceMappingURL=UpdateSegmentCommand.js.map