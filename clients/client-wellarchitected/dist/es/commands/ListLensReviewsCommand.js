import { __extends } from "tslib";
import { ListLensReviewsInput, ListLensReviewsOutput } from "../models/models_0";
import { deserializeAws_restJson1ListLensReviewsCommand, serializeAws_restJson1ListLensReviewsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>List lens reviews.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, ListLensReviewsCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, ListLensReviewsCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * const client = new WellArchitectedClient(config);
 * const command = new ListLensReviewsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListLensReviewsCommandInput} for command's `input` shape.
 * @see {@link ListLensReviewsCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListLensReviewsCommand = /** @class */ (function (_super) {
    __extends(ListLensReviewsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListLensReviewsCommand(input) {
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
    ListLensReviewsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WellArchitectedClient";
        var commandName = "ListLensReviewsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListLensReviewsInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListLensReviewsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListLensReviewsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListLensReviewsCommand(input, context);
    };
    ListLensReviewsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListLensReviewsCommand(output, context);
    };
    return ListLensReviewsCommand;
}($Command));
export { ListLensReviewsCommand };
//# sourceMappingURL=ListLensReviewsCommand.js.map