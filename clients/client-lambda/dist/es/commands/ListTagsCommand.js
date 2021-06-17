import { __extends } from "tslib";
import { ListTagsRequest, ListTagsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListTagsCommand, serializeAws_restJson1ListTagsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/tagging.html">tags</a>. You can
 *       also view tags with <a>GetFunction</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, ListTagsCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, ListTagsCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new ListTagsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTagsCommandInput} for command's `input` shape.
 * @see {@link ListTagsCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListTagsCommand = /** @class */ (function (_super) {
    __extends(ListTagsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListTagsCommand(input) {
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
    ListTagsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LambdaClient";
        var commandName = "ListTagsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListTagsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListTagsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListTagsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListTagsCommand(input, context);
    };
    ListTagsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListTagsCommand(output, context);
    };
    return ListTagsCommand;
}($Command));
export { ListTagsCommand };
//# sourceMappingURL=ListTagsCommand.js.map