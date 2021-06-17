import { __extends } from "tslib";
import { UpdateQuickConnectNameRequest } from "../models/models_0";
import { deserializeAws_restJson1UpdateQuickConnectNameCommand, serializeAws_restJson1UpdateQuickConnectNameCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Updates the name and description of a quick connect. The request accepts the following data in JSON format. At least <code>Name</code> or <code>Description</code> must be provided.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateQuickConnectNameCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateQuickConnectNameCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new UpdateQuickConnectNameCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateQuickConnectNameCommandInput} for command's `input` shape.
 * @see {@link UpdateQuickConnectNameCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateQuickConnectNameCommand = /** @class */ (function (_super) {
    __extends(UpdateQuickConnectNameCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateQuickConnectNameCommand(input) {
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
    UpdateQuickConnectNameCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConnectClient";
        var commandName = "UpdateQuickConnectNameCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateQuickConnectNameRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateQuickConnectNameCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateQuickConnectNameCommand(input, context);
    };
    UpdateQuickConnectNameCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateQuickConnectNameCommand(output, context);
    };
    return UpdateQuickConnectNameCommand;
}($Command));
export { UpdateQuickConnectNameCommand };
//# sourceMappingURL=UpdateQuickConnectNameCommand.js.map