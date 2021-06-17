import { __extends } from "tslib";
import { CreateLocationObjectStorageRequest, CreateLocationObjectStorageResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateLocationObjectStorageCommand, serializeAws_json1_1CreateLocationObjectStorageCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an endpoint for a self-managed object storage bucket. For more information
 *       about self-managed object storage locations, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-object-location.html">Creating a location for object storage</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, CreateLocationObjectStorageCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, CreateLocationObjectStorageCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const command = new CreateLocationObjectStorageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateLocationObjectStorageCommandInput} for command's `input` shape.
 * @see {@link CreateLocationObjectStorageCommandOutput} for command's `response` shape.
 * @see {@link DataSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateLocationObjectStorageCommand = /** @class */ (function (_super) {
    __extends(CreateLocationObjectStorageCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateLocationObjectStorageCommand(input) {
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
    CreateLocationObjectStorageCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DataSyncClient";
        var commandName = "CreateLocationObjectStorageCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateLocationObjectStorageRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateLocationObjectStorageResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateLocationObjectStorageCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateLocationObjectStorageCommand(input, context);
    };
    CreateLocationObjectStorageCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateLocationObjectStorageCommand(output, context);
    };
    return CreateLocationObjectStorageCommand;
}($Command));
export { CreateLocationObjectStorageCommand };
//# sourceMappingURL=CreateLocationObjectStorageCommand.js.map