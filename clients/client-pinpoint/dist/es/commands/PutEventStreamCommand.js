import { __extends } from "tslib";
import { PutEventStreamRequest, PutEventStreamResponse } from "../models/models_1";
import { deserializeAws_restJson1PutEventStreamCommand, serializeAws_restJson1PutEventStreamCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new event stream for an application or updates the settings of an existing event stream for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, PutEventStreamCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, PutEventStreamCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new PutEventStreamCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutEventStreamCommandInput} for command's `input` shape.
 * @see {@link PutEventStreamCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutEventStreamCommand = /** @class */ (function (_super) {
    __extends(PutEventStreamCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutEventStreamCommand(input) {
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
    PutEventStreamCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointClient";
        var commandName = "PutEventStreamCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutEventStreamRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PutEventStreamResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutEventStreamCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1PutEventStreamCommand(input, context);
    };
    PutEventStreamCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1PutEventStreamCommand(output, context);
    };
    return PutEventStreamCommand;
}($Command));
export { PutEventStreamCommand };
//# sourceMappingURL=PutEventStreamCommand.js.map