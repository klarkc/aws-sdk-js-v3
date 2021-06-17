import { __extends } from "tslib";
import { RegisterEventTopicRequest, RegisterEventTopicResult } from "../models/models_0";
import { deserializeAws_json1_1RegisterEventTopicCommand, serializeAws_json1_1RegisterEventTopicCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Associates a directory with an SNS topic. This establishes the directory as a publisher to the specified SNS topic. You can then receive email or text (SMS) messages when the status of your directory changes. You get notified if your directory goes from an Active status to an Impaired or Inoperable status. You also receive a notification when the directory returns to an Active status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, RegisterEventTopicCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, RegisterEventTopicCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new RegisterEventTopicCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegisterEventTopicCommandInput} for command's `input` shape.
 * @see {@link RegisterEventTopicCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RegisterEventTopicCommand = /** @class */ (function (_super) {
    __extends(RegisterEventTopicCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RegisterEventTopicCommand(input) {
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
    RegisterEventTopicCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DirectoryServiceClient";
        var commandName = "RegisterEventTopicCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RegisterEventTopicRequest.filterSensitiveLog,
            outputFilterSensitiveLog: RegisterEventTopicResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RegisterEventTopicCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1RegisterEventTopicCommand(input, context);
    };
    RegisterEventTopicCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1RegisterEventTopicCommand(output, context);
    };
    return RegisterEventTopicCommand;
}($Command));
export { RegisterEventTopicCommand };
//# sourceMappingURL=RegisterEventTopicCommand.js.map