import { __extends } from "tslib";
import { UpdateReservationRequest, UpdateReservationResponse } from "../models/models_1";
import { deserializeAws_restJson1UpdateReservationCommand, serializeAws_restJson1UpdateReservationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Update reservation.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, UpdateReservationCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, UpdateReservationCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const command = new UpdateReservationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateReservationCommandInput} for command's `input` shape.
 * @see {@link UpdateReservationCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateReservationCommand = /** @class */ (function (_super) {
    __extends(UpdateReservationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateReservationCommand(input) {
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
    UpdateReservationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaLiveClient";
        var commandName = "UpdateReservationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateReservationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateReservationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateReservationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateReservationCommand(input, context);
    };
    UpdateReservationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateReservationCommand(output, context);
    };
    return UpdateReservationCommand;
}($Command));
export { UpdateReservationCommand };
//# sourceMappingURL=UpdateReservationCommand.js.map