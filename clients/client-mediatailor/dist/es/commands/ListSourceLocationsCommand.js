import { __extends } from "tslib";
import { ListSourceLocationsRequest, ListSourceLocationsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListSourceLocationsCommand, serializeAws_restJson1ListSourceLocationsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves a list of source locations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, ListSourceLocationsCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, ListSourceLocationsCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * const client = new MediaTailorClient(config);
 * const command = new ListSourceLocationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSourceLocationsCommandInput} for command's `input` shape.
 * @see {@link ListSourceLocationsCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListSourceLocationsCommand = /** @class */ (function (_super) {
    __extends(ListSourceLocationsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListSourceLocationsCommand(input) {
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
    ListSourceLocationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaTailorClient";
        var commandName = "ListSourceLocationsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListSourceLocationsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListSourceLocationsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListSourceLocationsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListSourceLocationsCommand(input, context);
    };
    ListSourceLocationsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListSourceLocationsCommand(output, context);
    };
    return ListSourceLocationsCommand;
}($Command));
export { ListSourceLocationsCommand };
//# sourceMappingURL=ListSourceLocationsCommand.js.map