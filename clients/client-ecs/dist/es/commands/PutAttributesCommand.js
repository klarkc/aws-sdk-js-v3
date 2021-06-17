import { __extends } from "tslib";
import { PutAttributesRequest, PutAttributesResponse } from "../models/models_0";
import { deserializeAws_json1_1PutAttributesCommand, serializeAws_json1_1PutAttributesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Create or update an attribute on an Amazon ECS resource. If the attribute does not exist,
 * 			it is created. If the attribute exists, its value is replaced with the specified value.
 * 			To delete an attribute, use <a>DeleteAttributes</a>. For more information,
 * 			see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-constraints.html#attributes">Attributes</a> in the
 * 			<i>Amazon Elastic Container Service Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, PutAttributesCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, PutAttributesCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const command = new PutAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutAttributesCommandInput} for command's `input` shape.
 * @see {@link PutAttributesCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutAttributesCommand = /** @class */ (function (_super) {
    __extends(PutAttributesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutAttributesCommand(input) {
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
    PutAttributesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ECSClient";
        var commandName = "PutAttributesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutAttributesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PutAttributesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutAttributesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1PutAttributesCommand(input, context);
    };
    PutAttributesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1PutAttributesCommand(output, context);
    };
    return PutAttributesCommand;
}($Command));
export { PutAttributesCommand };
//# sourceMappingURL=PutAttributesCommand.js.map