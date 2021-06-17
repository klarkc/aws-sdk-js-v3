import { __extends } from "tslib";
import { ListCrawlersRequest, ListCrawlersResponse } from "../models/models_1";
import { deserializeAws_json1_1ListCrawlersCommand, serializeAws_json1_1ListCrawlersCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the names of all crawler resources in this AWS account, or the
 *       resources with the specified tag. This operation allows you to see which
 *       resources are available in your account, and their names.</p>
 *
 *          <p>This operation takes the optional <code>Tags</code> field, which you can use as a filter on
 *       the response so that tagged resources can be retrieved as a group. If you choose to use tags
 *       filtering, only resources with the tag are retrieved.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, ListCrawlersCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, ListCrawlersCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new ListCrawlersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListCrawlersCommandInput} for command's `input` shape.
 * @see {@link ListCrawlersCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListCrawlersCommand = /** @class */ (function (_super) {
    __extends(ListCrawlersCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListCrawlersCommand(input) {
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
    ListCrawlersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "ListCrawlersCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListCrawlersRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListCrawlersResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListCrawlersCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListCrawlersCommand(input, context);
    };
    ListCrawlersCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListCrawlersCommand(output, context);
    };
    return ListCrawlersCommand;
}($Command));
export { ListCrawlersCommand };
//# sourceMappingURL=ListCrawlersCommand.js.map