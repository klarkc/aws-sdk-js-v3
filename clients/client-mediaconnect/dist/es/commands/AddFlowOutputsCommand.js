import { __extends } from "tslib";
import { AddFlowOutputsRequest, AddFlowOutputsResponse } from "../models/models_0";
import { deserializeAws_restJson1AddFlowOutputsCommand, serializeAws_restJson1AddFlowOutputsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Adds outputs to an existing flow. You can create up to 50 outputs per flow.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, AddFlowOutputsCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, AddFlowOutputsCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * const client = new MediaConnectClient(config);
 * const command = new AddFlowOutputsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddFlowOutputsCommandInput} for command's `input` shape.
 * @see {@link AddFlowOutputsCommandOutput} for command's `response` shape.
 * @see {@link MediaConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AddFlowOutputsCommand = /** @class */ (function (_super) {
    __extends(AddFlowOutputsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AddFlowOutputsCommand(input) {
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
    AddFlowOutputsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaConnectClient";
        var commandName = "AddFlowOutputsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AddFlowOutputsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AddFlowOutputsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AddFlowOutputsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1AddFlowOutputsCommand(input, context);
    };
    AddFlowOutputsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1AddFlowOutputsCommand(output, context);
    };
    return AddFlowOutputsCommand;
}($Command));
export { AddFlowOutputsCommand };
//# sourceMappingURL=AddFlowOutputsCommand.js.map