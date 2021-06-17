"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePipelineCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Creates a new, empty pipeline. Use <a>PutPipelineDefinition</a> to populate the pipeline.</p>
 *
 *         <examples>
 *             <request>
 *
 * POST / HTTP/1.1
 * Content-Type: application/x-amz-json-1.1
 * X-Amz-Target: DataPipeline.CreatePipeline
 * Content-Length: 91
 * Host: datapipeline.us-east-1.amazonaws.com
 * X-Amz-Date: Mon, 12 Nov 2012 17:49:52 GMT
 * Authorization: AuthParams
 *
 * {"name": "myPipeline",
 *  "uniqueId": "123456789",
 *  "description": "This is my first pipeline"}
 *
 *             </request>
 *
 *             <response>
 *
 * HTTP/1.1 200
 * x-amzn-RequestId: b16911ce-0774-11e2-af6f-6bc7a6be60d9
 * Content-Type: application/x-amz-json-1.1
 * Content-Length: 40
 * Date: Mon, 12 Nov 2012 17:50:53 GMT
 *
 * {"pipelineId": "df-06372391ZG65EXAMPLE"}
 *
 *             </response>
 *         </examples>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataPipelineClient, CreatePipelineCommand } from "@aws-sdk/client-data-pipeline"; // ES Modules import
 * // const { DataPipelineClient, CreatePipelineCommand } = require("@aws-sdk/client-data-pipeline"); // CommonJS import
 * const client = new DataPipelineClient(config);
 * const command = new CreatePipelineCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreatePipelineCommandInput} for command's `input` shape.
 * @see {@link CreatePipelineCommandOutput} for command's `response` shape.
 * @see {@link DataPipelineClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CreatePipelineCommand extends smithy_client_1.Command {
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
        const clientName = "DataPipelineClient";
        const commandName = "CreatePipelineCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CreatePipelineInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CreatePipelineOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1CreatePipelineCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1CreatePipelineCommand(output, context);
    }
}
exports.CreatePipelineCommand = CreatePipelineCommand;
//# sourceMappingURL=CreatePipelineCommand.js.map