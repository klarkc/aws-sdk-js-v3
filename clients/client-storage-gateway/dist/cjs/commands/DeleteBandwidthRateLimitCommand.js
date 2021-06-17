"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteBandwidthRateLimitCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Deletes the bandwidth rate limits of a gateway. You can delete either the upload and
 *          download bandwidth rate limit, or you can delete both. If you delete only one of the
 *          limits, the other limit remains unchanged. To specify which gateway to work with, use the
 *          Amazon Resource Name (ARN) of the gateway in your request. This operation is supported for
 *          the stored volume, cached volume and tape gateway types.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DeleteBandwidthRateLimitCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DeleteBandwidthRateLimitCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new DeleteBandwidthRateLimitCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteBandwidthRateLimitCommandInput} for command's `input` shape.
 * @see {@link DeleteBandwidthRateLimitCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DeleteBandwidthRateLimitCommand extends smithy_client_1.Command {
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
        const clientName = "StorageGatewayClient";
        const commandName = "DeleteBandwidthRateLimitCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DeleteBandwidthRateLimitInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DeleteBandwidthRateLimitOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1DeleteBandwidthRateLimitCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1DeleteBandwidthRateLimitCommand(output, context);
    }
}
exports.DeleteBandwidthRateLimitCommand = DeleteBandwidthRateLimitCommand;
//# sourceMappingURL=DeleteBandwidthRateLimitCommand.js.map