import { __extends } from "tslib";
import { ListTaskDefinitionFamiliesRequest, ListTaskDefinitionFamiliesResponse } from "../models/models_0";
import { deserializeAws_json1_1ListTaskDefinitionFamiliesCommand, serializeAws_json1_1ListTaskDefinitionFamiliesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of task definition families that are registered to your account (which
 * 			may include task definition families that no longer have any <code>ACTIVE</code> task
 * 			definition revisions).</p>
 * 		       <p>You can filter out task definition families that do not contain any
 * 				<code>ACTIVE</code> task definition revisions by setting the <code>status</code>
 * 			parameter to <code>ACTIVE</code>. You can also filter the results with the
 * 				<code>familyPrefix</code> parameter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, ListTaskDefinitionFamiliesCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, ListTaskDefinitionFamiliesCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const command = new ListTaskDefinitionFamiliesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTaskDefinitionFamiliesCommandInput} for command's `input` shape.
 * @see {@link ListTaskDefinitionFamiliesCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListTaskDefinitionFamiliesCommand = /** @class */ (function (_super) {
    __extends(ListTaskDefinitionFamiliesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListTaskDefinitionFamiliesCommand(input) {
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
    ListTaskDefinitionFamiliesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ECSClient";
        var commandName = "ListTaskDefinitionFamiliesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListTaskDefinitionFamiliesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListTaskDefinitionFamiliesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListTaskDefinitionFamiliesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListTaskDefinitionFamiliesCommand(input, context);
    };
    ListTaskDefinitionFamiliesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListTaskDefinitionFamiliesCommand(output, context);
    };
    return ListTaskDefinitionFamiliesCommand;
}($Command));
export { ListTaskDefinitionFamiliesCommand };
//# sourceMappingURL=ListTaskDefinitionFamiliesCommand.js.map