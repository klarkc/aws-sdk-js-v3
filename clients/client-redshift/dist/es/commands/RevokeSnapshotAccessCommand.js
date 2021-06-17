import { __extends } from "tslib";
import { RevokeSnapshotAccessMessage, RevokeSnapshotAccessResult } from "../models/models_1";
import { deserializeAws_queryRevokeSnapshotAccessCommand, serializeAws_queryRevokeSnapshotAccessCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes the ability of the specified AWS customer account to restore the specified
 *             snapshot. If the account is currently restoring the snapshot, the restore will run to
 *             completion.</p>
 *         <p>
 * For more information about working with snapshots, go to
 * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html">Amazon Redshift Snapshots</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, RevokeSnapshotAccessCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, RevokeSnapshotAccessCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new RevokeSnapshotAccessCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RevokeSnapshotAccessCommandInput} for command's `input` shape.
 * @see {@link RevokeSnapshotAccessCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RevokeSnapshotAccessCommand = /** @class */ (function (_super) {
    __extends(RevokeSnapshotAccessCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RevokeSnapshotAccessCommand(input) {
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
    RevokeSnapshotAccessCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RedshiftClient";
        var commandName = "RevokeSnapshotAccessCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RevokeSnapshotAccessMessage.filterSensitiveLog,
            outputFilterSensitiveLog: RevokeSnapshotAccessResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RevokeSnapshotAccessCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryRevokeSnapshotAccessCommand(input, context);
    };
    RevokeSnapshotAccessCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryRevokeSnapshotAccessCommand(output, context);
    };
    return RevokeSnapshotAccessCommand;
}($Command));
export { RevokeSnapshotAccessCommand };
//# sourceMappingURL=RevokeSnapshotAccessCommand.js.map