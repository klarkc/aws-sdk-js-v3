import { __extends } from "tslib";
import { UpdateFlowOutputRequest, UpdateFlowOutputResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdateFlowOutputCommand, serializeAws_restJson1UpdateFlowOutputCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Updates an existing flow output.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, UpdateFlowOutputCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, UpdateFlowOutputCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * const client = new MediaConnectClient(config);
 * const command = new UpdateFlowOutputCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateFlowOutputCommandInput} for command's `input` shape.
 * @see {@link UpdateFlowOutputCommandOutput} for command's `response` shape.
 * @see {@link MediaConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateFlowOutputCommand = /** @class */ (function (_super) {
    __extends(UpdateFlowOutputCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateFlowOutputCommand(input) {
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
    UpdateFlowOutputCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaConnectClient";
        var commandName = "UpdateFlowOutputCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateFlowOutputRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateFlowOutputResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateFlowOutputCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateFlowOutputCommand(input, context);
    };
    UpdateFlowOutputCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateFlowOutputCommand(output, context);
    };
    return UpdateFlowOutputCommand;
}($Command));
export { UpdateFlowOutputCommand };
//# sourceMappingURL=UpdateFlowOutputCommand.js.map