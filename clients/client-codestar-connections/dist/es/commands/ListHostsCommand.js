import { __extends } from "tslib";
import { ListHostsInput, ListHostsOutput } from "../models/models_0";
import { deserializeAws_json1_0ListHostsCommand, serializeAws_json1_0ListHostsCommand } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the hosts associated with your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeStarConnectionsClient, ListHostsCommand } from "@aws-sdk/client-codestar-connections"; // ES Modules import
 * // const { CodeStarConnectionsClient, ListHostsCommand } = require("@aws-sdk/client-codestar-connections"); // CommonJS import
 * const client = new CodeStarConnectionsClient(config);
 * const command = new ListHostsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListHostsCommandInput} for command's `input` shape.
 * @see {@link ListHostsCommandOutput} for command's `response` shape.
 * @see {@link CodeStarConnectionsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListHostsCommand = /** @class */ (function (_super) {
    __extends(ListHostsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListHostsCommand(input) {
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
    ListHostsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeStarConnectionsClient";
        var commandName = "ListHostsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListHostsInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListHostsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListHostsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0ListHostsCommand(input, context);
    };
    ListHostsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0ListHostsCommand(output, context);
    };
    return ListHostsCommand;
}($Command));
export { ListHostsCommand };
//# sourceMappingURL=ListHostsCommand.js.map