"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePresetCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>The CreatePreset operation creates a preset with settings that you specify.</p>
 *         <important>
 *             <p>Elastic Transcoder checks the CreatePreset settings to ensure that they meet Elastic Transcoder requirements
 *             and to determine whether they comply with H.264 standards. If your settings are not
 *             valid for Elastic Transcoder, Elastic Transcoder returns an HTTP 400 response (<code>ValidationException</code>) and
 *             does not create the preset. If the settings are valid for Elastic Transcoder but aren't strictly
 *             compliant with the H.264 standard, Elastic Transcoder creates the preset and returns a warning message
 *             in the response. This helps you determine whether your settings comply with the H.264
 *             standard while giving you greater flexibility with respect to the video that Elastic Transcoder
 *             produces.</p>
 *          </important>
 *         <p>Elastic Transcoder uses the H.264 video-compression format. For more information, see the International
 *             Telecommunication Union publication <i>Recommendation ITU-T H.264: Advanced video coding
 *                 for generic audiovisual services</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticTranscoderClient, CreatePresetCommand } from "@aws-sdk/client-elastic-transcoder"; // ES Modules import
 * // const { ElasticTranscoderClient, CreatePresetCommand } = require("@aws-sdk/client-elastic-transcoder"); // CommonJS import
 * const client = new ElasticTranscoderClient(config);
 * const command = new CreatePresetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreatePresetCommandInput} for command's `input` shape.
 * @see {@link CreatePresetCommandOutput} for command's `response` shape.
 * @see {@link ElasticTranscoderClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CreatePresetCommand extends smithy_client_1.Command {
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
        const clientName = "ElasticTranscoderClient";
        const commandName = "CreatePresetCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CreatePresetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CreatePresetResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1CreatePresetCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1CreatePresetCommand(output, context);
    }
}
exports.CreatePresetCommand = CreatePresetCommand;
//# sourceMappingURL=CreatePresetCommand.js.map