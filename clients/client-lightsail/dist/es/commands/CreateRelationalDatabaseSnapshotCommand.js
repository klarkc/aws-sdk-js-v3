import { __extends } from "tslib";
import { CreateRelationalDatabaseSnapshotRequest, CreateRelationalDatabaseSnapshotResult } from "../models/models_0";
import { deserializeAws_json1_1CreateRelationalDatabaseSnapshotCommand, serializeAws_json1_1CreateRelationalDatabaseSnapshotCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a snapshot of your database in Amazon Lightsail. You can use snapshots for backups,
 *       to make copies of a database, and to save data before deleting a database.</p>
 *          <p>The <code>create relational database snapshot</code> operation supports tag-based access
 *       control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, CreateRelationalDatabaseSnapshotCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, CreateRelationalDatabaseSnapshotCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new CreateRelationalDatabaseSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateRelationalDatabaseSnapshotCommandInput} for command's `input` shape.
 * @see {@link CreateRelationalDatabaseSnapshotCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateRelationalDatabaseSnapshotCommand = /** @class */ (function (_super) {
    __extends(CreateRelationalDatabaseSnapshotCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateRelationalDatabaseSnapshotCommand(input) {
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
    CreateRelationalDatabaseSnapshotCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "CreateRelationalDatabaseSnapshotCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateRelationalDatabaseSnapshotRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateRelationalDatabaseSnapshotResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateRelationalDatabaseSnapshotCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateRelationalDatabaseSnapshotCommand(input, context);
    };
    CreateRelationalDatabaseSnapshotCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateRelationalDatabaseSnapshotCommand(output, context);
    };
    return CreateRelationalDatabaseSnapshotCommand;
}($Command));
export { CreateRelationalDatabaseSnapshotCommand };
//# sourceMappingURL=CreateRelationalDatabaseSnapshotCommand.js.map