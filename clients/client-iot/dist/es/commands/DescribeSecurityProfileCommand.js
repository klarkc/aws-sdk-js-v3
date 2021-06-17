import { __extends } from "tslib";
import { DescribeSecurityProfileRequest, DescribeSecurityProfileResponse } from "../models/models_1";
import { deserializeAws_restJson1DescribeSecurityProfileCommand, serializeAws_restJson1DescribeSecurityProfileCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about a Device Defender security profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DescribeSecurityProfileCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DescribeSecurityProfileCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DescribeSecurityProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeSecurityProfileCommandInput} for command's `input` shape.
 * @see {@link DescribeSecurityProfileCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeSecurityProfileCommand = /** @class */ (function (_super) {
    __extends(DescribeSecurityProfileCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeSecurityProfileCommand(input) {
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
    DescribeSecurityProfileCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "DescribeSecurityProfileCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeSecurityProfileRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeSecurityProfileResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeSecurityProfileCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeSecurityProfileCommand(input, context);
    };
    DescribeSecurityProfileCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeSecurityProfileCommand(output, context);
    };
    return DescribeSecurityProfileCommand;
}($Command));
export { DescribeSecurityProfileCommand };
//# sourceMappingURL=DescribeSecurityProfileCommand.js.map