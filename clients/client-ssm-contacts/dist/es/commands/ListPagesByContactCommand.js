import { __extends } from "tslib";
import { ListPagesByContactRequest, ListPagesByContactResult } from "../models/models_0";
import { deserializeAws_json1_1ListPagesByContactCommand, serializeAws_json1_1ListPagesByContactCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the engagements to a contact's contact channels.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMContactsClient, ListPagesByContactCommand } from "@aws-sdk/client-ssm-contacts"; // ES Modules import
 * // const { SSMContactsClient, ListPagesByContactCommand } = require("@aws-sdk/client-ssm-contacts"); // CommonJS import
 * const client = new SSMContactsClient(config);
 * const command = new ListPagesByContactCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPagesByContactCommandInput} for command's `input` shape.
 * @see {@link ListPagesByContactCommandOutput} for command's `response` shape.
 * @see {@link SSMContactsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListPagesByContactCommand = /** @class */ (function (_super) {
    __extends(ListPagesByContactCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListPagesByContactCommand(input) {
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
    ListPagesByContactCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMContactsClient";
        var commandName = "ListPagesByContactCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListPagesByContactRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListPagesByContactResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListPagesByContactCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListPagesByContactCommand(input, context);
    };
    ListPagesByContactCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListPagesByContactCommand(output, context);
    };
    return ListPagesByContactCommand;
}($Command));
export { ListPagesByContactCommand };
//# sourceMappingURL=ListPagesByContactCommand.js.map