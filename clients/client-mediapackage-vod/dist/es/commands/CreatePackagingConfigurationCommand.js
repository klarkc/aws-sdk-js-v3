import { __extends } from "tslib";
import { CreatePackagingConfigurationRequest, CreatePackagingConfigurationResponse } from "../models/models_0";
import { deserializeAws_restJson1CreatePackagingConfigurationCommand, serializeAws_restJson1CreatePackagingConfigurationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Creates a new MediaPackage VOD PackagingConfiguration resource.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaPackageVodClient, CreatePackagingConfigurationCommand } from "@aws-sdk/client-mediapackage-vod"; // ES Modules import
 * // const { MediaPackageVodClient, CreatePackagingConfigurationCommand } = require("@aws-sdk/client-mediapackage-vod"); // CommonJS import
 * const client = new MediaPackageVodClient(config);
 * const command = new CreatePackagingConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreatePackagingConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreatePackagingConfigurationCommandOutput} for command's `response` shape.
 * @see {@link MediaPackageVodClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreatePackagingConfigurationCommand = /** @class */ (function (_super) {
    __extends(CreatePackagingConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreatePackagingConfigurationCommand(input) {
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
    CreatePackagingConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaPackageVodClient";
        var commandName = "CreatePackagingConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreatePackagingConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreatePackagingConfigurationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreatePackagingConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreatePackagingConfigurationCommand(input, context);
    };
    CreatePackagingConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreatePackagingConfigurationCommand(output, context);
    };
    return CreatePackagingConfigurationCommand;
}($Command));
export { CreatePackagingConfigurationCommand };
//# sourceMappingURL=CreatePackagingConfigurationCommand.js.map