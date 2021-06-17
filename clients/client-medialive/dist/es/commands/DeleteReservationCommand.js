import { __extends } from "tslib";
import { DeleteReservationRequest, DeleteReservationResponse } from "../models/models_1";
import { deserializeAws_restJson1DeleteReservationCommand, serializeAws_restJson1DeleteReservationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Delete an expired reservation.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, DeleteReservationCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, DeleteReservationCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const command = new DeleteReservationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteReservationCommandInput} for command's `input` shape.
 * @see {@link DeleteReservationCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteReservationCommand = /** @class */ (function (_super) {
    __extends(DeleteReservationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteReservationCommand(input) {
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
    DeleteReservationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaLiveClient";
        var commandName = "DeleteReservationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteReservationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteReservationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteReservationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteReservationCommand(input, context);
    };
    DeleteReservationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteReservationCommand(output, context);
    };
    return DeleteReservationCommand;
}($Command));
export { DeleteReservationCommand };
//# sourceMappingURL=DeleteReservationCommand.js.map