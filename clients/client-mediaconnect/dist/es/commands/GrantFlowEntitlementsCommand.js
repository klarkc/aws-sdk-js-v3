import { __extends } from "tslib";
import { GrantFlowEntitlementsRequest, GrantFlowEntitlementsResponse } from "../models/models_0";
import { deserializeAws_restJson1GrantFlowEntitlementsCommand, serializeAws_restJson1GrantFlowEntitlementsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Grants entitlements to an existing flow.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, GrantFlowEntitlementsCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, GrantFlowEntitlementsCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * const client = new MediaConnectClient(config);
 * const command = new GrantFlowEntitlementsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GrantFlowEntitlementsCommandInput} for command's `input` shape.
 * @see {@link GrantFlowEntitlementsCommandOutput} for command's `response` shape.
 * @see {@link MediaConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GrantFlowEntitlementsCommand = /** @class */ (function (_super) {
    __extends(GrantFlowEntitlementsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GrantFlowEntitlementsCommand(input) {
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
    GrantFlowEntitlementsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaConnectClient";
        var commandName = "GrantFlowEntitlementsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GrantFlowEntitlementsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GrantFlowEntitlementsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GrantFlowEntitlementsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GrantFlowEntitlementsCommand(input, context);
    };
    GrantFlowEntitlementsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GrantFlowEntitlementsCommand(output, context);
    };
    return GrantFlowEntitlementsCommand;
}($Command));
export { GrantFlowEntitlementsCommand };
//# sourceMappingURL=GrantFlowEntitlementsCommand.js.map