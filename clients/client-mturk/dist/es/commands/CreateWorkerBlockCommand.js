import { __extends } from "tslib";
import { CreateWorkerBlockRequest, CreateWorkerBlockResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateWorkerBlockCommand, serializeAws_json1_1CreateWorkerBlockCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>The <code>CreateWorkerBlock</code> operation allows you to prevent a Worker from working on your HITs. For example, you can block a Worker who is producing poor quality work. You can block up to 100,000 Workers.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, CreateWorkerBlockCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, CreateWorkerBlockCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const command = new CreateWorkerBlockCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateWorkerBlockCommandInput} for command's `input` shape.
 * @see {@link CreateWorkerBlockCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateWorkerBlockCommand = /** @class */ (function (_super) {
    __extends(CreateWorkerBlockCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateWorkerBlockCommand(input) {
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
    CreateWorkerBlockCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MTurkClient";
        var commandName = "CreateWorkerBlockCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateWorkerBlockRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateWorkerBlockResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateWorkerBlockCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateWorkerBlockCommand(input, context);
    };
    CreateWorkerBlockCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateWorkerBlockCommand(output, context);
    };
    return CreateWorkerBlockCommand;
}($Command));
export { CreateWorkerBlockCommand };
//# sourceMappingURL=CreateWorkerBlockCommand.js.map