import { __extends } from "tslib";
import { UpdateLocationObjectStorageRequest, UpdateLocationObjectStorageResponse } from "../models/models_0";
import { deserializeAws_json1_1UpdateLocationObjectStorageCommand, serializeAws_json1_1UpdateLocationObjectStorageCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates some of the parameters of a previously created location for self-managed object
 *       storage server access. For information about creating a self-managed object storage location,
 *       see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-object-location.html">Creating a location for object storage</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, UpdateLocationObjectStorageCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, UpdateLocationObjectStorageCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const command = new UpdateLocationObjectStorageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateLocationObjectStorageCommandInput} for command's `input` shape.
 * @see {@link UpdateLocationObjectStorageCommandOutput} for command's `response` shape.
 * @see {@link DataSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateLocationObjectStorageCommand = /** @class */ (function (_super) {
    __extends(UpdateLocationObjectStorageCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateLocationObjectStorageCommand(input) {
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
    UpdateLocationObjectStorageCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DataSyncClient";
        var commandName = "UpdateLocationObjectStorageCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateLocationObjectStorageRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateLocationObjectStorageResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateLocationObjectStorageCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateLocationObjectStorageCommand(input, context);
    };
    UpdateLocationObjectStorageCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateLocationObjectStorageCommand(output, context);
    };
    return UpdateLocationObjectStorageCommand;
}($Command));
export { UpdateLocationObjectStorageCommand };
//# sourceMappingURL=UpdateLocationObjectStorageCommand.js.map