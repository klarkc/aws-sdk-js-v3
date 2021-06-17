import { __extends } from "tslib";
import { ListPartnerEventSourcesRequest, ListPartnerEventSourcesResponse } from "../models/models_0";
import { deserializeAws_json1_1ListPartnerEventSourcesCommand, serializeAws_json1_1ListPartnerEventSourcesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>An SaaS partner can use this operation to list all the partner event source names that
 *       they have created. This operation is not used by AWS customers.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchEventsClient, ListPartnerEventSourcesCommand } from "@aws-sdk/client-cloudwatch-events"; // ES Modules import
 * // const { CloudWatchEventsClient, ListPartnerEventSourcesCommand } = require("@aws-sdk/client-cloudwatch-events"); // CommonJS import
 * const client = new CloudWatchEventsClient(config);
 * const command = new ListPartnerEventSourcesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPartnerEventSourcesCommandInput} for command's `input` shape.
 * @see {@link ListPartnerEventSourcesCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchEventsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListPartnerEventSourcesCommand = /** @class */ (function (_super) {
    __extends(ListPartnerEventSourcesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListPartnerEventSourcesCommand(input) {
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
    ListPartnerEventSourcesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CloudWatchEventsClient";
        var commandName = "ListPartnerEventSourcesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListPartnerEventSourcesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListPartnerEventSourcesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListPartnerEventSourcesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListPartnerEventSourcesCommand(input, context);
    };
    ListPartnerEventSourcesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListPartnerEventSourcesCommand(output, context);
    };
    return ListPartnerEventSourcesCommand;
}($Command));
export { ListPartnerEventSourcesCommand };
//# sourceMappingURL=ListPartnerEventSourcesCommand.js.map