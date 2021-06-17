import { __extends } from "tslib";
import { UpdateLocationNfsRequest, UpdateLocationNfsResponse } from "../models/models_0";
import { deserializeAws_json1_1UpdateLocationNfsCommand, serializeAws_json1_1UpdateLocationNfsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates some of the parameters of a previously created location for Network File System (NFS) access.
 *       For information about creating an NFS location, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-nfs-location.html">Creating a location for NFS</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, UpdateLocationNfsCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, UpdateLocationNfsCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const command = new UpdateLocationNfsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateLocationNfsCommandInput} for command's `input` shape.
 * @see {@link UpdateLocationNfsCommandOutput} for command's `response` shape.
 * @see {@link DataSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateLocationNfsCommand = /** @class */ (function (_super) {
    __extends(UpdateLocationNfsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateLocationNfsCommand(input) {
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
    UpdateLocationNfsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DataSyncClient";
        var commandName = "UpdateLocationNfsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateLocationNfsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateLocationNfsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateLocationNfsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateLocationNfsCommand(input, context);
    };
    UpdateLocationNfsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateLocationNfsCommand(output, context);
    };
    return UpdateLocationNfsCommand;
}($Command));
export { UpdateLocationNfsCommand };
//# sourceMappingURL=UpdateLocationNfsCommand.js.map