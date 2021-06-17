import { __extends } from "tslib";
import { DescribeSnapshotCopyGrantsMessage } from "../models/models_0";
import { SnapshotCopyGrantMessage } from "../models/models_1";
import { deserializeAws_queryDescribeSnapshotCopyGrantsCommand, serializeAws_queryDescribeSnapshotCopyGrantsCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of snapshot copy grants owned by the AWS account in the destination
 *             region.</p>
 *         <p>
 * For more information about managing snapshot copy grants, go to
 * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-db-encryption.html">Amazon Redshift Database Encryption</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribeSnapshotCopyGrantsCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DescribeSnapshotCopyGrantsCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new DescribeSnapshotCopyGrantsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeSnapshotCopyGrantsCommandInput} for command's `input` shape.
 * @see {@link DescribeSnapshotCopyGrantsCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeSnapshotCopyGrantsCommand = /** @class */ (function (_super) {
    __extends(DescribeSnapshotCopyGrantsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeSnapshotCopyGrantsCommand(input) {
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
    DescribeSnapshotCopyGrantsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RedshiftClient";
        var commandName = "DescribeSnapshotCopyGrantsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeSnapshotCopyGrantsMessage.filterSensitiveLog,
            outputFilterSensitiveLog: SnapshotCopyGrantMessage.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeSnapshotCopyGrantsCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDescribeSnapshotCopyGrantsCommand(input, context);
    };
    DescribeSnapshotCopyGrantsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDescribeSnapshotCopyGrantsCommand(output, context);
    };
    return DescribeSnapshotCopyGrantsCommand;
}($Command));
export { DescribeSnapshotCopyGrantsCommand };
//# sourceMappingURL=DescribeSnapshotCopyGrantsCommand.js.map