import { __extends } from "tslib";
import { ListConnectionsInput, ListConnectionsOutput } from "../models/models_0";
import { deserializeAws_json1_0ListConnectionsCommand, serializeAws_json1_0ListConnectionsCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the connections associated with your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeStarConnectionsClient, ListConnectionsCommand } from "@aws-sdk/client-codestar-connections"; // ES Modules import
 * // const { CodeStarConnectionsClient, ListConnectionsCommand } = require("@aws-sdk/client-codestar-connections"); // CommonJS import
 * const client = new CodeStarConnectionsClient(config);
 * const command = new ListConnectionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListConnectionsCommandInput} for command's `input` shape.
 * @see {@link ListConnectionsCommandOutput} for command's `response` shape.
 * @see {@link CodeStarConnectionsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListConnectionsCommand = /** @class */ (function (_super) {
    __extends(ListConnectionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListConnectionsCommand(input) {
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
    ListConnectionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeStarConnectionsClient";
        var commandName = "ListConnectionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListConnectionsInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListConnectionsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListConnectionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0ListConnectionsCommand(input, context);
    };
    ListConnectionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0ListConnectionsCommand(output, context);
    };
    return ListConnectionsCommand;
}($Command));
export { ListConnectionsCommand };
//# sourceMappingURL=ListConnectionsCommand.js.map