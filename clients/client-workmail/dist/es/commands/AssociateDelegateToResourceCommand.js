import { __extends } from "tslib";
import { AssociateDelegateToResourceRequest, AssociateDelegateToResourceResponse } from "../models/models_0";
import { deserializeAws_json1_1AssociateDelegateToResourceCommand, serializeAws_json1_1AssociateDelegateToResourceCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Adds a member (user or group) to the resource's set of delegates.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, AssociateDelegateToResourceCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, AssociateDelegateToResourceCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const command = new AssociateDelegateToResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateDelegateToResourceCommandInput} for command's `input` shape.
 * @see {@link AssociateDelegateToResourceCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AssociateDelegateToResourceCommand = /** @class */ (function (_super) {
    __extends(AssociateDelegateToResourceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AssociateDelegateToResourceCommand(input) {
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
    AssociateDelegateToResourceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkMailClient";
        var commandName = "AssociateDelegateToResourceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AssociateDelegateToResourceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AssociateDelegateToResourceResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AssociateDelegateToResourceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1AssociateDelegateToResourceCommand(input, context);
    };
    AssociateDelegateToResourceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1AssociateDelegateToResourceCommand(output, context);
    };
    return AssociateDelegateToResourceCommand;
}($Command));
export { AssociateDelegateToResourceCommand };
//# sourceMappingURL=AssociateDelegateToResourceCommand.js.map