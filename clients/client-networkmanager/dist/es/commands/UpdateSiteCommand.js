import { __extends } from "tslib";
import { UpdateSiteRequest, UpdateSiteResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdateSiteCommand, serializeAws_restJson1UpdateSiteCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the information for an existing site. To remove information for any of the
 *             parameters, specify an empty string.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, UpdateSiteCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, UpdateSiteCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * const client = new NetworkManagerClient(config);
 * const command = new UpdateSiteCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateSiteCommandInput} for command's `input` shape.
 * @see {@link UpdateSiteCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateSiteCommand = /** @class */ (function (_super) {
    __extends(UpdateSiteCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateSiteCommand(input) {
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
    UpdateSiteCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "NetworkManagerClient";
        var commandName = "UpdateSiteCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateSiteRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateSiteResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateSiteCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateSiteCommand(input, context);
    };
    UpdateSiteCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateSiteCommand(output, context);
    };
    return UpdateSiteCommand;
}($Command));
export { UpdateSiteCommand };
//# sourceMappingURL=UpdateSiteCommand.js.map