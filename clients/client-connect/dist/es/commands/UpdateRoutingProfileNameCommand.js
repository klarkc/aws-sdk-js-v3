import { __extends } from "tslib";
import { UpdateRoutingProfileNameRequest } from "../models/models_0";
import { deserializeAws_restJson1UpdateRoutingProfileNameCommand, serializeAws_restJson1UpdateRoutingProfileNameCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the name and description of a routing profile. The request accepts the following data in JSON format.
 *    At least <code>Name</code> or <code>Description</code> must be provided.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateRoutingProfileNameCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateRoutingProfileNameCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new UpdateRoutingProfileNameCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateRoutingProfileNameCommandInput} for command's `input` shape.
 * @see {@link UpdateRoutingProfileNameCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateRoutingProfileNameCommand = /** @class */ (function (_super) {
    __extends(UpdateRoutingProfileNameCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateRoutingProfileNameCommand(input) {
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
    UpdateRoutingProfileNameCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConnectClient";
        var commandName = "UpdateRoutingProfileNameCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateRoutingProfileNameRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateRoutingProfileNameCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateRoutingProfileNameCommand(input, context);
    };
    UpdateRoutingProfileNameCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateRoutingProfileNameCommand(output, context);
    };
    return UpdateRoutingProfileNameCommand;
}($Command));
export { UpdateRoutingProfileNameCommand };
//# sourceMappingURL=UpdateRoutingProfileNameCommand.js.map