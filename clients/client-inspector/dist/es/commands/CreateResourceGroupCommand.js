import { __extends } from "tslib";
import { CreateResourceGroupRequest, CreateResourceGroupResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateResourceGroupCommand, serializeAws_json1_1CreateResourceGroupCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a resource group using the specified set of tags (key and value pairs) that
 *          are used to select the EC2 instances to be included in an Amazon Inspector assessment
 *          target. The created resource group is then used to create an Amazon Inspector assessment
 *          target. For more information, see <a>CreateAssessmentTarget</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, CreateResourceGroupCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, CreateResourceGroupCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * const client = new InspectorClient(config);
 * const command = new CreateResourceGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateResourceGroupCommandInput} for command's `input` shape.
 * @see {@link CreateResourceGroupCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateResourceGroupCommand = /** @class */ (function (_super) {
    __extends(CreateResourceGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateResourceGroupCommand(input) {
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
    CreateResourceGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "InspectorClient";
        var commandName = "CreateResourceGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateResourceGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateResourceGroupResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateResourceGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateResourceGroupCommand(input, context);
    };
    CreateResourceGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateResourceGroupCommand(output, context);
    };
    return CreateResourceGroupCommand;
}($Command));
export { CreateResourceGroupCommand };
//# sourceMappingURL=CreateResourceGroupCommand.js.map