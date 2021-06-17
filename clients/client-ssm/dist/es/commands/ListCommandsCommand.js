import { __extends } from "tslib";
import { ListCommandsRequest, ListCommandsResult } from "../models/models_1";
import { deserializeAws_json1_1ListCommandsCommand, serializeAws_json1_1ListCommandsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the commands requested by users of the AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, ListCommandsCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, ListCommandsCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new ListCommandsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListCommandsCommandInput} for command's `input` shape.
 * @see {@link ListCommandsCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListCommandsCommand = /** @class */ (function (_super) {
    __extends(ListCommandsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListCommandsCommand(input) {
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
    ListCommandsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "ListCommandsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListCommandsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListCommandsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListCommandsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListCommandsCommand(input, context);
    };
    ListCommandsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListCommandsCommand(output, context);
    };
    return ListCommandsCommand;
}($Command));
export { ListCommandsCommand };
//# sourceMappingURL=ListCommandsCommand.js.map