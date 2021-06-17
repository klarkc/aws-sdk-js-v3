"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetTelemetryMetadataCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Information about the data that is collected for the specified assessment
 *          run.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, GetTelemetryMetadataCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, GetTelemetryMetadataCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * const client = new InspectorClient(config);
 * const command = new GetTelemetryMetadataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetTelemetryMetadataCommandInput} for command's `input` shape.
 * @see {@link GetTelemetryMetadataCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
class GetTelemetryMetadataCommand extends smithy_client_1.Command {
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
        const clientName = "InspectorClient";
        const commandName = "GetTelemetryMetadataCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.GetTelemetryMetadataRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.GetTelemetryMetadataResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1GetTelemetryMetadataCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1GetTelemetryMetadataCommand(output, context);
    }
}
exports.GetTelemetryMetadataCommand = GetTelemetryMetadataCommand;
//# sourceMappingURL=GetTelemetryMetadataCommand.js.map