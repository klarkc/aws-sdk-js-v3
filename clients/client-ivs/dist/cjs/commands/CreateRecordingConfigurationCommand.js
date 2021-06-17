"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRecordingConfigurationCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Creates a new recording configuration, used to enable recording to Amazon S3.</p>
 *          <p>
 *             <b>Known issue:</b> In the us-east-1 region, if you use the AWS
 *       CLI to create a recording configuration, it returns success even if the S3 bucket is in a
 *       different region. In this case, the <code>state</code> of the recording configuration is
 *         <code>CREATE_FAILED</code> (instead of <code>ACTIVE</code>). (In other regions, the CLI
 *       correctly returns failure if the bucket is in a different region.)</p>
 *          <p>
 *             <b>Workaround:</b> Ensure that your S3 bucket is in the same region as the recording
 *       configuration. If you create a recording configuration in a different region as your S3
 *       bucket, delete that recording configuration and create a new one with an S3 bucket from the
 *       correct region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IvsClient, CreateRecordingConfigurationCommand } from "@aws-sdk/client-ivs"; // ES Modules import
 * // const { IvsClient, CreateRecordingConfigurationCommand } = require("@aws-sdk/client-ivs"); // CommonJS import
 * const client = new IvsClient(config);
 * const command = new CreateRecordingConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateRecordingConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateRecordingConfigurationCommandOutput} for command's `response` shape.
 * @see {@link IvsClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CreateRecordingConfigurationCommand extends smithy_client_1.Command {
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
        const clientName = "IvsClient";
        const commandName = "CreateRecordingConfigurationCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CreateRecordingConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CreateRecordingConfigurationResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1CreateRecordingConfigurationCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1CreateRecordingConfigurationCommand(output, context);
    }
}
exports.CreateRecordingConfigurationCommand = CreateRecordingConfigurationCommand;
//# sourceMappingURL=CreateRecordingConfigurationCommand.js.map