"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeploySystemInstanceCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>
 *             <b>Greengrass and Cloud Deployments</b>
 *          </p>
 *          <p>Deploys the system instance to the target specified in <code>CreateSystemInstance</code>. </p>
 *          <p>
 *             <b>Greengrass Deployments</b>
 *          </p>
 *          <p>If the system or any workflows and entities have been updated before this action is called, then the deployment will create a new Amazon Simple Storage Service
 *          resource file and then deploy it.</p>
 *          <p>Since this action creates a Greengrass deployment on the caller's behalf, the calling identity must have write permissions
 *          to the specified Greengrass group. Otherwise, the call will fail with an authorization error.</p>
 *          <p>For information about the artifacts that get added to your Greengrass core device when you use this API, see <a href="https://docs.aws.amazon.com/thingsgraph/latest/ug/iot-tg-greengrass.html">AWS IoT Things Graph and AWS IoT Greengrass</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTThingsGraphClient, DeploySystemInstanceCommand } from "@aws-sdk/client-iotthingsgraph"; // ES Modules import
 * // const { IoTThingsGraphClient, DeploySystemInstanceCommand } = require("@aws-sdk/client-iotthingsgraph"); // CommonJS import
 * const client = new IoTThingsGraphClient(config);
 * const command = new DeploySystemInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeploySystemInstanceCommandInput} for command's `input` shape.
 * @see {@link DeploySystemInstanceCommandOutput} for command's `response` shape.
 * @see {@link IoTThingsGraphClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DeploySystemInstanceCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "IoTThingsGraphClient";
        const commandName = "DeploySystemInstanceCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DeploySystemInstanceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DeploySystemInstanceResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1DeploySystemInstanceCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1DeploySystemInstanceCommand(output, context);
    }
}
exports.DeploySystemInstanceCommand = DeploySystemInstanceCommand;
//# sourceMappingURL=DeploySystemInstanceCommand.js.map