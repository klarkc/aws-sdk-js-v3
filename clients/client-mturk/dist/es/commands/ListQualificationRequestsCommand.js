import { __extends } from "tslib";
import { ListQualificationRequestsRequest, ListQualificationRequestsResponse } from "../models/models_0";
import { deserializeAws_json1_1ListQualificationRequestsCommand, serializeAws_json1_1ListQualificationRequestsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *             The
 *             <code>ListQualificationRequests</code>
 *             operation retrieves requests for Qualifications of a particular
 *             Qualification type. The owner of the Qualification type calls this
 *             operation to poll for pending requests, and accepts them using the
 *             AcceptQualification operation.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, ListQualificationRequestsCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, ListQualificationRequestsCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const command = new ListQualificationRequestsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListQualificationRequestsCommandInput} for command's `input` shape.
 * @see {@link ListQualificationRequestsCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListQualificationRequestsCommand = /** @class */ (function (_super) {
    __extends(ListQualificationRequestsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListQualificationRequestsCommand(input) {
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
    ListQualificationRequestsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MTurkClient";
        var commandName = "ListQualificationRequestsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListQualificationRequestsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListQualificationRequestsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListQualificationRequestsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListQualificationRequestsCommand(input, context);
    };
    ListQualificationRequestsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListQualificationRequestsCommand(output, context);
    };
    return ListQualificationRequestsCommand;
}($Command));
export { ListQualificationRequestsCommand };
//# sourceMappingURL=ListQualificationRequestsCommand.js.map