import { __extends } from "tslib";
import { ListClusterJobsRequest, ListClusterJobsResult } from "../models/models_0";
import { deserializeAws_json1_1ListClusterJobsCommand, serializeAws_json1_1ListClusterJobsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns an array of <code>JobListEntry</code> objects of the specified length. Each
 *         <code>JobListEntry</code> object is for a job in the specified cluster and contains a job's
 *       state, a job's ID, and other information.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowballClient, ListClusterJobsCommand } from "@aws-sdk/client-snowball"; // ES Modules import
 * // const { SnowballClient, ListClusterJobsCommand } = require("@aws-sdk/client-snowball"); // CommonJS import
 * const client = new SnowballClient(config);
 * const command = new ListClusterJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListClusterJobsCommandInput} for command's `input` shape.
 * @see {@link ListClusterJobsCommandOutput} for command's `response` shape.
 * @see {@link SnowballClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListClusterJobsCommand = /** @class */ (function (_super) {
    __extends(ListClusterJobsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListClusterJobsCommand(input) {
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
    ListClusterJobsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SnowballClient";
        var commandName = "ListClusterJobsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListClusterJobsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListClusterJobsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListClusterJobsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListClusterJobsCommand(input, context);
    };
    ListClusterJobsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListClusterJobsCommand(output, context);
    };
    return ListClusterJobsCommand;
}($Command));
export { ListClusterJobsCommand };
//# sourceMappingURL=ListClusterJobsCommand.js.map