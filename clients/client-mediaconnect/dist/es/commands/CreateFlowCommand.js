import { __extends } from "tslib";
import { CreateFlowRequest, CreateFlowResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateFlowCommand, serializeAws_restJson1CreateFlowCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Creates a new flow. The request must include one source. The request optionally can include outputs (up to 50) and entitlements (up to 50).
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, CreateFlowCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, CreateFlowCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * const client = new MediaConnectClient(config);
 * const command = new CreateFlowCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateFlowCommandInput} for command's `input` shape.
 * @see {@link CreateFlowCommandOutput} for command's `response` shape.
 * @see {@link MediaConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateFlowCommand = /** @class */ (function (_super) {
    __extends(CreateFlowCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateFlowCommand(input) {
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
    CreateFlowCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaConnectClient";
        var commandName = "CreateFlowCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateFlowRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateFlowResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateFlowCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateFlowCommand(input, context);
    };
    CreateFlowCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateFlowCommand(output, context);
    };
    return CreateFlowCommand;
}($Command));
export { CreateFlowCommand };
//# sourceMappingURL=CreateFlowCommand.js.map