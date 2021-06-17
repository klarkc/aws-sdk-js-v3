import { __extends } from "tslib";
import { ListItemsRequest, ListItemsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListItemsCommand, serializeAws_restJson1ListItemsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Provides a list of metadata entries about folders and objects in the specified
 *          folder.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaStoreDataClient, ListItemsCommand } from "@aws-sdk/client-mediastore-data"; // ES Modules import
 * // const { MediaStoreDataClient, ListItemsCommand } = require("@aws-sdk/client-mediastore-data"); // CommonJS import
 * const client = new MediaStoreDataClient(config);
 * const command = new ListItemsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListItemsCommandInput} for command's `input` shape.
 * @see {@link ListItemsCommandOutput} for command's `response` shape.
 * @see {@link MediaStoreDataClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListItemsCommand = /** @class */ (function (_super) {
    __extends(ListItemsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListItemsCommand(input) {
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
    ListItemsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaStoreDataClient";
        var commandName = "ListItemsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListItemsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListItemsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListItemsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListItemsCommand(input, context);
    };
    ListItemsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListItemsCommand(output, context);
    };
    return ListItemsCommand;
}($Command));
export { ListItemsCommand };
//# sourceMappingURL=ListItemsCommand.js.map