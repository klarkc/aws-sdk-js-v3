import { __extends } from "tslib";
import { CreateTableRequest, CreateTableResponse } from "../models/models_0";
import { deserializeAws_json1_0CreateTableCommand, serializeAws_json1_0CreateTableCommand, } from "../protocols/Aws_json1_0";
import { getEndpointDiscoveryRequiredPlugin } from "@aws-sdk/middleware-endpoint-discovery";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>The CreateTable operation adds a new table to an existing database in your account. In an AWS account,
 *       table names must be at least unique within each Region if they are in the same database.
 *       You may have identical table names in the same Region if the tables are in seperate databases.
 *          While creating the table, you must specify the table name, database name,
 *          and the retention properties.
 *          Service quotas apply. For more information, see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Access Management</a>
 *          in the Timestream Developer Guide.
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TimestreamWriteClient, CreateTableCommand } from "@aws-sdk/client-timestream-write"; // ES Modules import
 * // const { TimestreamWriteClient, CreateTableCommand } = require("@aws-sdk/client-timestream-write"); // CommonJS import
 * const client = new TimestreamWriteClient(config);
 * const command = new CreateTableCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateTableCommandInput} for command's `input` shape.
 * @see {@link CreateTableCommandOutput} for command's `response` shape.
 * @see {@link TimestreamWriteClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateTableCommand = /** @class */ (function (_super) {
    __extends(CreateTableCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateTableCommand(input) {
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
    CreateTableCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointDiscoveryRequiredPlugin(configuration, { clientStack: clientStack, options: options }));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "TimestreamWriteClient";
        var commandName = "CreateTableCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateTableRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateTableResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateTableCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0CreateTableCommand(input, context);
    };
    CreateTableCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0CreateTableCommand(output, context);
    };
    return CreateTableCommand;
}($Command));
export { CreateTableCommand };
//# sourceMappingURL=CreateTableCommand.js.map