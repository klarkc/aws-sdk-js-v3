import { __extends } from "tslib";
import { ListVodSourcesRequest, ListVodSourcesResponse } from "../models/models_0";
import { deserializeAws_restJson1ListVodSourcesCommand, serializeAws_restJson1ListVodSourcesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists all the VOD sources in a source location.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, ListVodSourcesCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, ListVodSourcesCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * const client = new MediaTailorClient(config);
 * const command = new ListVodSourcesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListVodSourcesCommandInput} for command's `input` shape.
 * @see {@link ListVodSourcesCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListVodSourcesCommand = /** @class */ (function (_super) {
    __extends(ListVodSourcesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListVodSourcesCommand(input) {
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
    ListVodSourcesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaTailorClient";
        var commandName = "ListVodSourcesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListVodSourcesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListVodSourcesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListVodSourcesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListVodSourcesCommand(input, context);
    };
    ListVodSourcesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListVodSourcesCommand(output, context);
    };
    return ListVodSourcesCommand;
}($Command));
export { ListVodSourcesCommand };
//# sourceMappingURL=ListVodSourcesCommand.js.map