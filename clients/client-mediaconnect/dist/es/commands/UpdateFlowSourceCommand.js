import { __extends } from "tslib";
import { UpdateFlowSourceRequest, UpdateFlowSourceResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdateFlowSourceCommand, serializeAws_restJson1UpdateFlowSourceCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Updates the source of a flow.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, UpdateFlowSourceCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, UpdateFlowSourceCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * const client = new MediaConnectClient(config);
 * const command = new UpdateFlowSourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateFlowSourceCommandInput} for command's `input` shape.
 * @see {@link UpdateFlowSourceCommandOutput} for command's `response` shape.
 * @see {@link MediaConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateFlowSourceCommand = /** @class */ (function (_super) {
    __extends(UpdateFlowSourceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateFlowSourceCommand(input) {
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
    UpdateFlowSourceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaConnectClient";
        var commandName = "UpdateFlowSourceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateFlowSourceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateFlowSourceResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateFlowSourceCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateFlowSourceCommand(input, context);
    };
    UpdateFlowSourceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateFlowSourceCommand(output, context);
    };
    return UpdateFlowSourceCommand;
}($Command));
export { UpdateFlowSourceCommand };
//# sourceMappingURL=UpdateFlowSourceCommand.js.map