import { __extends } from "tslib";
import { CreatePackagingGroupRequest, CreatePackagingGroupResponse } from "../models/models_0";
import { deserializeAws_restJson1CreatePackagingGroupCommand, serializeAws_restJson1CreatePackagingGroupCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Creates a new MediaPackage VOD PackagingGroup resource.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaPackageVodClient, CreatePackagingGroupCommand } from "@aws-sdk/client-mediapackage-vod"; // ES Modules import
 * // const { MediaPackageVodClient, CreatePackagingGroupCommand } = require("@aws-sdk/client-mediapackage-vod"); // CommonJS import
 * const client = new MediaPackageVodClient(config);
 * const command = new CreatePackagingGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreatePackagingGroupCommandInput} for command's `input` shape.
 * @see {@link CreatePackagingGroupCommandOutput} for command's `response` shape.
 * @see {@link MediaPackageVodClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreatePackagingGroupCommand = /** @class */ (function (_super) {
    __extends(CreatePackagingGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreatePackagingGroupCommand(input) {
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
    CreatePackagingGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaPackageVodClient";
        var commandName = "CreatePackagingGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreatePackagingGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreatePackagingGroupResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreatePackagingGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreatePackagingGroupCommand(input, context);
    };
    CreatePackagingGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreatePackagingGroupCommand(output, context);
    };
    return CreatePackagingGroupCommand;
}($Command));
export { CreatePackagingGroupCommand };
//# sourceMappingURL=CreatePackagingGroupCommand.js.map