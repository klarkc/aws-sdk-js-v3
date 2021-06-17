import { __extends } from "tslib";
import { CreateClusterSnapshotMessage, CreateClusterSnapshotResult } from "../models/models_0";
import { deserializeAws_queryCreateClusterSnapshotCommand, serializeAws_queryCreateClusterSnapshotCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a manual snapshot of the specified cluster. The cluster must be in the
 *                 <code>available</code> state. </p>
 *         <p>
 * For more information about working with snapshots, go to
 * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html">Amazon Redshift Snapshots</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, CreateClusterSnapshotCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, CreateClusterSnapshotCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new CreateClusterSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateClusterSnapshotCommandInput} for command's `input` shape.
 * @see {@link CreateClusterSnapshotCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateClusterSnapshotCommand = /** @class */ (function (_super) {
    __extends(CreateClusterSnapshotCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateClusterSnapshotCommand(input) {
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
    CreateClusterSnapshotCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RedshiftClient";
        var commandName = "CreateClusterSnapshotCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateClusterSnapshotMessage.filterSensitiveLog,
            outputFilterSensitiveLog: CreateClusterSnapshotResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateClusterSnapshotCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryCreateClusterSnapshotCommand(input, context);
    };
    CreateClusterSnapshotCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryCreateClusterSnapshotCommand(output, context);
    };
    return CreateClusterSnapshotCommand;
}($Command));
export { CreateClusterSnapshotCommand };
//# sourceMappingURL=CreateClusterSnapshotCommand.js.map