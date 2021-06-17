import { __extends } from "tslib";
import { RemoveTagsFromResourceMessage, RemoveTagsFromResourceResponse } from "../models/models_0";
import { deserializeAws_json1_1RemoveTagsFromResourceCommand, serializeAws_json1_1RemoveTagsFromResourceCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes metadata tags from an AWS DMS resource, including replication instance,
 *          endpoint, security group, and migration task. For more information, see
 *          <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_Tag.html">
 *                <code>Tag</code>
 *             </a>
 *          data type description.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, RemoveTagsFromResourceCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, RemoveTagsFromResourceCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const command = new RemoveTagsFromResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RemoveTagsFromResourceCommandInput} for command's `input` shape.
 * @see {@link RemoveTagsFromResourceCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RemoveTagsFromResourceCommand = /** @class */ (function (_super) {
    __extends(RemoveTagsFromResourceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RemoveTagsFromResourceCommand(input) {
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
    RemoveTagsFromResourceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DatabaseMigrationServiceClient";
        var commandName = "RemoveTagsFromResourceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RemoveTagsFromResourceMessage.filterSensitiveLog,
            outputFilterSensitiveLog: RemoveTagsFromResourceResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RemoveTagsFromResourceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1RemoveTagsFromResourceCommand(input, context);
    };
    RemoveTagsFromResourceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1RemoveTagsFromResourceCommand(output, context);
    };
    return RemoveTagsFromResourceCommand;
}($Command));
export { RemoveTagsFromResourceCommand };
//# sourceMappingURL=RemoveTagsFromResourceCommand.js.map