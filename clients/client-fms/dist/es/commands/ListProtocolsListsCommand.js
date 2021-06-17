import { __extends } from "tslib";
import { ListProtocolsListsRequest, ListProtocolsListsResponse } from "../models/models_0";
import { deserializeAws_json1_1ListProtocolsListsCommand, serializeAws_json1_1ListProtocolsListsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns an array of <code>ProtocolsListDataSummary</code> objects.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, ListProtocolsListsCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, ListProtocolsListsCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * const client = new FMSClient(config);
 * const command = new ListProtocolsListsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListProtocolsListsCommandInput} for command's `input` shape.
 * @see {@link ListProtocolsListsCommandOutput} for command's `response` shape.
 * @see {@link FMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListProtocolsListsCommand = /** @class */ (function (_super) {
    __extends(ListProtocolsListsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListProtocolsListsCommand(input) {
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
    ListProtocolsListsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "FMSClient";
        var commandName = "ListProtocolsListsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListProtocolsListsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListProtocolsListsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListProtocolsListsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListProtocolsListsCommand(input, context);
    };
    ListProtocolsListsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListProtocolsListsCommand(output, context);
    };
    return ListProtocolsListsCommand;
}($Command));
export { ListProtocolsListsCommand };
//# sourceMappingURL=ListProtocolsListsCommand.js.map