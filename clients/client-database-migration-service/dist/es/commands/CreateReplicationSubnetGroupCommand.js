import { __extends } from "tslib";
import { CreateReplicationSubnetGroupMessage, CreateReplicationSubnetGroupResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateReplicationSubnetGroupCommand, serializeAws_json1_1CreateReplicationSubnetGroupCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a replication subnet group given a list of the subnet IDs in a VPC.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, CreateReplicationSubnetGroupCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, CreateReplicationSubnetGroupCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const command = new CreateReplicationSubnetGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateReplicationSubnetGroupCommandInput} for command's `input` shape.
 * @see {@link CreateReplicationSubnetGroupCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateReplicationSubnetGroupCommand = /** @class */ (function (_super) {
    __extends(CreateReplicationSubnetGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateReplicationSubnetGroupCommand(input) {
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
    CreateReplicationSubnetGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DatabaseMigrationServiceClient";
        var commandName = "CreateReplicationSubnetGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateReplicationSubnetGroupMessage.filterSensitiveLog,
            outputFilterSensitiveLog: CreateReplicationSubnetGroupResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateReplicationSubnetGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateReplicationSubnetGroupCommand(input, context);
    };
    CreateReplicationSubnetGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateReplicationSubnetGroupCommand(output, context);
    };
    return CreateReplicationSubnetGroupCommand;
}($Command));
export { CreateReplicationSubnetGroupCommand };
//# sourceMappingURL=CreateReplicationSubnetGroupCommand.js.map