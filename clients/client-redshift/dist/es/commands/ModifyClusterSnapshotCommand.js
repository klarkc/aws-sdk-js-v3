import { __extends } from "tslib";
import { ModifyClusterSnapshotMessage, ModifyClusterSnapshotResult } from "../models/models_1";
import { deserializeAws_queryModifyClusterSnapshotCommand, serializeAws_queryModifyClusterSnapshotCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Modifies the settings for a snapshot.</p>
 * 		       <p>This exanmple modifies the manual retention period setting for a cluster snapshot.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, ModifyClusterSnapshotCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, ModifyClusterSnapshotCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new ModifyClusterSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyClusterSnapshotCommandInput} for command's `input` shape.
 * @see {@link ModifyClusterSnapshotCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ModifyClusterSnapshotCommand = /** @class */ (function (_super) {
    __extends(ModifyClusterSnapshotCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ModifyClusterSnapshotCommand(input) {
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
    ModifyClusterSnapshotCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RedshiftClient";
        var commandName = "ModifyClusterSnapshotCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ModifyClusterSnapshotMessage.filterSensitiveLog,
            outputFilterSensitiveLog: ModifyClusterSnapshotResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ModifyClusterSnapshotCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryModifyClusterSnapshotCommand(input, context);
    };
    ModifyClusterSnapshotCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryModifyClusterSnapshotCommand(output, context);
    };
    return ModifyClusterSnapshotCommand;
}($Command));
export { ModifyClusterSnapshotCommand };
//# sourceMappingURL=ModifyClusterSnapshotCommand.js.map