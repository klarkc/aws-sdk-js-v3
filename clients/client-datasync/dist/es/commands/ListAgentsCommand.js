import { __extends } from "tslib";
import { ListAgentsRequest, ListAgentsResponse } from "../models/models_0";
import { deserializeAws_json1_1ListAgentsCommand, serializeAws_json1_1ListAgentsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of agents owned by an AWS account in the AWS Region specified in the
 *       request. The returned list is ordered by agent Amazon Resource Name (ARN).</p>
 *          <p>By default, this operation returns a maximum of 100 agents. This operation supports
 *       pagination that enables you to optionally reduce the number of agents returned in a
 *       response.</p>
 *          <p>If you have more agents than are returned in a response (that is, the response returns
 *       only a truncated list of your agents), the response contains a marker that you can specify in
 *       your next request to fetch the next page of agents.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, ListAgentsCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, ListAgentsCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const command = new ListAgentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAgentsCommandInput} for command's `input` shape.
 * @see {@link ListAgentsCommandOutput} for command's `response` shape.
 * @see {@link DataSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListAgentsCommand = /** @class */ (function (_super) {
    __extends(ListAgentsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListAgentsCommand(input) {
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
    ListAgentsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DataSyncClient";
        var commandName = "ListAgentsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListAgentsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListAgentsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListAgentsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListAgentsCommand(input, context);
    };
    ListAgentsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListAgentsCommand(output, context);
    };
    return ListAgentsCommand;
}($Command));
export { ListAgentsCommand };
//# sourceMappingURL=ListAgentsCommand.js.map