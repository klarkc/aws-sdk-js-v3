"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBandwidthRateLimitCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Updates the bandwidth rate limits of a gateway. You can update both the upload and
 *          download bandwidth rate limit or specify only one of the two. If you don't set a
 *          bandwidth rate limit, the existing rate limit remains. This operation is supported for the
 *          stored volume, cached volume, and tape gateway types.</p>
 *
 *          <p>By default, a gateway's bandwidth rate limits are not set. If you don't set
 *          any limit, the gateway does not have any limitations on its bandwidth usage and could
 *          potentially use the maximum available bandwidth.</p>
 *
 *          <p>To specify which gateway to update, use the Amazon Resource Name (ARN) of the gateway in
 *          your request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, UpdateBandwidthRateLimitCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, UpdateBandwidthRateLimitCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new UpdateBandwidthRateLimitCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateBandwidthRateLimitCommandInput} for command's `input` shape.
 * @see {@link UpdateBandwidthRateLimitCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
class UpdateBandwidthRateLimitCommand extends smithy_client_1.Command {
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
        const commandName = "UpdateBandwidthRateLimitCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.UpdateBandwidthRateLimitInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.UpdateBandwidthRateLimitOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1UpdateBandwidthRateLimitCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1UpdateBandwidthRateLimitCommand(output, context);
    }
}
exports.UpdateBandwidthRateLimitCommand = UpdateBandwidthRateLimitCommand;
//# sourceMappingURL=UpdateBandwidthRateLimitCommand.js.map