import { __extends } from "tslib";
import { ListPlaybackConfigurationsRequest, ListPlaybackConfigurationsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListPlaybackConfigurationsCommand, serializeAws_restJson1ListPlaybackConfigurationsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of the playback configurations defined in AWS Elemental MediaTailor. You can specify a maximum number of configurations to return at a time. The default maximum is 50. Results are returned in pagefuls. If MediaTailor has more configurations than the specified maximum, it provides parameters in the response that you can use to retrieve the next pageful.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, ListPlaybackConfigurationsCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, ListPlaybackConfigurationsCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * const client = new MediaTailorClient(config);
 * const command = new ListPlaybackConfigurationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPlaybackConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ListPlaybackConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListPlaybackConfigurationsCommand = /** @class */ (function (_super) {
    __extends(ListPlaybackConfigurationsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListPlaybackConfigurationsCommand(input) {
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
    ListPlaybackConfigurationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaTailorClient";
        var commandName = "ListPlaybackConfigurationsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListPlaybackConfigurationsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListPlaybackConfigurationsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListPlaybackConfigurationsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListPlaybackConfigurationsCommand(input, context);
    };
    ListPlaybackConfigurationsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListPlaybackConfigurationsCommand(output, context);
    };
    return ListPlaybackConfigurationsCommand;
}($Command));
export { ListPlaybackConfigurationsCommand };
//# sourceMappingURL=ListPlaybackConfigurationsCommand.js.map