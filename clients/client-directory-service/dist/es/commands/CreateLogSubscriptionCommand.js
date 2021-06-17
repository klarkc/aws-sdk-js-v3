import { __extends } from "tslib";
import { CreateLogSubscriptionRequest, CreateLogSubscriptionResult } from "../models/models_0";
import { deserializeAws_json1_1CreateLogSubscriptionCommand, serializeAws_json1_1CreateLogSubscriptionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a subscription to forward real-time Directory Service domain controller security
 *       logs to the specified Amazon CloudWatch log group in your AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, CreateLogSubscriptionCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, CreateLogSubscriptionCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new CreateLogSubscriptionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateLogSubscriptionCommandInput} for command's `input` shape.
 * @see {@link CreateLogSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateLogSubscriptionCommand = /** @class */ (function (_super) {
    __extends(CreateLogSubscriptionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateLogSubscriptionCommand(input) {
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
    CreateLogSubscriptionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DirectoryServiceClient";
        var commandName = "CreateLogSubscriptionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateLogSubscriptionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateLogSubscriptionResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateLogSubscriptionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateLogSubscriptionCommand(input, context);
    };
    CreateLogSubscriptionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateLogSubscriptionCommand(output, context);
    };
    return CreateLogSubscriptionCommand;
}($Command));
export { CreateLogSubscriptionCommand };
//# sourceMappingURL=CreateLogSubscriptionCommand.js.map