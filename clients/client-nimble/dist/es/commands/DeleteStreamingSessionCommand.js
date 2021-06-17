import { __extends } from "tslib";
import { DeleteStreamingSessionRequest, DeleteStreamingSessionResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteStreamingSessionCommand, serializeAws_restJson1DeleteStreamingSessionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes streaming session resource.</p> <p>After invoking this operation, use GetStreamingSession to poll the resource until it transitions to a DELETED state.</p> <p>A streaming session will count against your streaming session quota until it is marked DELETED.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, DeleteStreamingSessionCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, DeleteStreamingSessionCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const command = new DeleteStreamingSessionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteStreamingSessionCommandInput} for command's `input` shape.
 * @see {@link DeleteStreamingSessionCommandOutput} for command's `response` shape.
 * @see {@link NimbleClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteStreamingSessionCommand = /** @class */ (function (_super) {
    __extends(DeleteStreamingSessionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteStreamingSessionCommand(input) {
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
    DeleteStreamingSessionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "NimbleClient";
        var commandName = "DeleteStreamingSessionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteStreamingSessionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteStreamingSessionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteStreamingSessionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteStreamingSessionCommand(input, context);
    };
    DeleteStreamingSessionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteStreamingSessionCommand(output, context);
    };
    return DeleteStreamingSessionCommand;
}($Command));
export { DeleteStreamingSessionCommand };
//# sourceMappingURL=DeleteStreamingSessionCommand.js.map