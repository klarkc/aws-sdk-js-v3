import { __extends } from "tslib";
import { ListRulesPackagesRequest, ListRulesPackagesResponse } from "../models/models_0";
import { deserializeAws_json1_1ListRulesPackagesCommand, serializeAws_json1_1ListRulesPackagesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists all available Amazon Inspector rules packages.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, ListRulesPackagesCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, ListRulesPackagesCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * const client = new InspectorClient(config);
 * const command = new ListRulesPackagesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListRulesPackagesCommandInput} for command's `input` shape.
 * @see {@link ListRulesPackagesCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListRulesPackagesCommand = /** @class */ (function (_super) {
    __extends(ListRulesPackagesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListRulesPackagesCommand(input) {
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
    ListRulesPackagesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "InspectorClient";
        var commandName = "ListRulesPackagesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListRulesPackagesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListRulesPackagesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListRulesPackagesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListRulesPackagesCommand(input, context);
    };
    ListRulesPackagesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListRulesPackagesCommand(output, context);
    };
    return ListRulesPackagesCommand;
}($Command));
export { ListRulesPackagesCommand };
//# sourceMappingURL=ListRulesPackagesCommand.js.map