import { __extends } from "tslib";
import { GetConsoleScreenshotRequest, GetConsoleScreenshotResult } from "../models/models_4";
import { deserializeAws_ec2GetConsoleScreenshotCommand, serializeAws_ec2GetConsoleScreenshotCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieve a JPG-format screenshot of a running instance to help with
 *             troubleshooting.</p>
 *         <p>The returned content is Base64-encoded.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetConsoleScreenshotCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetConsoleScreenshotCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new GetConsoleScreenshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetConsoleScreenshotCommandInput} for command's `input` shape.
 * @see {@link GetConsoleScreenshotCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetConsoleScreenshotCommand = /** @class */ (function (_super) {
    __extends(GetConsoleScreenshotCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetConsoleScreenshotCommand(input) {
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
    GetConsoleScreenshotCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "GetConsoleScreenshotCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetConsoleScreenshotRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetConsoleScreenshotResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetConsoleScreenshotCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2GetConsoleScreenshotCommand(input, context);
    };
    GetConsoleScreenshotCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2GetConsoleScreenshotCommand(output, context);
    };
    return GetConsoleScreenshotCommand;
}($Command));
export { GetConsoleScreenshotCommand };
//# sourceMappingURL=GetConsoleScreenshotCommand.js.map