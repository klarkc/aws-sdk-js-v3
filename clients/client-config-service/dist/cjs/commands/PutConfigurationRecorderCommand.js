"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PutConfigurationRecorderCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Creates a new configuration recorder to record the selected
 * 			resource configurations.</p>
 * 		       <p>You can use this action to change the role <code>roleARN</code>
 * 			or the <code>recordingGroup</code> of an existing recorder. To
 * 			change the role, call the action on the existing configuration
 * 			recorder and specify a role.</p>
 * 		       <note>
 * 			         <p>Currently, you can specify only one configuration recorder
 * 				per region in your account.</p>
 * 			         <p>If <code>ConfigurationRecorder</code> does not have the
 * 					<b>recordingGroup</b> parameter
 * 				specified, the default is to record all supported resource
 * 				types.</p>
 * 		       </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, PutConfigurationRecorderCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, PutConfigurationRecorderCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new PutConfigurationRecorderCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutConfigurationRecorderCommandInput} for command's `input` shape.
 * @see {@link PutConfigurationRecorderCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
class PutConfigurationRecorderCommand extends smithy_client_1.Command {
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
        const clientName = "ConfigServiceClient";
        const commandName = "PutConfigurationRecorderCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.PutConfigurationRecorderRequest.filterSensitiveLog,
            outputFilterSensitiveLog: (output) => output,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1PutConfigurationRecorderCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1PutConfigurationRecorderCommand(output, context);
    }
}
exports.PutConfigurationRecorderCommand = PutConfigurationRecorderCommand;
//# sourceMappingURL=PutConfigurationRecorderCommand.js.map