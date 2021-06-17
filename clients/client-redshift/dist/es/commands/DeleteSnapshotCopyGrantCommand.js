import { __extends } from "tslib";
import { DeleteSnapshotCopyGrantMessage } from "../models/models_0";
import { deserializeAws_queryDeleteSnapshotCopyGrantCommand, serializeAws_queryDeleteSnapshotCopyGrantCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified snapshot copy grant.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DeleteSnapshotCopyGrantCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DeleteSnapshotCopyGrantCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new DeleteSnapshotCopyGrantCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteSnapshotCopyGrantCommandInput} for command's `input` shape.
 * @see {@link DeleteSnapshotCopyGrantCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteSnapshotCopyGrantCommand = /** @class */ (function (_super) {
    __extends(DeleteSnapshotCopyGrantCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteSnapshotCopyGrantCommand(input) {
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
    DeleteSnapshotCopyGrantCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RedshiftClient";
        var commandName = "DeleteSnapshotCopyGrantCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteSnapshotCopyGrantMessage.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteSnapshotCopyGrantCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDeleteSnapshotCopyGrantCommand(input, context);
    };
    DeleteSnapshotCopyGrantCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDeleteSnapshotCopyGrantCommand(output, context);
    };
    return DeleteSnapshotCopyGrantCommand;
}($Command));
export { DeleteSnapshotCopyGrantCommand };
//# sourceMappingURL=DeleteSnapshotCopyGrantCommand.js.map