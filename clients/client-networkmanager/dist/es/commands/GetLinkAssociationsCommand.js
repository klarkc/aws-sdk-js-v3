import { __extends } from "tslib";
import { GetLinkAssociationsRequest, GetLinkAssociationsResponse } from "../models/models_0";
import { deserializeAws_restJson1GetLinkAssociationsCommand, serializeAws_restJson1GetLinkAssociationsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets the link associations for a device or a link. Either the device ID or the link ID
 *             must be specified.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, GetLinkAssociationsCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, GetLinkAssociationsCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * const client = new NetworkManagerClient(config);
 * const command = new GetLinkAssociationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetLinkAssociationsCommandInput} for command's `input` shape.
 * @see {@link GetLinkAssociationsCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetLinkAssociationsCommand = /** @class */ (function (_super) {
    __extends(GetLinkAssociationsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetLinkAssociationsCommand(input) {
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
    GetLinkAssociationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "NetworkManagerClient";
        var commandName = "GetLinkAssociationsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetLinkAssociationsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetLinkAssociationsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetLinkAssociationsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetLinkAssociationsCommand(input, context);
    };
    GetLinkAssociationsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetLinkAssociationsCommand(output, context);
    };
    return GetLinkAssociationsCommand;
}($Command));
export { GetLinkAssociationsCommand };
//# sourceMappingURL=GetLinkAssociationsCommand.js.map