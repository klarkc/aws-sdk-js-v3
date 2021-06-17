import { __extends } from "tslib";
import { ListOpsItemRelatedItemsRequest, ListOpsItemRelatedItemsResponse } from "../models/models_1";
import { deserializeAws_json1_1ListOpsItemRelatedItemsCommand, serializeAws_json1_1ListOpsItemRelatedItemsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists all related-item resources associated with an OpsItem.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, ListOpsItemRelatedItemsCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, ListOpsItemRelatedItemsCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new ListOpsItemRelatedItemsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListOpsItemRelatedItemsCommandInput} for command's `input` shape.
 * @see {@link ListOpsItemRelatedItemsCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListOpsItemRelatedItemsCommand = /** @class */ (function (_super) {
    __extends(ListOpsItemRelatedItemsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListOpsItemRelatedItemsCommand(input) {
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
    ListOpsItemRelatedItemsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "ListOpsItemRelatedItemsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListOpsItemRelatedItemsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListOpsItemRelatedItemsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListOpsItemRelatedItemsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListOpsItemRelatedItemsCommand(input, context);
    };
    ListOpsItemRelatedItemsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListOpsItemRelatedItemsCommand(output, context);
    };
    return ListOpsItemRelatedItemsCommand;
}($Command));
export { ListOpsItemRelatedItemsCommand };
//# sourceMappingURL=ListOpsItemRelatedItemsCommand.js.map