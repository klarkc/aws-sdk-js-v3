import { __extends } from "tslib";
import { DeregisterEventTopicRequest, DeregisterEventTopicResult } from "../models/models_0";
import { deserializeAws_json1_1DeregisterEventTopicCommand, serializeAws_json1_1DeregisterEventTopicCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes the specified directory as a publisher to the specified SNS topic.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, DeregisterEventTopicCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, DeregisterEventTopicCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new DeregisterEventTopicCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeregisterEventTopicCommandInput} for command's `input` shape.
 * @see {@link DeregisterEventTopicCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeregisterEventTopicCommand = /** @class */ (function (_super) {
    __extends(DeregisterEventTopicCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeregisterEventTopicCommand(input) {
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
    DeregisterEventTopicCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DirectoryServiceClient";
        var commandName = "DeregisterEventTopicCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeregisterEventTopicRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeregisterEventTopicResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeregisterEventTopicCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeregisterEventTopicCommand(input, context);
    };
    DeregisterEventTopicCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeregisterEventTopicCommand(output, context);
    };
    return DeregisterEventTopicCommand;
}($Command));
export { DeregisterEventTopicCommand };
//# sourceMappingURL=DeregisterEventTopicCommand.js.map