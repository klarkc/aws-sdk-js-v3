import { __extends } from "tslib";
import { ListMailboxExportJobsRequest, ListMailboxExportJobsResponse } from "../models/models_0";
import { deserializeAws_json1_1ListMailboxExportJobsCommand, serializeAws_json1_1ListMailboxExportJobsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the mailbox export jobs started for the specified organization within the last
 *          seven days.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, ListMailboxExportJobsCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, ListMailboxExportJobsCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const command = new ListMailboxExportJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListMailboxExportJobsCommandInput} for command's `input` shape.
 * @see {@link ListMailboxExportJobsCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListMailboxExportJobsCommand = /** @class */ (function (_super) {
    __extends(ListMailboxExportJobsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListMailboxExportJobsCommand(input) {
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
    ListMailboxExportJobsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkMailClient";
        var commandName = "ListMailboxExportJobsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListMailboxExportJobsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListMailboxExportJobsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListMailboxExportJobsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListMailboxExportJobsCommand(input, context);
    };
    ListMailboxExportJobsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListMailboxExportJobsCommand(output, context);
    };
    return ListMailboxExportJobsCommand;
}($Command));
export { ListMailboxExportJobsCommand };
//# sourceMappingURL=ListMailboxExportJobsCommand.js.map