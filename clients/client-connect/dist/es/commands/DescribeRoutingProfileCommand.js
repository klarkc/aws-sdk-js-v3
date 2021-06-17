import { __extends } from "tslib";
import { DescribeRoutingProfileRequest, DescribeRoutingProfileResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeRoutingProfileCommand, serializeAws_restJson1DescribeRoutingProfileCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the specified routing profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DescribeRoutingProfileCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DescribeRoutingProfileCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new DescribeRoutingProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeRoutingProfileCommandInput} for command's `input` shape.
 * @see {@link DescribeRoutingProfileCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeRoutingProfileCommand = /** @class */ (function (_super) {
    __extends(DescribeRoutingProfileCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeRoutingProfileCommand(input) {
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
    DescribeRoutingProfileCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConnectClient";
        var commandName = "DescribeRoutingProfileCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeRoutingProfileRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeRoutingProfileResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeRoutingProfileCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeRoutingProfileCommand(input, context);
    };
    DescribeRoutingProfileCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeRoutingProfileCommand(output, context);
    };
    return DescribeRoutingProfileCommand;
}($Command));
export { DescribeRoutingProfileCommand };
//# sourceMappingURL=DescribeRoutingProfileCommand.js.map