import { __extends } from "tslib";
import { CreateLayerRequest, CreateLayerResult } from "../models/models_0";
import { deserializeAws_json1_1CreateLayerCommand, serializeAws_json1_1CreateLayerCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a layer. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinglayers-basics-create.html">How to
 *         Create a Layer</a>.</p>
 *          <note>
 *             <p>You should use <b>CreateLayer</b> for noncustom layer types such as PHP App Server only if the stack
 *         does not have an existing layer of that type. A stack can have at most one instance of each
 *         noncustom layer; if you attempt to create a second instance, <b>CreateLayer</b> fails. A
 *         stack can have an arbitrary number of custom layers, so you can call <b>CreateLayer</b> as
 *         many times as you like for that layer type.</p>
 *          </note>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
 *       level for the stack, or an attached policy that explicitly grants permissions. For more
 *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, CreateLayerCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, CreateLayerCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const command = new CreateLayerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateLayerCommandInput} for command's `input` shape.
 * @see {@link CreateLayerCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateLayerCommand = /** @class */ (function (_super) {
    __extends(CreateLayerCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateLayerCommand(input) {
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
    CreateLayerCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "OpsWorksClient";
        var commandName = "CreateLayerCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateLayerRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateLayerResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateLayerCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateLayerCommand(input, context);
    };
    CreateLayerCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateLayerCommand(output, context);
    };
    return CreateLayerCommand;
}($Command));
export { CreateLayerCommand };
//# sourceMappingURL=CreateLayerCommand.js.map