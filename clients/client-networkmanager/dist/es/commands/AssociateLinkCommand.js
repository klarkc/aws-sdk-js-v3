import { __extends } from "tslib";
import { AssociateLinkRequest, AssociateLinkResponse } from "../models/models_0";
import { deserializeAws_restJson1AssociateLinkCommand, serializeAws_restJson1AssociateLinkCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Associates a link to a device. A device can be associated to multiple links and a link can be associated to multiple devices. The device and link must be in the same global network and the same site.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, AssociateLinkCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, AssociateLinkCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * const client = new NetworkManagerClient(config);
 * const command = new AssociateLinkCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateLinkCommandInput} for command's `input` shape.
 * @see {@link AssociateLinkCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AssociateLinkCommand = /** @class */ (function (_super) {
    __extends(AssociateLinkCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AssociateLinkCommand(input) {
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
    AssociateLinkCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "NetworkManagerClient";
        var commandName = "AssociateLinkCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AssociateLinkRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AssociateLinkResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AssociateLinkCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1AssociateLinkCommand(input, context);
    };
    AssociateLinkCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1AssociateLinkCommand(output, context);
    };
    return AssociateLinkCommand;
}($Command));
export { AssociateLinkCommand };
//# sourceMappingURL=AssociateLinkCommand.js.map