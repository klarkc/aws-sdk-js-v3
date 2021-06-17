"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RotateIngestEndpointCredentialsCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * Rotate the IngestEndpoint's username and password, as specified by the IngestEndpoint's id.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaPackageClient, RotateIngestEndpointCredentialsCommand } from "@aws-sdk/client-mediapackage"; // ES Modules import
 * // const { MediaPackageClient, RotateIngestEndpointCredentialsCommand } = require("@aws-sdk/client-mediapackage"); // CommonJS import
 * const client = new MediaPackageClient(config);
 * const command = new RotateIngestEndpointCredentialsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RotateIngestEndpointCredentialsCommandInput} for command's `input` shape.
 * @see {@link RotateIngestEndpointCredentialsCommandOutput} for command's `response` shape.
 * @see {@link MediaPackageClientResolvedConfig | config} for command's `input` shape.
 *
 */
class RotateIngestEndpointCredentialsCommand extends smithy_client_1.Command {
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
        const clientName = "MediaPackageClient";
        const commandName = "RotateIngestEndpointCredentialsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.RotateIngestEndpointCredentialsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.RotateIngestEndpointCredentialsResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1RotateIngestEndpointCredentialsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1RotateIngestEndpointCredentialsCommand(output, context);
    }
}
exports.RotateIngestEndpointCredentialsCommand = RotateIngestEndpointCredentialsCommand;
//# sourceMappingURL=RotateIngestEndpointCredentialsCommand.js.map