"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResetCacheCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Resets all cache disks that have encountered an error and makes the disks available for
 *          reconfiguration as cache storage. If your cache disk encounters an error, the gateway
 *          prevents read and write operations on virtual tapes in the gateway. For example, an error
 *          can occur when a disk is corrupted or removed from the gateway. When a cache is reset, the
 *          gateway loses its cache storage. At this point, you can reconfigure the disks as cache
 *          disks. This operation is only supported in the cached volume and tape types.</p>
 *
 *          <important>
 *             <p>If the cache disk you are resetting contains data that has not been uploaded to
 *             Amazon S3 yet, that data can be lost. After you reset cache disks, there will be no
 *             configured cache disks left in the gateway, so you must configure at least one new cache
 *             disk for your gateway to function properly.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, ResetCacheCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, ResetCacheCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new ResetCacheCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ResetCacheCommandInput} for command's `input` shape.
 * @see {@link ResetCacheCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ResetCacheCommand extends smithy_client_1.Command {
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
        const commandName = "ResetCacheCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ResetCacheInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ResetCacheOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1ResetCacheCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1ResetCacheCommand(output, context);
    }
}
exports.ResetCacheCommand = ResetCacheCommand;
//# sourceMappingURL=ResetCacheCommand.js.map