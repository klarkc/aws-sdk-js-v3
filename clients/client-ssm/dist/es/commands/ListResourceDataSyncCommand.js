import { __extends } from "tslib";
import { ListResourceDataSyncRequest, ListResourceDataSyncResult } from "../models/models_1";
import { deserializeAws_json1_1ListResourceDataSyncCommand, serializeAws_json1_1ListResourceDataSyncCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists your resource data sync configurations. Includes information about the last time a
 *    sync attempted to start, the last sync status, and the last time a sync successfully
 *    completed.</p>
 *          <p>The number of sync configurations might be too large to return using a single call to
 *     <code>ListResourceDataSync</code>. You can limit the number of sync configurations returned by
 *    using the <code>MaxResults</code> parameter. To determine whether there are more sync
 *    configurations to list, check the value of <code>NextToken</code> in the output. If there are
 *    more sync configurations to list, you can request them by specifying the <code>NextToken</code>
 *    returned in the call to the parameter of a subsequent call. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, ListResourceDataSyncCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, ListResourceDataSyncCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new ListResourceDataSyncCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListResourceDataSyncCommandInput} for command's `input` shape.
 * @see {@link ListResourceDataSyncCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListResourceDataSyncCommand = /** @class */ (function (_super) {
    __extends(ListResourceDataSyncCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListResourceDataSyncCommand(input) {
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
    ListResourceDataSyncCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "ListResourceDataSyncCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListResourceDataSyncRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListResourceDataSyncResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListResourceDataSyncCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListResourceDataSyncCommand(input, context);
    };
    ListResourceDataSyncCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListResourceDataSyncCommand(output, context);
    };
    return ListResourceDataSyncCommand;
}($Command));
export { ListResourceDataSyncCommand };
//# sourceMappingURL=ListResourceDataSyncCommand.js.map