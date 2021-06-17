import { __extends } from "tslib";
import { CreateSnapshotCopyGrantMessage, CreateSnapshotCopyGrantResult } from "../models/models_0";
import { deserializeAws_queryCreateSnapshotCopyGrantCommand, serializeAws_queryCreateSnapshotCopyGrantCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a snapshot copy grant that permits Amazon Redshift to use a customer master key
 *             (CMK) from AWS Key Management Service (AWS KMS) to encrypt copied snapshots in a
 *             destination region.</p>
 *         <p>
 * For more information about managing snapshot copy grants, go to
 * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-db-encryption.html">Amazon Redshift Database Encryption</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, CreateSnapshotCopyGrantCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, CreateSnapshotCopyGrantCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new CreateSnapshotCopyGrantCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateSnapshotCopyGrantCommandInput} for command's `input` shape.
 * @see {@link CreateSnapshotCopyGrantCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateSnapshotCopyGrantCommand = /** @class */ (function (_super) {
    __extends(CreateSnapshotCopyGrantCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateSnapshotCopyGrantCommand(input) {
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
    CreateSnapshotCopyGrantCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RedshiftClient";
        var commandName = "CreateSnapshotCopyGrantCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateSnapshotCopyGrantMessage.filterSensitiveLog,
            outputFilterSensitiveLog: CreateSnapshotCopyGrantResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateSnapshotCopyGrantCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryCreateSnapshotCopyGrantCommand(input, context);
    };
    CreateSnapshotCopyGrantCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryCreateSnapshotCopyGrantCommand(output, context);
    };
    return CreateSnapshotCopyGrantCommand;
}($Command));
export { CreateSnapshotCopyGrantCommand };
//# sourceMappingURL=CreateSnapshotCopyGrantCommand.js.map