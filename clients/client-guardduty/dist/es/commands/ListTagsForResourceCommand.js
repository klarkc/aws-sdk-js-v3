import { __extends } from "tslib";
import { ListTagsForResourceRequest, ListTagsForResourceResponse } from "../models/models_0";
import { deserializeAws_restJson1ListTagsForResourceCommand, serializeAws_restJson1ListTagsForResourceCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists tags for a resource. Tagging is currently supported for detectors, finding filters,
 *       IP sets, and threat intel sets, with a limit of 50 tags per resource. When invoked, this
 *       operation returns all assigned tags for a given resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, ListTagsForResourceCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, ListTagsForResourceCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const command = new ListTagsForResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTagsForResourceCommandInput} for command's `input` shape.
 * @see {@link ListTagsForResourceCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListTagsForResourceCommand = /** @class */ (function (_super) {
    __extends(ListTagsForResourceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListTagsForResourceCommand(input) {
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
    ListTagsForResourceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GuardDutyClient";
        var commandName = "ListTagsForResourceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListTagsForResourceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListTagsForResourceResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListTagsForResourceCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListTagsForResourceCommand(input, context);
    };
    ListTagsForResourceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListTagsForResourceCommand(output, context);
    };
    return ListTagsForResourceCommand;
}($Command));
export { ListTagsForResourceCommand };
//# sourceMappingURL=ListTagsForResourceCommand.js.map