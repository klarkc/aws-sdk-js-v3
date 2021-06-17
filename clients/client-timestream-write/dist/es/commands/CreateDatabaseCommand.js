import { __extends } from "tslib";
import { CreateDatabaseRequest, CreateDatabaseResponse } from "../models/models_0";
import { deserializeAws_json1_0CreateDatabaseCommand, serializeAws_json1_0CreateDatabaseCommand, } from "../protocols/Aws_json1_0";
import { getEndpointDiscoveryRequiredPlugin } from "@aws-sdk/middleware-endpoint-discovery";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new Timestream database. If the KMS key is not specified, the database will be encrypted with a Timestream managed KMS key located in your account.
 *          Refer to <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk">AWS managed KMS keys</a> for more info.
 *          Service quotas apply. For more information, see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Access Management</a> in the Timestream Developer Guide.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TimestreamWriteClient, CreateDatabaseCommand } from "@aws-sdk/client-timestream-write"; // ES Modules import
 * // const { TimestreamWriteClient, CreateDatabaseCommand } = require("@aws-sdk/client-timestream-write"); // CommonJS import
 * const client = new TimestreamWriteClient(config);
 * const command = new CreateDatabaseCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDatabaseCommandInput} for command's `input` shape.
 * @see {@link CreateDatabaseCommandOutput} for command's `response` shape.
 * @see {@link TimestreamWriteClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateDatabaseCommand = /** @class */ (function (_super) {
    __extends(CreateDatabaseCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateDatabaseCommand(input) {
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
    CreateDatabaseCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointDiscoveryRequiredPlugin(configuration, { clientStack: clientStack, options: options }));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "TimestreamWriteClient";
        var commandName = "CreateDatabaseCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateDatabaseRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateDatabaseResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateDatabaseCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0CreateDatabaseCommand(input, context);
    };
    CreateDatabaseCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0CreateDatabaseCommand(output, context);
    };
    return CreateDatabaseCommand;
}($Command));
export { CreateDatabaseCommand };
//# sourceMappingURL=CreateDatabaseCommand.js.map