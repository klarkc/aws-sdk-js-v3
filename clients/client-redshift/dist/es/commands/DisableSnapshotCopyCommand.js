import { __extends } from "tslib";
import { DisableSnapshotCopyMessage, DisableSnapshotCopyResult } from "../models/models_1";
import { deserializeAws_queryDisableSnapshotCopyCommand, serializeAws_queryDisableSnapshotCopyCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Disables the automatic copying of snapshots from one region to another region for a
 *             specified cluster.</p>
 *         <p>If your cluster and its snapshots are encrypted using a customer master key (CMK)
 *             from AWS KMS, use <a>DeleteSnapshotCopyGrant</a> to delete the grant that
 *             grants Amazon Redshift permission to the CMK in the destination region. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DisableSnapshotCopyCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DisableSnapshotCopyCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new DisableSnapshotCopyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisableSnapshotCopyCommandInput} for command's `input` shape.
 * @see {@link DisableSnapshotCopyCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisableSnapshotCopyCommand = /** @class */ (function (_super) {
    __extends(DisableSnapshotCopyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisableSnapshotCopyCommand(input) {
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
    DisableSnapshotCopyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RedshiftClient";
        var commandName = "DisableSnapshotCopyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisableSnapshotCopyMessage.filterSensitiveLog,
            outputFilterSensitiveLog: DisableSnapshotCopyResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisableSnapshotCopyCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDisableSnapshotCopyCommand(input, context);
    };
    DisableSnapshotCopyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDisableSnapshotCopyCommand(output, context);
    };
    return DisableSnapshotCopyCommand;
}($Command));
export { DisableSnapshotCopyCommand };
//# sourceMappingURL=DisableSnapshotCopyCommand.js.map