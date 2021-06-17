import { __extends } from "tslib";
import { ListAssociationsRequest, ListAssociationsResult } from "../models/models_1";
import { deserializeAws_json1_1ListAssociationsCommand, serializeAws_json1_1ListAssociationsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns all State Manager associations in the current AWS account and Region. You can limit
 *    the results to a specific State Manager association document or instance by specifying a
 *    filter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, ListAssociationsCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, ListAssociationsCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new ListAssociationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAssociationsCommandInput} for command's `input` shape.
 * @see {@link ListAssociationsCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListAssociationsCommand = /** @class */ (function (_super) {
    __extends(ListAssociationsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListAssociationsCommand(input) {
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
    ListAssociationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "ListAssociationsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListAssociationsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListAssociationsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListAssociationsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListAssociationsCommand(input, context);
    };
    ListAssociationsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListAssociationsCommand(output, context);
    };
    return ListAssociationsCommand;
}($Command));
export { ListAssociationsCommand };
//# sourceMappingURL=ListAssociationsCommand.js.map