import { __extends } from "tslib";
import { UntagStreamInput, UntagStreamOutput } from "../models/models_0";
import { deserializeAws_restJson1UntagStreamCommand, serializeAws_restJson1UntagStreamCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes one or more tags from a stream. In the request, specify only a tag key or
 *             keys; don't specify the value. If you specify a tag key that does not exist, it's
 *             ignored.</p>
 *         <p>In the request, you must provide the <code>StreamName</code> or
 *                 <code>StreamARN</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisVideoClient, UntagStreamCommand } from "@aws-sdk/client-kinesis-video"; // ES Modules import
 * // const { KinesisVideoClient, UntagStreamCommand } = require("@aws-sdk/client-kinesis-video"); // CommonJS import
 * const client = new KinesisVideoClient(config);
 * const command = new UntagStreamCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UntagStreamCommandInput} for command's `input` shape.
 * @see {@link UntagStreamCommandOutput} for command's `response` shape.
 * @see {@link KinesisVideoClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UntagStreamCommand = /** @class */ (function (_super) {
    __extends(UntagStreamCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UntagStreamCommand(input) {
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
    UntagStreamCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KinesisVideoClient";
        var commandName = "UntagStreamCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UntagStreamInput.filterSensitiveLog,
            outputFilterSensitiveLog: UntagStreamOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UntagStreamCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UntagStreamCommand(input, context);
    };
    UntagStreamCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UntagStreamCommand(output, context);
    };
    return UntagStreamCommand;
}($Command));
export { UntagStreamCommand };
//# sourceMappingURL=UntagStreamCommand.js.map