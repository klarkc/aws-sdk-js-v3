import { __extends } from "tslib";
import { CreateSecurityProfileRequest, CreateSecurityProfileResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateSecurityProfileCommand, serializeAws_restJson1CreateSecurityProfileCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a Device Defender security profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CreateSecurityProfileCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CreateSecurityProfileCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new CreateSecurityProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateSecurityProfileCommandInput} for command's `input` shape.
 * @see {@link CreateSecurityProfileCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateSecurityProfileCommand = /** @class */ (function (_super) {
    __extends(CreateSecurityProfileCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateSecurityProfileCommand(input) {
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
    CreateSecurityProfileCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "CreateSecurityProfileCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateSecurityProfileRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateSecurityProfileResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateSecurityProfileCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateSecurityProfileCommand(input, context);
    };
    CreateSecurityProfileCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateSecurityProfileCommand(output, context);
    };
    return CreateSecurityProfileCommand;
}($Command));
export { CreateSecurityProfileCommand };
//# sourceMappingURL=CreateSecurityProfileCommand.js.map