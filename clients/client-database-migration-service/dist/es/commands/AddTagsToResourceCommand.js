import { __extends } from "tslib";
import { AddTagsToResourceMessage, AddTagsToResourceResponse } from "../models/models_0";
import { deserializeAws_json1_1AddTagsToResourceCommand, serializeAws_json1_1AddTagsToResourceCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Adds metadata tags to an AWS DMS resource, including replication instance, endpoint,
 *          security group, and migration task. These tags can also be used with cost allocation
 *          reporting to track cost associated with DMS resources, or used in a Condition statement in
 *          an IAM policy for DMS. For more information, see <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_Tag.html">
 *                <code>Tag</code>
 *             </a> data type description.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, AddTagsToResourceCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, AddTagsToResourceCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const command = new AddTagsToResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddTagsToResourceCommandInput} for command's `input` shape.
 * @see {@link AddTagsToResourceCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AddTagsToResourceCommand = /** @class */ (function (_super) {
    __extends(AddTagsToResourceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AddTagsToResourceCommand(input) {
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
    AddTagsToResourceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DatabaseMigrationServiceClient";
        var commandName = "AddTagsToResourceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AddTagsToResourceMessage.filterSensitiveLog,
            outputFilterSensitiveLog: AddTagsToResourceResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AddTagsToResourceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1AddTagsToResourceCommand(input, context);
    };
    AddTagsToResourceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1AddTagsToResourceCommand(output, context);
    };
    return AddTagsToResourceCommand;
}($Command));
export { AddTagsToResourceCommand };
//# sourceMappingURL=AddTagsToResourceCommand.js.map