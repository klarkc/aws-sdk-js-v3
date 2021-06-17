import { __extends } from "tslib";
import { UpdateLocationSmbRequest, UpdateLocationSmbResponse } from "../models/models_0";
import { deserializeAws_json1_1UpdateLocationSmbCommand, serializeAws_json1_1UpdateLocationSmbCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates some of the parameters of a previously created location for Server Message Block
 *       (SMB) file system access. For information about creating an SMB location, see
 *       <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-smb-location.html">Creating a location for SMB</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, UpdateLocationSmbCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, UpdateLocationSmbCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const command = new UpdateLocationSmbCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateLocationSmbCommandInput} for command's `input` shape.
 * @see {@link UpdateLocationSmbCommandOutput} for command's `response` shape.
 * @see {@link DataSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateLocationSmbCommand = /** @class */ (function (_super) {
    __extends(UpdateLocationSmbCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateLocationSmbCommand(input) {
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
    UpdateLocationSmbCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DataSyncClient";
        var commandName = "UpdateLocationSmbCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateLocationSmbRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateLocationSmbResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateLocationSmbCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateLocationSmbCommand(input, context);
    };
    UpdateLocationSmbCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateLocationSmbCommand(output, context);
    };
    return UpdateLocationSmbCommand;
}($Command));
export { UpdateLocationSmbCommand };
//# sourceMappingURL=UpdateLocationSmbCommand.js.map