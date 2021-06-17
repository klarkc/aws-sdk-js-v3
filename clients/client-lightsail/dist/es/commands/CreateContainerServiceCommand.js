import { __extends } from "tslib";
import { CreateContainerServiceRequest, CreateContainerServiceResult } from "../models/models_0";
import { deserializeAws_json1_1CreateContainerServiceCommand, serializeAws_json1_1CreateContainerServiceCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an Amazon Lightsail container service.</p>
 *
 *          <p>A Lightsail container service is a compute resource to which you can deploy containers.
 *       For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-container-services">Container services in Amazon Lightsail</a> in the <i>Lightsail Dev
 *         Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, CreateContainerServiceCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, CreateContainerServiceCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new CreateContainerServiceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateContainerServiceCommandInput} for command's `input` shape.
 * @see {@link CreateContainerServiceCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateContainerServiceCommand = /** @class */ (function (_super) {
    __extends(CreateContainerServiceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateContainerServiceCommand(input) {
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
    CreateContainerServiceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "CreateContainerServiceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateContainerServiceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateContainerServiceResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateContainerServiceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateContainerServiceCommand(input, context);
    };
    CreateContainerServiceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateContainerServiceCommand(output, context);
    };
    return CreateContainerServiceCommand;
}($Command));
export { CreateContainerServiceCommand };
//# sourceMappingURL=CreateContainerServiceCommand.js.map