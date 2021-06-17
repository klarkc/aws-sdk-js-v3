import { __extends } from "tslib";
import { ListTagsForStreamInput, ListTagsForStreamOutput } from "../models/models_0";
import { deserializeAws_restJson1ListTagsForStreamCommand, serializeAws_restJson1ListTagsForStreamCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of tags associated with the specified stream.</p>
 *         <p>In the request, you must specify either the <code>StreamName</code> or the
 *                 <code>StreamARN</code>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisVideoClient, ListTagsForStreamCommand } from "@aws-sdk/client-kinesis-video"; // ES Modules import
 * // const { KinesisVideoClient, ListTagsForStreamCommand } = require("@aws-sdk/client-kinesis-video"); // CommonJS import
 * const client = new KinesisVideoClient(config);
 * const command = new ListTagsForStreamCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTagsForStreamCommandInput} for command's `input` shape.
 * @see {@link ListTagsForStreamCommandOutput} for command's `response` shape.
 * @see {@link KinesisVideoClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListTagsForStreamCommand = /** @class */ (function (_super) {
    __extends(ListTagsForStreamCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListTagsForStreamCommand(input) {
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
    ListTagsForStreamCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KinesisVideoClient";
        var commandName = "ListTagsForStreamCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListTagsForStreamInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListTagsForStreamOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListTagsForStreamCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListTagsForStreamCommand(input, context);
    };
    ListTagsForStreamCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListTagsForStreamCommand(output, context);
    };
    return ListTagsForStreamCommand;
}($Command));
export { ListTagsForStreamCommand };
//# sourceMappingURL=ListTagsForStreamCommand.js.map