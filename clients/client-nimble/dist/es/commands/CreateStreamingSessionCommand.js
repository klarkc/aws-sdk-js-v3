import { __extends } from "tslib";
import { CreateStreamingSessionRequest, CreateStreamingSessionResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateStreamingSessionCommand, serializeAws_restJson1CreateStreamingSessionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a streaming session in a studio.</p> <p>After invoking this operation, you must poll GetStreamingSession until the streaming session is in state READY.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, CreateStreamingSessionCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, CreateStreamingSessionCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const command = new CreateStreamingSessionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateStreamingSessionCommandInput} for command's `input` shape.
 * @see {@link CreateStreamingSessionCommandOutput} for command's `response` shape.
 * @see {@link NimbleClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateStreamingSessionCommand = /** @class */ (function (_super) {
    __extends(CreateStreamingSessionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateStreamingSessionCommand(input) {
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
    CreateStreamingSessionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "NimbleClient";
        var commandName = "CreateStreamingSessionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateStreamingSessionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateStreamingSessionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateStreamingSessionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateStreamingSessionCommand(input, context);
    };
    CreateStreamingSessionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateStreamingSessionCommand(output, context);
    };
    return CreateStreamingSessionCommand;
}($Command));
export { CreateStreamingSessionCommand };
//# sourceMappingURL=CreateStreamingSessionCommand.js.map