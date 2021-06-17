import { __extends } from "tslib";
import { UpdatePackagingGroupRequest, UpdatePackagingGroupResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdatePackagingGroupCommand, serializeAws_restJson1UpdatePackagingGroupCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Updates a specific packaging group. You can't change the id attribute or any other system-generated attributes.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaPackageVodClient, UpdatePackagingGroupCommand } from "@aws-sdk/client-mediapackage-vod"; // ES Modules import
 * // const { MediaPackageVodClient, UpdatePackagingGroupCommand } = require("@aws-sdk/client-mediapackage-vod"); // CommonJS import
 * const client = new MediaPackageVodClient(config);
 * const command = new UpdatePackagingGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdatePackagingGroupCommandInput} for command's `input` shape.
 * @see {@link UpdatePackagingGroupCommandOutput} for command's `response` shape.
 * @see {@link MediaPackageVodClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdatePackagingGroupCommand = /** @class */ (function (_super) {
    __extends(UpdatePackagingGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdatePackagingGroupCommand(input) {
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
    UpdatePackagingGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaPackageVodClient";
        var commandName = "UpdatePackagingGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdatePackagingGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdatePackagingGroupResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdatePackagingGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdatePackagingGroupCommand(input, context);
    };
    UpdatePackagingGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdatePackagingGroupCommand(output, context);
    };
    return UpdatePackagingGroupCommand;
}($Command));
export { UpdatePackagingGroupCommand };
//# sourceMappingURL=UpdatePackagingGroupCommand.js.map