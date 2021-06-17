import { __extends } from "tslib";
import { ListStudiosInput, ListStudiosOutput } from "../models/models_0";
import { deserializeAws_json1_1ListStudiosCommand, serializeAws_json1_1ListStudiosCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of all Amazon EMR Studios associated with the AWS account. The list
 *          includes details such as ID, Studio Access URL, and creation time for each Studio.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, ListStudiosCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, ListStudiosCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const command = new ListStudiosCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListStudiosCommandInput} for command's `input` shape.
 * @see {@link ListStudiosCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListStudiosCommand = /** @class */ (function (_super) {
    __extends(ListStudiosCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListStudiosCommand(input) {
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
    ListStudiosCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EMRClient";
        var commandName = "ListStudiosCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListStudiosInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListStudiosOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListStudiosCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListStudiosCommand(input, context);
    };
    ListStudiosCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListStudiosCommand(output, context);
    };
    return ListStudiosCommand;
}($Command));
export { ListStudiosCommand };
//# sourceMappingURL=ListStudiosCommand.js.map