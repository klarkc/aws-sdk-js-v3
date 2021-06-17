import { __extends } from "tslib";
import { ListContactsRequest, ListContactsResult } from "../models/models_0";
import { deserializeAws_json1_1ListContactsCommand, serializeAws_json1_1ListContactsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists all contacts and escalation plans in Incident Manager.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMContactsClient, ListContactsCommand } from "@aws-sdk/client-ssm-contacts"; // ES Modules import
 * // const { SSMContactsClient, ListContactsCommand } = require("@aws-sdk/client-ssm-contacts"); // CommonJS import
 * const client = new SSMContactsClient(config);
 * const command = new ListContactsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListContactsCommandInput} for command's `input` shape.
 * @see {@link ListContactsCommandOutput} for command's `response` shape.
 * @see {@link SSMContactsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListContactsCommand = /** @class */ (function (_super) {
    __extends(ListContactsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListContactsCommand(input) {
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
    ListContactsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMContactsClient";
        var commandName = "ListContactsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListContactsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListContactsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListContactsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListContactsCommand(input, context);
    };
    ListContactsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListContactsCommand(output, context);
    };
    return ListContactsCommand;
}($Command));
export { ListContactsCommand };
//# sourceMappingURL=ListContactsCommand.js.map