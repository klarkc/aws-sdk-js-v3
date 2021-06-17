"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PutObjectRetentionCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restXml_1 = require("../protocols/Aws_restXml");
const middleware_bucket_endpoint_1 = require("@aws-sdk/middleware-bucket-endpoint");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Places an Object Retention configuration on an object. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock.html">Locking Objects</a>.
 *          </p>
 *          <p>This action is not supported by Amazon S3 on Outposts.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, PutObjectRetentionCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, PutObjectRetentionCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const command = new PutObjectRetentionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutObjectRetentionCommandInput} for command's `input` shape.
 * @see {@link PutObjectRetentionCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class PutObjectRetentionCommand extends smithy_client_1.Command {
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
        this.middlewareStack.use(middleware_bucket_endpoint_1.getBucketEndpointPlugin(configuration));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "S3Client";
        const commandName = "PutObjectRetentionCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.PutObjectRetentionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.PutObjectRetentionOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restXml_1.serializeAws_restXmlPutObjectRetentionCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restXml_1.deserializeAws_restXmlPutObjectRetentionCommand(output, context);
    }
}
exports.PutObjectRetentionCommand = PutObjectRetentionCommand;
//# sourceMappingURL=PutObjectRetentionCommand.js.map