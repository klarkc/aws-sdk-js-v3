import { __extends } from "tslib";
import { DeleteRelationalDatabaseSnapshotRequest, DeleteRelationalDatabaseSnapshotResult } from "../models/models_0";
import { deserializeAws_json1_1DeleteRelationalDatabaseSnapshotCommand, serializeAws_json1_1DeleteRelationalDatabaseSnapshotCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a database snapshot in Amazon Lightsail.</p>
 *          <p>The <code>delete relational database snapshot</code> operation supports tag-based access
 *       control via resource tags applied to the resource identified by relationalDatabaseName. For
 *       more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, DeleteRelationalDatabaseSnapshotCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, DeleteRelationalDatabaseSnapshotCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new DeleteRelationalDatabaseSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteRelationalDatabaseSnapshotCommandInput} for command's `input` shape.
 * @see {@link DeleteRelationalDatabaseSnapshotCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteRelationalDatabaseSnapshotCommand = /** @class */ (function (_super) {
    __extends(DeleteRelationalDatabaseSnapshotCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteRelationalDatabaseSnapshotCommand(input) {
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
    DeleteRelationalDatabaseSnapshotCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "DeleteRelationalDatabaseSnapshotCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteRelationalDatabaseSnapshotRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteRelationalDatabaseSnapshotResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteRelationalDatabaseSnapshotCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteRelationalDatabaseSnapshotCommand(input, context);
    };
    DeleteRelationalDatabaseSnapshotCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteRelationalDatabaseSnapshotCommand(output, context);
    };
    return DeleteRelationalDatabaseSnapshotCommand;
}($Command));
export { DeleteRelationalDatabaseSnapshotCommand };
//# sourceMappingURL=DeleteRelationalDatabaseSnapshotCommand.js.map