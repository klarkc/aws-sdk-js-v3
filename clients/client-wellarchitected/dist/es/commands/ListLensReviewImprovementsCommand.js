import { __extends } from "tslib";
import { ListLensReviewImprovementsInput, ListLensReviewImprovementsOutput } from "../models/models_0";
import { deserializeAws_restJson1ListLensReviewImprovementsCommand, serializeAws_restJson1ListLensReviewImprovementsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>List lens review improvements.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, ListLensReviewImprovementsCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, ListLensReviewImprovementsCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * const client = new WellArchitectedClient(config);
 * const command = new ListLensReviewImprovementsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListLensReviewImprovementsCommandInput} for command's `input` shape.
 * @see {@link ListLensReviewImprovementsCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListLensReviewImprovementsCommand = /** @class */ (function (_super) {
    __extends(ListLensReviewImprovementsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListLensReviewImprovementsCommand(input) {
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
    ListLensReviewImprovementsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WellArchitectedClient";
        var commandName = "ListLensReviewImprovementsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListLensReviewImprovementsInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListLensReviewImprovementsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListLensReviewImprovementsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListLensReviewImprovementsCommand(input, context);
    };
    ListLensReviewImprovementsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListLensReviewImprovementsCommand(output, context);
    };
    return ListLensReviewImprovementsCommand;
}($Command));
export { ListLensReviewImprovementsCommand };
//# sourceMappingURL=ListLensReviewImprovementsCommand.js.map