import { __extends } from "tslib";
import { ListTagsForResourceRequest, ListTagsForResourceResponse } from "../models/models_0";
import { deserializeAws_json1_1ListTagsForResourceCommand, serializeAws_json1_1ListTagsForResourceCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets a list of tags associated with a specified resource. Indexes,
 *       FAQs, and data sources can have tags associated with them.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, ListTagsForResourceCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, ListTagsForResourceCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const command = new ListTagsForResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTagsForResourceCommandInput} for command's `input` shape.
 * @see {@link ListTagsForResourceCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for command's `input` shape.
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
        var clientName = "KendraClient";
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
        return serializeAws_json1_1ListTagsForResourceCommand(input, context);
    };
    ListTagsForResourceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListTagsForResourceCommand(output, context);
    };
    return ListTagsForResourceCommand;
}($Command));
export { ListTagsForResourceCommand };
//# sourceMappingURL=ListTagsForResourceCommand.js.map