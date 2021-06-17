import { __extends } from "tslib";
import { CreateAppRequest, CreateAppResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateAppCommand, serializeAws_json1_1CreateAppCommand } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an application. An application consists of one or more server groups. Each
 *             server group contain one or more servers.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, CreateAppCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, CreateAppCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * const client = new SMSClient(config);
 * const command = new CreateAppCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAppCommandInput} for command's `input` shape.
 * @see {@link CreateAppCommandOutput} for command's `response` shape.
 * @see {@link SMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateAppCommand = /** @class */ (function (_super) {
    __extends(CreateAppCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateAppCommand(input) {
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
    CreateAppCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SMSClient";
        var commandName = "CreateAppCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateAppRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateAppResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateAppCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateAppCommand(input, context);
    };
    CreateAppCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateAppCommand(output, context);
    };
    return CreateAppCommand;
}($Command));
export { CreateAppCommand };
//# sourceMappingURL=CreateAppCommand.js.map