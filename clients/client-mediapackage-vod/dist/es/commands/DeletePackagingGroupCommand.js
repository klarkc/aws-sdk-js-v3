import { __extends } from "tslib";
import { DeletePackagingGroupRequest, DeletePackagingGroupResponse } from "../models/models_0";
import { deserializeAws_restJson1DeletePackagingGroupCommand, serializeAws_restJson1DeletePackagingGroupCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Deletes a MediaPackage VOD PackagingGroup resource.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaPackageVodClient, DeletePackagingGroupCommand } from "@aws-sdk/client-mediapackage-vod"; // ES Modules import
 * // const { MediaPackageVodClient, DeletePackagingGroupCommand } = require("@aws-sdk/client-mediapackage-vod"); // CommonJS import
 * const client = new MediaPackageVodClient(config);
 * const command = new DeletePackagingGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeletePackagingGroupCommandInput} for command's `input` shape.
 * @see {@link DeletePackagingGroupCommandOutput} for command's `response` shape.
 * @see {@link MediaPackageVodClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeletePackagingGroupCommand = /** @class */ (function (_super) {
    __extends(DeletePackagingGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeletePackagingGroupCommand(input) {
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
    DeletePackagingGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaPackageVodClient";
        var commandName = "DeletePackagingGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeletePackagingGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeletePackagingGroupResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeletePackagingGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeletePackagingGroupCommand(input, context);
    };
    DeletePackagingGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeletePackagingGroupCommand(output, context);
    };
    return DeletePackagingGroupCommand;
}($Command));
export { DeletePackagingGroupCommand };
//# sourceMappingURL=DeletePackagingGroupCommand.js.map