import { __extends } from "tslib";
import { DescribePackagingConfigurationRequest, DescribePackagingConfigurationResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribePackagingConfigurationCommand, serializeAws_restJson1DescribePackagingConfigurationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Returns a description of a MediaPackage VOD PackagingConfiguration resource.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaPackageVodClient, DescribePackagingConfigurationCommand } from "@aws-sdk/client-mediapackage-vod"; // ES Modules import
 * // const { MediaPackageVodClient, DescribePackagingConfigurationCommand } = require("@aws-sdk/client-mediapackage-vod"); // CommonJS import
 * const client = new MediaPackageVodClient(config);
 * const command = new DescribePackagingConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribePackagingConfigurationCommandInput} for command's `input` shape.
 * @see {@link DescribePackagingConfigurationCommandOutput} for command's `response` shape.
 * @see {@link MediaPackageVodClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribePackagingConfigurationCommand = /** @class */ (function (_super) {
    __extends(DescribePackagingConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribePackagingConfigurationCommand(input) {
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
    DescribePackagingConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaPackageVodClient";
        var commandName = "DescribePackagingConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribePackagingConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribePackagingConfigurationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribePackagingConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribePackagingConfigurationCommand(input, context);
    };
    DescribePackagingConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribePackagingConfigurationCommand(output, context);
    };
    return DescribePackagingConfigurationCommand;
}($Command));
export { DescribePackagingConfigurationCommand };
//# sourceMappingURL=DescribePackagingConfigurationCommand.js.map