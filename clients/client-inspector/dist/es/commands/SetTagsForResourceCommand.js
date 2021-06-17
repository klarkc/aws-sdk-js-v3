import { __extends } from "tslib";
import { SetTagsForResourceRequest } from "../models/models_0";
import { deserializeAws_json1_1SetTagsForResourceCommand, serializeAws_json1_1SetTagsForResourceCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Sets tags (key and value pairs) to the assessment template that is specified by the
 *          ARN of the assessment template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, SetTagsForResourceCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, SetTagsForResourceCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * const client = new InspectorClient(config);
 * const command = new SetTagsForResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SetTagsForResourceCommandInput} for command's `input` shape.
 * @see {@link SetTagsForResourceCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var SetTagsForResourceCommand = /** @class */ (function (_super) {
    __extends(SetTagsForResourceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function SetTagsForResourceCommand(input) {
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
    SetTagsForResourceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "InspectorClient";
        var commandName = "SetTagsForResourceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: SetTagsForResourceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    SetTagsForResourceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1SetTagsForResourceCommand(input, context);
    };
    SetTagsForResourceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1SetTagsForResourceCommand(output, context);
    };
    return SetTagsForResourceCommand;
}($Command));
export { SetTagsForResourceCommand };
//# sourceMappingURL=SetTagsForResourceCommand.js.map