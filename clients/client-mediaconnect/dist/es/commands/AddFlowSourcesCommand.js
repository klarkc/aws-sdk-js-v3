import { __extends } from "tslib";
import { AddFlowSourcesRequest, AddFlowSourcesResponse } from "../models/models_0";
import { deserializeAws_restJson1AddFlowSourcesCommand, serializeAws_restJson1AddFlowSourcesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Adds Sources to flow
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, AddFlowSourcesCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, AddFlowSourcesCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * const client = new MediaConnectClient(config);
 * const command = new AddFlowSourcesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddFlowSourcesCommandInput} for command's `input` shape.
 * @see {@link AddFlowSourcesCommandOutput} for command's `response` shape.
 * @see {@link MediaConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AddFlowSourcesCommand = /** @class */ (function (_super) {
    __extends(AddFlowSourcesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AddFlowSourcesCommand(input) {
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
    AddFlowSourcesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaConnectClient";
        var commandName = "AddFlowSourcesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AddFlowSourcesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AddFlowSourcesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AddFlowSourcesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1AddFlowSourcesCommand(input, context);
    };
    AddFlowSourcesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1AddFlowSourcesCommand(output, context);
    };
    return AddFlowSourcesCommand;
}($Command));
export { AddFlowSourcesCommand };
//# sourceMappingURL=AddFlowSourcesCommand.js.map