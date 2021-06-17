import { __extends } from "tslib";
import { RemoveFlowSourceRequest, RemoveFlowSourceResponse } from "../models/models_0";
import { deserializeAws_restJson1RemoveFlowSourceCommand, serializeAws_restJson1RemoveFlowSourceCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Removes a source from an existing flow. This request can be made only if there is more than one source on the flow.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, RemoveFlowSourceCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, RemoveFlowSourceCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * const client = new MediaConnectClient(config);
 * const command = new RemoveFlowSourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RemoveFlowSourceCommandInput} for command's `input` shape.
 * @see {@link RemoveFlowSourceCommandOutput} for command's `response` shape.
 * @see {@link MediaConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RemoveFlowSourceCommand = /** @class */ (function (_super) {
    __extends(RemoveFlowSourceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RemoveFlowSourceCommand(input) {
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
    RemoveFlowSourceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaConnectClient";
        var commandName = "RemoveFlowSourceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RemoveFlowSourceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: RemoveFlowSourceResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RemoveFlowSourceCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1RemoveFlowSourceCommand(input, context);
    };
    RemoveFlowSourceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1RemoveFlowSourceCommand(output, context);
    };
    return RemoveFlowSourceCommand;
}($Command));
export { RemoveFlowSourceCommand };
//# sourceMappingURL=RemoveFlowSourceCommand.js.map