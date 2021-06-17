import { __extends } from "tslib";
import { RemoveFlowOutputRequest, RemoveFlowOutputResponse } from "../models/models_0";
import { deserializeAws_restJson1RemoveFlowOutputCommand, serializeAws_restJson1RemoveFlowOutputCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Removes an output from an existing flow. This request can be made only on an output that does not have an entitlement associated with it. If the output has an entitlement, you must revoke the entitlement instead. When an entitlement is revoked from a flow, the service automatically removes the associated output.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, RemoveFlowOutputCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, RemoveFlowOutputCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * const client = new MediaConnectClient(config);
 * const command = new RemoveFlowOutputCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RemoveFlowOutputCommandInput} for command's `input` shape.
 * @see {@link RemoveFlowOutputCommandOutput} for command's `response` shape.
 * @see {@link MediaConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RemoveFlowOutputCommand = /** @class */ (function (_super) {
    __extends(RemoveFlowOutputCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RemoveFlowOutputCommand(input) {
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
    RemoveFlowOutputCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaConnectClient";
        var commandName = "RemoveFlowOutputCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RemoveFlowOutputRequest.filterSensitiveLog,
            outputFilterSensitiveLog: RemoveFlowOutputResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RemoveFlowOutputCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1RemoveFlowOutputCommand(input, context);
    };
    RemoveFlowOutputCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1RemoveFlowOutputCommand(output, context);
    };
    return RemoveFlowOutputCommand;
}($Command));
export { RemoveFlowOutputCommand };
//# sourceMappingURL=RemoveFlowOutputCommand.js.map