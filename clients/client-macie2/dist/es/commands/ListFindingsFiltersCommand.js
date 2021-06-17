import { __extends } from "tslib";
import { ListFindingsFiltersRequest, ListFindingsFiltersResponse } from "../models/models_0";
import { deserializeAws_restJson1ListFindingsFiltersCommand, serializeAws_restJson1ListFindingsFiltersCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves a subset of information about all the findings filters for an account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, ListFindingsFiltersCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, ListFindingsFiltersCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const command = new ListFindingsFiltersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListFindingsFiltersCommandInput} for command's `input` shape.
 * @see {@link ListFindingsFiltersCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListFindingsFiltersCommand = /** @class */ (function (_super) {
    __extends(ListFindingsFiltersCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListFindingsFiltersCommand(input) {
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
    ListFindingsFiltersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Macie2Client";
        var commandName = "ListFindingsFiltersCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListFindingsFiltersRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListFindingsFiltersResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListFindingsFiltersCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListFindingsFiltersCommand(input, context);
    };
    ListFindingsFiltersCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListFindingsFiltersCommand(output, context);
    };
    return ListFindingsFiltersCommand;
}($Command));
export { ListFindingsFiltersCommand };
//# sourceMappingURL=ListFindingsFiltersCommand.js.map