import { __extends } from "tslib";
import { ContactIdResponse, ReserveContactRequest } from "../models/models_0";
import { deserializeAws_restJson1ReserveContactCommand, serializeAws_restJson1ReserveContactCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Reserves a contact using specified parameters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GroundStationClient, ReserveContactCommand } from "@aws-sdk/client-groundstation"; // ES Modules import
 * // const { GroundStationClient, ReserveContactCommand } = require("@aws-sdk/client-groundstation"); // CommonJS import
 * const client = new GroundStationClient(config);
 * const command = new ReserveContactCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ReserveContactCommandInput} for command's `input` shape.
 * @see {@link ReserveContactCommandOutput} for command's `response` shape.
 * @see {@link GroundStationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ReserveContactCommand = /** @class */ (function (_super) {
    __extends(ReserveContactCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ReserveContactCommand(input) {
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
    ReserveContactCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GroundStationClient";
        var commandName = "ReserveContactCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ReserveContactRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ContactIdResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ReserveContactCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ReserveContactCommand(input, context);
    };
    ReserveContactCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ReserveContactCommand(output, context);
    };
    return ReserveContactCommand;
}($Command));
export { ReserveContactCommand };
//# sourceMappingURL=ReserveContactCommand.js.map