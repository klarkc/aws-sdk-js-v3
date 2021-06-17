import { __extends } from "tslib";
import { UpdateResourceDataSyncRequest, UpdateResourceDataSyncResult } from "../models/models_2";
import { deserializeAws_json1_1UpdateResourceDataSyncCommand, serializeAws_json1_1UpdateResourceDataSyncCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Update a resource data sync. After you create a resource data sync for a Region, you can't
 *    change the account options for that sync. For example, if you create a sync in the us-east-2
 *    (Ohio) Region and you choose the Include only the current account option, you can't edit that
 *    sync later and choose the Include all accounts from my AWS Organizations configuration option. Instead,
 *    you must delete the first resource data sync, and create a new one.</p>
 *          <note>
 *             <p>This API action only supports a resource data sync that was created with a SyncFromSource
 *      <code>SyncType</code>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, UpdateResourceDataSyncCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, UpdateResourceDataSyncCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new UpdateResourceDataSyncCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateResourceDataSyncCommandInput} for command's `input` shape.
 * @see {@link UpdateResourceDataSyncCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateResourceDataSyncCommand = /** @class */ (function (_super) {
    __extends(UpdateResourceDataSyncCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateResourceDataSyncCommand(input) {
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
    UpdateResourceDataSyncCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "UpdateResourceDataSyncCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateResourceDataSyncRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateResourceDataSyncResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateResourceDataSyncCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateResourceDataSyncCommand(input, context);
    };
    UpdateResourceDataSyncCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateResourceDataSyncCommand(output, context);
    };
    return UpdateResourceDataSyncCommand;
}($Command));
export { UpdateResourceDataSyncCommand };
//# sourceMappingURL=UpdateResourceDataSyncCommand.js.map