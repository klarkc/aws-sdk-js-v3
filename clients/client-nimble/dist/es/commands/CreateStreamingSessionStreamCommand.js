import { __extends } from "tslib";
import { CreateStreamingSessionStreamRequest, CreateStreamingSessionStreamResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateStreamingSessionStreamCommand, serializeAws_restJson1CreateStreamingSessionStreamCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a streaming session stream for a streaming session.</p> <p>After invoking this API, invoke GetStreamingSessionStream with the returned streamId to poll the resource until it is in state READY.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, CreateStreamingSessionStreamCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, CreateStreamingSessionStreamCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const command = new CreateStreamingSessionStreamCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateStreamingSessionStreamCommandInput} for command's `input` shape.
 * @see {@link CreateStreamingSessionStreamCommandOutput} for command's `response` shape.
 * @see {@link NimbleClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateStreamingSessionStreamCommand = /** @class */ (function (_super) {
    __extends(CreateStreamingSessionStreamCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateStreamingSessionStreamCommand(input) {
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
    CreateStreamingSessionStreamCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "NimbleClient";
        var commandName = "CreateStreamingSessionStreamCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateStreamingSessionStreamRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateStreamingSessionStreamResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateStreamingSessionStreamCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateStreamingSessionStreamCommand(input, context);
    };
    CreateStreamingSessionStreamCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateStreamingSessionStreamCommand(output, context);
    };
    return CreateStreamingSessionStreamCommand;
}($Command));
export { CreateStreamingSessionStreamCommand };
//# sourceMappingURL=CreateStreamingSessionStreamCommand.js.map