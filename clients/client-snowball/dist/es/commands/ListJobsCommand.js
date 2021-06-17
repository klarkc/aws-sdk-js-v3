import { __extends } from "tslib";
import { ListJobsRequest, ListJobsResult } from "../models/models_0";
import { deserializeAws_json1_1ListJobsCommand, serializeAws_json1_1ListJobsCommand } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns an array of <code>JobListEntry</code> objects of the specified length. Each
 *         <code>JobListEntry</code> object contains a job's state, a job's ID, and a value that
 *       indicates whether the job is a job part, in the case of export jobs. Calling this API action
 *       in one of the US regions will return jobs from the list of all jobs associated with this
 *       account in all US regions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowballClient, ListJobsCommand } from "@aws-sdk/client-snowball"; // ES Modules import
 * // const { SnowballClient, ListJobsCommand } = require("@aws-sdk/client-snowball"); // CommonJS import
 * const client = new SnowballClient(config);
 * const command = new ListJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListJobsCommandInput} for command's `input` shape.
 * @see {@link ListJobsCommandOutput} for command's `response` shape.
 * @see {@link SnowballClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListJobsCommand = /** @class */ (function (_super) {
    __extends(ListJobsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListJobsCommand(input) {
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
    ListJobsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SnowballClient";
        var commandName = "ListJobsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListJobsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListJobsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListJobsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListJobsCommand(input, context);
    };
    ListJobsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListJobsCommand(output, context);
    };
    return ListJobsCommand;
}($Command));
export { ListJobsCommand };
//# sourceMappingURL=ListJobsCommand.js.map