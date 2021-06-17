import { __extends } from "tslib";
import { ListOfferingsRequest, ListOfferingsResponse } from "../models/models_1";
import { deserializeAws_restJson1ListOfferingsCommand, serializeAws_restJson1ListOfferingsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * List offerings available for purchase.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, ListOfferingsCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, ListOfferingsCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const command = new ListOfferingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListOfferingsCommandInput} for command's `input` shape.
 * @see {@link ListOfferingsCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListOfferingsCommand = /** @class */ (function (_super) {
    __extends(ListOfferingsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListOfferingsCommand(input) {
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
    ListOfferingsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaLiveClient";
        var commandName = "ListOfferingsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListOfferingsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListOfferingsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListOfferingsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListOfferingsCommand(input, context);
    };
    ListOfferingsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListOfferingsCommand(output, context);
    };
    return ListOfferingsCommand;
}($Command));
export { ListOfferingsCommand };
//# sourceMappingURL=ListOfferingsCommand.js.map