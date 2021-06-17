import { __extends } from "tslib";
import { DescribeInputSecurityGroupRequest, DescribeInputSecurityGroupResponse } from "../models/models_1";
import { deserializeAws_restJson1DescribeInputSecurityGroupCommand, serializeAws_restJson1DescribeInputSecurityGroupCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Produces a summary of an Input Security Group
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, DescribeInputSecurityGroupCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, DescribeInputSecurityGroupCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const command = new DescribeInputSecurityGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeInputSecurityGroupCommandInput} for command's `input` shape.
 * @see {@link DescribeInputSecurityGroupCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeInputSecurityGroupCommand = /** @class */ (function (_super) {
    __extends(DescribeInputSecurityGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeInputSecurityGroupCommand(input) {
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
    DescribeInputSecurityGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaLiveClient";
        var commandName = "DescribeInputSecurityGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeInputSecurityGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeInputSecurityGroupResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeInputSecurityGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeInputSecurityGroupCommand(input, context);
    };
    DescribeInputSecurityGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeInputSecurityGroupCommand(output, context);
    };
    return DescribeInputSecurityGroupCommand;
}($Command));
export { DescribeInputSecurityGroupCommand };
//# sourceMappingURL=DescribeInputSecurityGroupCommand.js.map