import { __extends } from "tslib";
import { DescribeReservationRequest, DescribeReservationResponse } from "../models/models_1";
import { deserializeAws_restJson1DescribeReservationCommand, serializeAws_restJson1DescribeReservationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Get details for a reservation.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, DescribeReservationCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, DescribeReservationCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const command = new DescribeReservationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeReservationCommandInput} for command's `input` shape.
 * @see {@link DescribeReservationCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeReservationCommand = /** @class */ (function (_super) {
    __extends(DescribeReservationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeReservationCommand(input) {
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
    DescribeReservationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaLiveClient";
        var commandName = "DescribeReservationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeReservationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeReservationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeReservationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeReservationCommand(input, context);
    };
    DescribeReservationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeReservationCommand(output, context);
    };
    return DescribeReservationCommand;
}($Command));
export { DescribeReservationCommand };
//# sourceMappingURL=DescribeReservationCommand.js.map