import { __extends } from "tslib";
import { ListGroupsRequest, ListGroupsResponse } from "../models/models_0";
import { deserializeAws_json1_1ListGroupsCommand, serializeAws_json1_1ListGroupsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the attribute name and value of the group that you specified in the search. We only support <code>DisplayName</code> as a valid filter attribute path currently, and filter is required. This API returns minimum attributes, including <code>GroupId</code> and group <code>DisplayName</code> in the response.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IdentitystoreClient, ListGroupsCommand } from "@aws-sdk/client-identitystore"; // ES Modules import
 * // const { IdentitystoreClient, ListGroupsCommand } = require("@aws-sdk/client-identitystore"); // CommonJS import
 * const client = new IdentitystoreClient(config);
 * const command = new ListGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListGroupsCommandInput} for command's `input` shape.
 * @see {@link ListGroupsCommandOutput} for command's `response` shape.
 * @see {@link IdentitystoreClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListGroupsCommand = /** @class */ (function (_super) {
    __extends(ListGroupsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListGroupsCommand(input) {
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
    ListGroupsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IdentitystoreClient";
        var commandName = "ListGroupsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListGroupsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListGroupsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListGroupsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListGroupsCommand(input, context);
    };
    ListGroupsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListGroupsCommand(output, context);
    };
    return ListGroupsCommand;
}($Command));
export { ListGroupsCommand };
//# sourceMappingURL=ListGroupsCommand.js.map