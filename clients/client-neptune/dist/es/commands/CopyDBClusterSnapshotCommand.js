import { __extends } from "tslib";
import { CopyDBClusterSnapshotMessage, CopyDBClusterSnapshotResult } from "../models/models_0";
import { deserializeAws_queryCopyDBClusterSnapshotCommand, serializeAws_queryCopyDBClusterSnapshotCommand, } from "../protocols/Aws_query";
import { getCrossRegionPresignedUrlPlugin } from "@aws-sdk/middleware-sdk-rds";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Copies a snapshot of a DB cluster.</p>
 *          <p>To copy a DB cluster snapshot from a shared manual DB cluster snapshot,
 *       <code>SourceDBClusterSnapshotIdentifier</code> must be the Amazon Resource Name (ARN) of the
 *       shared DB cluster snapshot.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, CopyDBClusterSnapshotCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, CopyDBClusterSnapshotCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * const client = new NeptuneClient(config);
 * const command = new CopyDBClusterSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CopyDBClusterSnapshotCommandInput} for command's `input` shape.
 * @see {@link CopyDBClusterSnapshotCommandOutput} for command's `response` shape.
 * @see {@link NeptuneClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CopyDBClusterSnapshotCommand = /** @class */ (function (_super) {
    __extends(CopyDBClusterSnapshotCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CopyDBClusterSnapshotCommand(input) {
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
    CopyDBClusterSnapshotCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getCrossRegionPresignedUrlPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "NeptuneClient";
        var commandName = "CopyDBClusterSnapshotCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CopyDBClusterSnapshotMessage.filterSensitiveLog,
            outputFilterSensitiveLog: CopyDBClusterSnapshotResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CopyDBClusterSnapshotCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryCopyDBClusterSnapshotCommand(input, context);
    };
    CopyDBClusterSnapshotCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryCopyDBClusterSnapshotCommand(output, context);
    };
    return CopyDBClusterSnapshotCommand;
}($Command));
export { CopyDBClusterSnapshotCommand };
//# sourceMappingURL=CopyDBClusterSnapshotCommand.js.map