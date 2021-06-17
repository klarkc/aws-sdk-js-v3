import { __extends } from "tslib";
import { CreateTestGridUrlRequest, CreateTestGridUrlResult } from "../models/models_0";
import { deserializeAws_json1_1CreateTestGridUrlCommand, serializeAws_json1_1CreateTestGridUrlCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a signed, short-term URL that can be passed to a Selenium <code>RemoteWebDriver</code>
 *          constructor.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, CreateTestGridUrlCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, CreateTestGridUrlCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new CreateTestGridUrlCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateTestGridUrlCommandInput} for command's `input` shape.
 * @see {@link CreateTestGridUrlCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateTestGridUrlCommand = /** @class */ (function (_super) {
    __extends(CreateTestGridUrlCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateTestGridUrlCommand(input) {
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
    CreateTestGridUrlCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DeviceFarmClient";
        var commandName = "CreateTestGridUrlCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateTestGridUrlRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateTestGridUrlResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateTestGridUrlCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateTestGridUrlCommand(input, context);
    };
    CreateTestGridUrlCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateTestGridUrlCommand(output, context);
    };
    return CreateTestGridUrlCommand;
}($Command));
export { CreateTestGridUrlCommand };
//# sourceMappingURL=CreateTestGridUrlCommand.js.map