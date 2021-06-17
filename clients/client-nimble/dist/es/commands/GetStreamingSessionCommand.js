import { __extends } from "tslib";
import { GetStreamingSessionRequest, GetStreamingSessionResponse } from "../models/models_0";
import { deserializeAws_restJson1GetStreamingSessionCommand, serializeAws_restJson1GetStreamingSessionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets StreamingSession resource.</p> <p>Invoke this operation to poll for a streaming session state while creating or deleting a session.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, GetStreamingSessionCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, GetStreamingSessionCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const command = new GetStreamingSessionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetStreamingSessionCommandInput} for command's `input` shape.
 * @see {@link GetStreamingSessionCommandOutput} for command's `response` shape.
 * @see {@link NimbleClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetStreamingSessionCommand = /** @class */ (function (_super) {
    __extends(GetStreamingSessionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetStreamingSessionCommand(input) {
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
    GetStreamingSessionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "NimbleClient";
        var commandName = "GetStreamingSessionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetStreamingSessionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetStreamingSessionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetStreamingSessionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetStreamingSessionCommand(input, context);
    };
    GetStreamingSessionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetStreamingSessionCommand(output, context);
    };
    return GetStreamingSessionCommand;
}($Command));
export { GetStreamingSessionCommand };
//# sourceMappingURL=GetStreamingSessionCommand.js.map