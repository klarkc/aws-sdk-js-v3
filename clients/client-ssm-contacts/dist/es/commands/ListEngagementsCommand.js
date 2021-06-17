import { __extends } from "tslib";
import { ListEngagementsRequest, ListEngagementsResult } from "../models/models_0";
import { deserializeAws_json1_1ListEngagementsCommand, serializeAws_json1_1ListEngagementsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists all engagements that have happened in an incident.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMContactsClient, ListEngagementsCommand } from "@aws-sdk/client-ssm-contacts"; // ES Modules import
 * // const { SSMContactsClient, ListEngagementsCommand } = require("@aws-sdk/client-ssm-contacts"); // CommonJS import
 * const client = new SSMContactsClient(config);
 * const command = new ListEngagementsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListEngagementsCommandInput} for command's `input` shape.
 * @see {@link ListEngagementsCommandOutput} for command's `response` shape.
 * @see {@link SSMContactsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListEngagementsCommand = /** @class */ (function (_super) {
    __extends(ListEngagementsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListEngagementsCommand(input) {
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
    ListEngagementsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMContactsClient";
        var commandName = "ListEngagementsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListEngagementsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListEngagementsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListEngagementsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListEngagementsCommand(input, context);
    };
    ListEngagementsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListEngagementsCommand(output, context);
    };
    return ListEngagementsCommand;
}($Command));
export { ListEngagementsCommand };
//# sourceMappingURL=ListEngagementsCommand.js.map