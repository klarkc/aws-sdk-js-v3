"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PutRetentionConfigurationCommand = void 0;
const models_1_1 = require("../models/models_1");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Creates and updates the retention configuration with details
 * 			about retention period (number of days) that AWS Config stores your
 * 			historical information. The API creates the
 * 				<code>RetentionConfiguration</code> object and names the object
 * 			as <b>default</b>. When you have a
 * 				<code>RetentionConfiguration</code> object named <b>default</b>, calling the API modifies the
 * 			default object. </p>
 * 		       <note>
 * 			         <p>Currently, AWS Config supports only one retention
 * 				configuration per region in your account.</p>
 * 		       </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, PutRetentionConfigurationCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, PutRetentionConfigurationCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new PutRetentionConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutRetentionConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutRetentionConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
class PutRetentionConfigurationCommand extends smithy_client_1.Command {
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
        const commandName = "PutRetentionConfigurationCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_1_1.PutRetentionConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_1_1.PutRetentionConfigurationResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1PutRetentionConfigurationCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1PutRetentionConfigurationCommand(output, context);
    }
}
exports.PutRetentionConfigurationCommand = PutRetentionConfigurationCommand;
//# sourceMappingURL=PutRetentionConfigurationCommand.js.map