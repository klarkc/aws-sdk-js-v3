import { __extends } from "tslib";
import { CreateRelationalDatabaseFromSnapshotRequest, CreateRelationalDatabaseFromSnapshotResult, } from "../models/models_0";
import { deserializeAws_json1_1CreateRelationalDatabaseFromSnapshotCommand, serializeAws_json1_1CreateRelationalDatabaseFromSnapshotCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new database from an existing database snapshot in Amazon Lightsail.</p>
 *          <p>You can create a new database from a snapshot in if something goes wrong with your
 *       original database, or to change it to a different plan, such as a high availability or
 *       standard plan.</p>
 *          <p>The <code>create relational database from snapshot</code> operation supports tag-based
 *       access control via request tags and resource tags applied to the resource identified by
 *       relationalDatabaseSnapshotName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, CreateRelationalDatabaseFromSnapshotCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, CreateRelationalDatabaseFromSnapshotCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new CreateRelationalDatabaseFromSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateRelationalDatabaseFromSnapshotCommandInput} for command's `input` shape.
 * @see {@link CreateRelationalDatabaseFromSnapshotCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateRelationalDatabaseFromSnapshotCommand = /** @class */ (function (_super) {
    __extends(CreateRelationalDatabaseFromSnapshotCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateRelationalDatabaseFromSnapshotCommand(input) {
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
    CreateRelationalDatabaseFromSnapshotCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "CreateRelationalDatabaseFromSnapshotCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateRelationalDatabaseFromSnapshotRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateRelationalDatabaseFromSnapshotResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateRelationalDatabaseFromSnapshotCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateRelationalDatabaseFromSnapshotCommand(input, context);
    };
    CreateRelationalDatabaseFromSnapshotCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateRelationalDatabaseFromSnapshotCommand(output, context);
    };
    return CreateRelationalDatabaseFromSnapshotCommand;
}($Command));
export { CreateRelationalDatabaseFromSnapshotCommand };
//# sourceMappingURL=CreateRelationalDatabaseFromSnapshotCommand.js.map