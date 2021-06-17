import { __extends } from "tslib";
import { RevokeFlowEntitlementRequest, RevokeFlowEntitlementResponse } from "../models/models_0";
import { deserializeAws_restJson1RevokeFlowEntitlementCommand, serializeAws_restJson1RevokeFlowEntitlementCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Revokes an entitlement from a flow. Once an entitlement is revoked, the content becomes unavailable to the subscriber and the associated output is removed.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, RevokeFlowEntitlementCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, RevokeFlowEntitlementCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * const client = new MediaConnectClient(config);
 * const command = new RevokeFlowEntitlementCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RevokeFlowEntitlementCommandInput} for command's `input` shape.
 * @see {@link RevokeFlowEntitlementCommandOutput} for command's `response` shape.
 * @see {@link MediaConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RevokeFlowEntitlementCommand = /** @class */ (function (_super) {
    __extends(RevokeFlowEntitlementCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RevokeFlowEntitlementCommand(input) {
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
    RevokeFlowEntitlementCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaConnectClient";
        var commandName = "RevokeFlowEntitlementCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RevokeFlowEntitlementRequest.filterSensitiveLog,
            outputFilterSensitiveLog: RevokeFlowEntitlementResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RevokeFlowEntitlementCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1RevokeFlowEntitlementCommand(input, context);
    };
    RevokeFlowEntitlementCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1RevokeFlowEntitlementCommand(output, context);
    };
    return RevokeFlowEntitlementCommand;
}($Command));
export { RevokeFlowEntitlementCommand };
//# sourceMappingURL=RevokeFlowEntitlementCommand.js.map