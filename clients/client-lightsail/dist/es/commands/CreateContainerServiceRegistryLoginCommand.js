import { __extends } from "tslib";
import { CreateContainerServiceRegistryLoginRequest, CreateContainerServiceRegistryLoginResult, } from "../models/models_0";
import { deserializeAws_json1_1CreateContainerServiceRegistryLoginCommand, serializeAws_json1_1CreateContainerServiceRegistryLoginCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a temporary set of log in credentials that you can use to log in to the Docker
 *       process on your local machine. After you're logged in, you can use the native Docker commands
 *       to push your local container images to the container image registry of your Amazon Lightsail
 *       account so that you can use them with your Lightsail container service. The log in
 *       credentials expire 12 hours after they are created, at which point you will need to create a
 *       new set of log in credentials.</p>
 *
 *          <note>
 *             <p>You can only push container images to the container service registry of your Lightsail
 *         account. You cannot pull container images or perform any other container image management
 *         actions on the container service registry.</p>
 *          </note>
 *
 *          <p>After you push your container images to the container image registry of your Lightsail
 *       account, use the <code>RegisterContainerImage</code> action to register the pushed images to a
 *       specific Lightsail container service.</p>
 *
 *          <note>
 *             <p>This action is not required if you install and use the Lightsail Control
 *         (lightsailctl) plugin to push container images to your Lightsail container service. For
 *         more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-pushing-container-images">Pushing and managing container images on your Amazon Lightsail container services</a>
 *         in the <i>Lightsail Dev Guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, CreateContainerServiceRegistryLoginCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, CreateContainerServiceRegistryLoginCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new CreateContainerServiceRegistryLoginCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateContainerServiceRegistryLoginCommandInput} for command's `input` shape.
 * @see {@link CreateContainerServiceRegistryLoginCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateContainerServiceRegistryLoginCommand = /** @class */ (function (_super) {
    __extends(CreateContainerServiceRegistryLoginCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateContainerServiceRegistryLoginCommand(input) {
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
    CreateContainerServiceRegistryLoginCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "CreateContainerServiceRegistryLoginCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateContainerServiceRegistryLoginRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateContainerServiceRegistryLoginResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateContainerServiceRegistryLoginCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateContainerServiceRegistryLoginCommand(input, context);
    };
    CreateContainerServiceRegistryLoginCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateContainerServiceRegistryLoginCommand(output, context);
    };
    return CreateContainerServiceRegistryLoginCommand;
}($Command));
export { CreateContainerServiceRegistryLoginCommand };
//# sourceMappingURL=CreateContainerServiceRegistryLoginCommand.js.map