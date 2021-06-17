import { __extends } from "tslib";
import { ExportSnapshotRequest, ExportSnapshotResult } from "../models/models_0";
import { deserializeAws_json1_1ExportSnapshotCommand, serializeAws_json1_1ExportSnapshotCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Exports an Amazon Lightsail instance or block storage disk snapshot to Amazon Elastic Compute Cloud (Amazon EC2).
 *       This operation results in an export snapshot record that can be used with the <code>create
 *         cloud formation stack</code> operation to create new Amazon EC2 instances.</p>
 *          <p>Exported instance snapshots appear in Amazon EC2 as Amazon Machine Images (AMIs), and the
 *       instance system disk appears as an Amazon Elastic Block Store (Amazon EBS) volume. Exported disk snapshots appear in
 *       Amazon EC2 as Amazon EBS volumes. Snapshots are exported to the same Amazon Web Services Region in Amazon EC2 as the
 *       source Lightsail snapshot.</p>
 *          <p></p>
 *          <p>The <code>export snapshot</code> operation supports tag-based access control via resource
 *       tags applied to the resource identified by <code>source snapshot name</code>. For more
 *       information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
 *          <note>
 *             <p>Use the <code>get instance snapshots</code> or <code>get disk snapshots</code>
 *         operations to get a list of snapshots that you can export to Amazon EC2.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, ExportSnapshotCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, ExportSnapshotCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new ExportSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ExportSnapshotCommandInput} for command's `input` shape.
 * @see {@link ExportSnapshotCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ExportSnapshotCommand = /** @class */ (function (_super) {
    __extends(ExportSnapshotCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ExportSnapshotCommand(input) {
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
    ExportSnapshotCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "ExportSnapshotCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ExportSnapshotRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ExportSnapshotResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ExportSnapshotCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ExportSnapshotCommand(input, context);
    };
    ExportSnapshotCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ExportSnapshotCommand(output, context);
    };
    return ExportSnapshotCommand;
}($Command));
export { ExportSnapshotCommand };
//# sourceMappingURL=ExportSnapshotCommand.js.map