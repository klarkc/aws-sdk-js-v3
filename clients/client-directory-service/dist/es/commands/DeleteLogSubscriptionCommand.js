import { __extends } from "tslib";
import { DeleteLogSubscriptionRequest, DeleteLogSubscriptionResult } from "../models/models_0";
import { deserializeAws_json1_1DeleteLogSubscriptionCommand, serializeAws_json1_1DeleteLogSubscriptionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified log subscription.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, DeleteLogSubscriptionCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, DeleteLogSubscriptionCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new DeleteLogSubscriptionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteLogSubscriptionCommandInput} for command's `input` shape.
 * @see {@link DeleteLogSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteLogSubscriptionCommand = /** @class */ (function (_super) {
    __extends(DeleteLogSubscriptionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteLogSubscriptionCommand(input) {
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
    DeleteLogSubscriptionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DirectoryServiceClient";
        var commandName = "DeleteLogSubscriptionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteLogSubscriptionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteLogSubscriptionResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteLogSubscriptionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteLogSubscriptionCommand(input, context);
    };
    DeleteLogSubscriptionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteLogSubscriptionCommand(output, context);
    };
    return DeleteLogSubscriptionCommand;
}($Command));
export { DeleteLogSubscriptionCommand };
//# sourceMappingURL=DeleteLogSubscriptionCommand.js.map