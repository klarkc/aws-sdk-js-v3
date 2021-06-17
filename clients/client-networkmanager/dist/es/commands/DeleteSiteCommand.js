import { __extends } from "tslib";
import { DeleteSiteRequest, DeleteSiteResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteSiteCommand, serializeAws_restJson1DeleteSiteCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes an existing site. The site cannot be associated with any device or link.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, DeleteSiteCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, DeleteSiteCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * const client = new NetworkManagerClient(config);
 * const command = new DeleteSiteCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteSiteCommandInput} for command's `input` shape.
 * @see {@link DeleteSiteCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteSiteCommand = /** @class */ (function (_super) {
    __extends(DeleteSiteCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteSiteCommand(input) {
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
    DeleteSiteCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "NetworkManagerClient";
        var commandName = "DeleteSiteCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteSiteRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteSiteResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteSiteCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteSiteCommand(input, context);
    };
    DeleteSiteCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteSiteCommand(output, context);
    };
    return DeleteSiteCommand;
}($Command));
export { DeleteSiteCommand };
//# sourceMappingURL=DeleteSiteCommand.js.map