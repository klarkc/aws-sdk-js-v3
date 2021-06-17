import { __extends } from "tslib";
import { DeleteReplicationJobRequest, DeleteReplicationJobResponse } from "../models/models_0";
import { deserializeAws_json1_1DeleteReplicationJobCommand, serializeAws_json1_1DeleteReplicationJobCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified replication job.</p>
 *         <p>After you delete a replication job, there are no further replication runs. AWS
 *             deletes the contents of the Amazon S3 bucket used to store AWS SMS artifacts. The AMIs created
 *             by the replication runs are not deleted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, DeleteReplicationJobCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, DeleteReplicationJobCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * const client = new SMSClient(config);
 * const command = new DeleteReplicationJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteReplicationJobCommandInput} for command's `input` shape.
 * @see {@link DeleteReplicationJobCommandOutput} for command's `response` shape.
 * @see {@link SMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteReplicationJobCommand = /** @class */ (function (_super) {
    __extends(DeleteReplicationJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteReplicationJobCommand(input) {
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
    DeleteReplicationJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SMSClient";
        var commandName = "DeleteReplicationJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteReplicationJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteReplicationJobResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteReplicationJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteReplicationJobCommand(input, context);
    };
    DeleteReplicationJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteReplicationJobCommand(output, context);
    };
    return DeleteReplicationJobCommand;
}($Command));
export { DeleteReplicationJobCommand };
//# sourceMappingURL=DeleteReplicationJobCommand.js.map