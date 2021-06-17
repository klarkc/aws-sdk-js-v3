import { __extends } from "tslib";
import { DescribeTaskDefinitionRequest, DescribeTaskDefinitionResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeTaskDefinitionCommand, serializeAws_json1_1DescribeTaskDefinitionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes a task definition. You can specify a <code>family</code> and
 * 				<code>revision</code> to find information about a specific task definition, or you
 * 			can simply specify the family to find the latest <code>ACTIVE</code> revision in that
 * 			family.</p>
 * 		       <note>
 * 			         <p>You can only describe <code>INACTIVE</code> task definitions while an active task
 * 				or service references them.</p>
 * 		       </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, DescribeTaskDefinitionCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, DescribeTaskDefinitionCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const command = new DescribeTaskDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeTaskDefinitionCommandInput} for command's `input` shape.
 * @see {@link DescribeTaskDefinitionCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeTaskDefinitionCommand = /** @class */ (function (_super) {
    __extends(DescribeTaskDefinitionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeTaskDefinitionCommand(input) {
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
    DescribeTaskDefinitionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ECSClient";
        var commandName = "DescribeTaskDefinitionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeTaskDefinitionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeTaskDefinitionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeTaskDefinitionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeTaskDefinitionCommand(input, context);
    };
    DescribeTaskDefinitionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeTaskDefinitionCommand(output, context);
    };
    return DescribeTaskDefinitionCommand;
}($Command));
export { DescribeTaskDefinitionCommand };
//# sourceMappingURL=DescribeTaskDefinitionCommand.js.map