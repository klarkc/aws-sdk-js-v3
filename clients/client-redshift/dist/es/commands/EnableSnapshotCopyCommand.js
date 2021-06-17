import { __extends } from "tslib";
import { EnableSnapshotCopyMessage, EnableSnapshotCopyResult } from "../models/models_1";
import { deserializeAws_queryEnableSnapshotCopyCommand, serializeAws_queryEnableSnapshotCopyCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Enables the automatic copy of snapshots from one region to another region for a
 *             specified cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, EnableSnapshotCopyCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, EnableSnapshotCopyCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new EnableSnapshotCopyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EnableSnapshotCopyCommandInput} for command's `input` shape.
 * @see {@link EnableSnapshotCopyCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var EnableSnapshotCopyCommand = /** @class */ (function (_super) {
    __extends(EnableSnapshotCopyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function EnableSnapshotCopyCommand(input) {
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
    EnableSnapshotCopyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RedshiftClient";
        var commandName = "EnableSnapshotCopyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: EnableSnapshotCopyMessage.filterSensitiveLog,
            outputFilterSensitiveLog: EnableSnapshotCopyResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    EnableSnapshotCopyCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryEnableSnapshotCopyCommand(input, context);
    };
    EnableSnapshotCopyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryEnableSnapshotCopyCommand(output, context);
    };
    return EnableSnapshotCopyCommand;
}($Command));
export { EnableSnapshotCopyCommand };
//# sourceMappingURL=EnableSnapshotCopyCommand.js.map