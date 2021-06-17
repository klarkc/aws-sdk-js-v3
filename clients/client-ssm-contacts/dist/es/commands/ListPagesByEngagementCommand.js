import { __extends } from "tslib";
import { ListPagesByEngagementRequest, ListPagesByEngagementResult } from "../models/models_0";
import { deserializeAws_json1_1ListPagesByEngagementCommand, serializeAws_json1_1ListPagesByEngagementCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the engagements to contact channels that occurred by engaging a contact.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMContactsClient, ListPagesByEngagementCommand } from "@aws-sdk/client-ssm-contacts"; // ES Modules import
 * // const { SSMContactsClient, ListPagesByEngagementCommand } = require("@aws-sdk/client-ssm-contacts"); // CommonJS import
 * const client = new SSMContactsClient(config);
 * const command = new ListPagesByEngagementCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPagesByEngagementCommandInput} for command's `input` shape.
 * @see {@link ListPagesByEngagementCommandOutput} for command's `response` shape.
 * @see {@link SSMContactsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListPagesByEngagementCommand = /** @class */ (function (_super) {
    __extends(ListPagesByEngagementCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListPagesByEngagementCommand(input) {
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
    ListPagesByEngagementCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMContactsClient";
        var commandName = "ListPagesByEngagementCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListPagesByEngagementRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListPagesByEngagementResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListPagesByEngagementCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListPagesByEngagementCommand(input, context);
    };
    ListPagesByEngagementCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListPagesByEngagementCommand(output, context);
    };
    return ListPagesByEngagementCommand;
}($Command));
export { ListPagesByEngagementCommand };
//# sourceMappingURL=ListPagesByEngagementCommand.js.map