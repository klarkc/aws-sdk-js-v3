import { __extends } from "tslib";
import { CopyDBSnapshotMessage, CopyDBSnapshotResult } from "../models/models_0";
import { deserializeAws_queryCopyDBSnapshotCommand, serializeAws_queryCopyDBSnapshotCommand, } from "../protocols/Aws_query";
import { getCrossRegionPresignedUrlPlugin } from "@aws-sdk/middleware-sdk-rds";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Copies the specified DB snapshot. The source DB snapshot must be in the <code>available</code> state.</p>
 *
 *         <p>You can copy a snapshot from one AWS Region to another. In that case, the AWS Region
 *             where you call the <code>CopyDBSnapshot</code> action is the destination AWS Region for the
 *             DB snapshot copy. </p>
 *
 *         <p>For more information about copying snapshots, see
 *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_CopySnapshot.html#USER_CopyDBSnapshot">Copying a DB Snapshot</a> in the <i>Amazon RDS User Guide.</i>
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, CopyDBSnapshotCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, CopyDBSnapshotCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new CopyDBSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CopyDBSnapshotCommandInput} for command's `input` shape.
 * @see {@link CopyDBSnapshotCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CopyDBSnapshotCommand = /** @class */ (function (_super) {
    __extends(CopyDBSnapshotCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CopyDBSnapshotCommand(input) {
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
    CopyDBSnapshotCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getCrossRegionPresignedUrlPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RDSClient";
        var commandName = "CopyDBSnapshotCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CopyDBSnapshotMessage.filterSensitiveLog,
            outputFilterSensitiveLog: CopyDBSnapshotResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CopyDBSnapshotCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryCopyDBSnapshotCommand(input, context);
    };
    CopyDBSnapshotCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryCopyDBSnapshotCommand(output, context);
    };
    return CopyDBSnapshotCommand;
}($Command));
export { CopyDBSnapshotCommand };
//# sourceMappingURL=CopyDBSnapshotCommand.js.map