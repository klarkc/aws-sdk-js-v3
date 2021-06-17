import { __extends } from "tslib";
import { CancelContactRequest, ContactIdResponse } from "../models/models_0";
import { deserializeAws_restJson1CancelContactCommand, serializeAws_restJson1CancelContactCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Cancels a contact with a specified contact ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GroundStationClient, CancelContactCommand } from "@aws-sdk/client-groundstation"; // ES Modules import
 * // const { GroundStationClient, CancelContactCommand } = require("@aws-sdk/client-groundstation"); // CommonJS import
 * const client = new GroundStationClient(config);
 * const command = new CancelContactCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelContactCommandInput} for command's `input` shape.
 * @see {@link CancelContactCommandOutput} for command's `response` shape.
 * @see {@link GroundStationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CancelContactCommand = /** @class */ (function (_super) {
    __extends(CancelContactCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CancelContactCommand(input) {
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
    CancelContactCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GroundStationClient";
        var commandName = "CancelContactCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CancelContactRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ContactIdResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CancelContactCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CancelContactCommand(input, context);
    };
    CancelContactCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CancelContactCommand(output, context);
    };
    return CancelContactCommand;
}($Command));
export { CancelContactCommand };
//# sourceMappingURL=CancelContactCommand.js.map