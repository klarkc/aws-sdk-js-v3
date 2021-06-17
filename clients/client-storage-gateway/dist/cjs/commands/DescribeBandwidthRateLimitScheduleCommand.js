"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeBandwidthRateLimitScheduleCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>
 *          Returns information about the bandwidth rate limit schedule of a gateway. By default, gateways do
 *          not have bandwidth rate limit schedules, which means no bandwidth rate limiting is in effect. This
 *          operation is supported only in the volume and tape gateway types.
 *       </p>
 *
 *          <p>This operation returns information about a gateway's bandwidth rate limit schedule. A bandwidth
 *          rate limit schedule consists of one or more bandwidth rate limit intervals. A bandwidth rate limit
 *          interval defines a period of time on one or more days of the week, during which bandwidth rate
 *          limits are specified for uploading, downloading, or both.
 *       </p>
 *
 *          <p>
 *          A bandwidth rate limit interval consists of one or more days of the week, a start hour and minute,
 *          an ending hour and minute, and bandwidth rate limits for uploading and downloading
 *       </p>
 *
 *          <p>
 *          If no bandwidth rate limit schedule intervals are set for the gateway, this operation returns an
 *          empty response. To specify which gateway to describe, use the Amazon Resource Name (ARN)
 *          of the gateway in your request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DescribeBandwidthRateLimitScheduleCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DescribeBandwidthRateLimitScheduleCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new DescribeBandwidthRateLimitScheduleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeBandwidthRateLimitScheduleCommandInput} for command's `input` shape.
 * @see {@link DescribeBandwidthRateLimitScheduleCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DescribeBandwidthRateLimitScheduleCommand extends smithy_client_1.Command {
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
        const commandName = "DescribeBandwidthRateLimitScheduleCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DescribeBandwidthRateLimitScheduleInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DescribeBandwidthRateLimitScheduleOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1DescribeBandwidthRateLimitScheduleCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1DescribeBandwidthRateLimitScheduleCommand(output, context);
    }
}
exports.DescribeBandwidthRateLimitScheduleCommand = DescribeBandwidthRateLimitScheduleCommand;
//# sourceMappingURL=DescribeBandwidthRateLimitScheduleCommand.js.map