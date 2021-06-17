import { __extends } from "tslib";
import { DescribePackagingGroupRequest, DescribePackagingGroupResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribePackagingGroupCommand, serializeAws_restJson1DescribePackagingGroupCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Returns a description of a MediaPackage VOD PackagingGroup resource.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaPackageVodClient, DescribePackagingGroupCommand } from "@aws-sdk/client-mediapackage-vod"; // ES Modules import
 * // const { MediaPackageVodClient, DescribePackagingGroupCommand } = require("@aws-sdk/client-mediapackage-vod"); // CommonJS import
 * const client = new MediaPackageVodClient(config);
 * const command = new DescribePackagingGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribePackagingGroupCommandInput} for command's `input` shape.
 * @see {@link DescribePackagingGroupCommandOutput} for command's `response` shape.
 * @see {@link MediaPackageVodClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribePackagingGroupCommand = /** @class */ (function (_super) {
    __extends(DescribePackagingGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribePackagingGroupCommand(input) {
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
    DescribePackagingGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaPackageVodClient";
        var commandName = "DescribePackagingGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribePackagingGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribePackagingGroupResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribePackagingGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribePackagingGroupCommand(input, context);
    };
    DescribePackagingGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribePackagingGroupCommand(output, context);
    };
    return DescribePackagingGroupCommand;
}($Command));
export { DescribePackagingGroupCommand };
//# sourceMappingURL=DescribePackagingGroupCommand.js.map