import { __extends } from "tslib";
import { ListClassificationJobsRequest, ListClassificationJobsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListClassificationJobsCommand, serializeAws_restJson1ListClassificationJobsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves a subset of information about one or more classification jobs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, ListClassificationJobsCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, ListClassificationJobsCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const command = new ListClassificationJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListClassificationJobsCommandInput} for command's `input` shape.
 * @see {@link ListClassificationJobsCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListClassificationJobsCommand = /** @class */ (function (_super) {
    __extends(ListClassificationJobsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListClassificationJobsCommand(input) {
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
    ListClassificationJobsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Macie2Client";
        var commandName = "ListClassificationJobsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListClassificationJobsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListClassificationJobsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListClassificationJobsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListClassificationJobsCommand(input, context);
    };
    ListClassificationJobsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListClassificationJobsCommand(output, context);
    };
    return ListClassificationJobsCommand;
}($Command));
export { ListClassificationJobsCommand };
//# sourceMappingURL=ListClassificationJobsCommand.js.map