import { __extends } from "tslib";
import { UpdateFlowEntitlementRequest, UpdateFlowEntitlementResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdateFlowEntitlementCommand, serializeAws_restJson1UpdateFlowEntitlementCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * You can change an entitlement's description, subscribers, and encryption. If you change the subscribers, the service will remove the outputs that are are used by the subscribers that are removed.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, UpdateFlowEntitlementCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, UpdateFlowEntitlementCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * const client = new MediaConnectClient(config);
 * const command = new UpdateFlowEntitlementCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateFlowEntitlementCommandInput} for command's `input` shape.
 * @see {@link UpdateFlowEntitlementCommandOutput} for command's `response` shape.
 * @see {@link MediaConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateFlowEntitlementCommand = /** @class */ (function (_super) {
    __extends(UpdateFlowEntitlementCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateFlowEntitlementCommand(input) {
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
    UpdateFlowEntitlementCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaConnectClient";
        var commandName = "UpdateFlowEntitlementCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateFlowEntitlementRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateFlowEntitlementResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateFlowEntitlementCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateFlowEntitlementCommand(input, context);
    };
    UpdateFlowEntitlementCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateFlowEntitlementCommand(output, context);
    };
    return UpdateFlowEntitlementCommand;
}($Command));
export { UpdateFlowEntitlementCommand };
//# sourceMappingURL=UpdateFlowEntitlementCommand.js.map